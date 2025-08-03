import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import News from "./pages/News";
import SpmuDocs from "./pages/SpmuDocs";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import StudentZone from "./pages/StudentZone";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import WomenHelpline from "./pages/WomenHelpline";
import NotFound from "./pages/NotFound";
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
             <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academic" element={<Academic />} />
              <Route path="/news" element={<News />} />
              <Route path="/spmu-docs" element={<SpmuDocs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/events" element={<Events />} />
              <Route path="/student-zone" element={<StudentZone />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/women-helpline" element={<WomenHelpline />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
