import { useState, useContext, createContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

type Language = "en" | "ar" | "ur";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: Direction;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  direction: "ltr",
  t: (key: string) => key,
});

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    marketplace: "Marketplace",
    intelligence: "Intelligence",
    about: "About",
    dashboard: "Dashboard",
    governance: "Governance",
    pilots: "Pilots",
    partners: "Partners",
    howItWorks: "How It Works",
    contact: "Contact",
    joinEcosystem: "Become a Partner",
    aiHub: "AI Hub",
  },
  ar: {
    home: "الرئيسية",
    marketplace: "السوق",
    intelligence: "الذكاء",
    about: "عن المنصة",
    dashboard: "لوحة التحكم",
    governance: "الحوكمة",
    pilots: "المشاريع التجريبية",
    joinEcosystem: "انضم كشريك",
    aiHub: "منصة الذكاء",
  },
  ur: {
    home: "ہوم",
    marketplace: "مارکیٹ",
    intelligence: "انٹیلیجنس",
    about: "ہمارے بارے میں",
    dashboard: "ڈیش بورڈ",
    governance: "گورننس",
    pilots: "پائلٹ پروگرام",
    joinEcosystem: "پارٹنر بنیں",
    aiHub: "اے آئی ہب",
  },
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const direction: Direction = language === "ar" || language === "ur" ? "rtl" : "ltr";
  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      <div dir={direction}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

const languageLabels: Record<Language, string> = {
  en: "English",
  ar: "العربية",
  ur: "اردو",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/marketplace", label: t("marketplace") },
    { path: "/governance", label: t("governance") },
    { path: "/pilots", label: t("pilots") },
    { path: "/intelligence", label: t("intelligence") },
    { path: "/partner-dashboard", label: t("dashboard") },
    { path: "/about", label: t("about") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220_25%_8%)]/95 backdrop-blur-md border-b border-[hsl(220_18%_20%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg text-[hsl(220_15%_95%)]">
                AIgilityX
              </span>
              <Badge variant="outline" className="ml-2 text-[10px] border-primary/30 text-primary">
                {t("aiHub")}
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]"
                >
                  <Globe size={18} className="mr-1" />
                  <span className="hidden sm:inline">{languageLabels[language]}</span>
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)]">
                {(Object.keys(languageLabels) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`cursor-pointer ${
                      language === lang ? "text-primary" : "text-[hsl(220_12%_70%)]"
                    } hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]`}
                  >
                    {languageLabels[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/onboarding">
                <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  {t("joinEcosystem")}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[hsl(220_12%_70%)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[hsl(220_18%_20%)] animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[hsl(220_18%_20%)] mt-2">
                <Link to="/onboarding" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    {t("joinEcosystem")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
