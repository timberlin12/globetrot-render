import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Hotel from "./pages/Hotel";
import HotelDetail from "./pages/HotelDetail";
import Transport from "./pages/Transport";
import TransportDetail from "./pages/TransportDetail";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/transport/:id" element={<TransportDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
