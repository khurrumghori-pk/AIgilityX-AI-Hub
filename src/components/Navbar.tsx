import { useState, createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Language = 'en' | 'ar' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      home: "Home",
      marketplace: "Marketplace",
      intelligence: "Intelligence",
      about: "About",
      onboarding: "Partner Onboarding",
      dashboard: "Partner Dashboard",
      getStarted: "Get Started"
    },
    ar: {
      home: "الرئيسية",
      marketplace: "السوق",
      intelligence: "الذكاء",
      about: "عن",
      onboarding: "تسجيل الشركاء",
      dashboard: "لوحة الشركاء",
      getStarted: "ابدأ"
    },
    ur: {
      home: "ہوم",
      marketplace: "مارکیٹ پلیس",
      intelligence: "انٹیلیجنس",
      about: "کے بارے میں",
      onboarding: "پارٹنر رجسٹریشن",
      dashboard: "پارٹنر ڈیش بورڈ",
      getStarted: "شروع کریں"
    }
  };

  const t = translations[language];

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.marketplace, path: "/marketplace" },
    { name: t.intelligence, path: "/intelligence" },
    { name: t.about, path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" dir={language === 'ar' || language === 'ur' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl text-foreground">AIgilityX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/partner-dashboard">
              <Button variant="outline">{t.dashboard}</Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="outline">{t.onboarding}</Button>
            </Link>
            
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger className="w-[120px]">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="ur">اردو</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-gradient-primary hover:opacity-90">{t.getStarted}</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/partner-dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  {t.dashboard}
                </Button>
              </Link>
              <Link to="/onboarding" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  {t.onboarding}
                </Button>
              </Link>
              
              <div className="px-0 py-2">
                <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                  <SelectTrigger className="w-full">
                    <Globe className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="ur">اردو</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90">
                {t.getStarted}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
