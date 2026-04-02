import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar, { LanguageProvider } from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Intelligence from "./pages/Intelligence";
import Onboarding from "./pages/Onboarding";
import PartnerDashboard from "./pages/PartnerDashboard";
import About from "./pages/About";
import Governance from "./pages/Governance";
import Pilots from "./pages/Pilots";
import CountryLanding from "./pages/CountryLanding";
import FoundingPartners from "./pages/FoundingPartners";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import PartnerRegistration from "./pages/PartnerRegistration";
import PartnerDetail from "./pages/PartnerDetail";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/intelligence" element={<Intelligence />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/partner-dashboard" element={<PartnerDashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/governance" element={<Governance />} />
                  <Route path="/pilots" element={<Pilots />} />
                  <Route path="/country/:country" element={<CountryLanding />} />
                  <Route path="/partners" element={<FoundingPartners />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/partner-registration" element={<PartnerRegistration />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
