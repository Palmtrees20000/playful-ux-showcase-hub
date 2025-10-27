import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AwardcoCaseStudy from "./pages/AwardcoCaseStudy";
import CraigslistCaseStudy from "./pages/CraigslistCaseStudy";
import UvuCaseStudy from "./pages/UvuCaseStudy";
import MemoryMattersCaseStudy from "./pages/MemoryMattersCaseStudy";
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
          <Route path="/case-study/awardco" element={<AwardcoCaseStudy />} />
          <Route path="/case-study/craigslist" element={<CraigslistCaseStudy />} />
          <Route path="/case-study/uvu" element={<UvuCaseStudy />} />
          <Route path="/case-study/memory-matters" element={<MemoryMattersCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
