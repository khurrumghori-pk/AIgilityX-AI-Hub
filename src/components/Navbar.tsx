import { useState, useContext, createContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, ChevronDown, Users, BarChart3, Shield, MapPin, LogOut, Layers } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

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
    home: "Home", marketplace: "Marketplace", intelligence: "Intelligence",
    about: "About", dashboard: "Partner Dashboard", governance: "Governance",
    pilots: "Pilots", partners: "Partners", foundingPartners: "Founding Partners",
    howItWorks: "How It Works", contact: "Contact", joinEcosystem: "Become a Partner",
    aiHub: "AI Hub", adminPanel: "Admin Panel", signOut: "Sign Out",
    regionalHubs: "Regional Hubs", uae: "UAE", ksa: "KSA", pakistan: "Pakistan",
    ecosystem: "Ecosystem", egypt: "Egypt", qatar: "Qatar", bahrain: "Bahrain",
    india: "India", bangladesh: "Bangladesh", uk: "UK", germany: "Germany",
    turkey: "Turkey", oman: "Oman", kuwait: "Kuwait", srilanka: "Sri Lanka",
    france: "France", netherlands: "Netherlands", usa: "USA", canada: "Canada",
    gcc: "GCC & MENA", southAsia: "South Asia", europe: "Europe", americas: "Americas",
  },
  ar: {
    home: "الرئيسية", marketplace: "السوق", intelligence: "الذكاء",
    about: "عن المنصة", dashboard: "لوحة تحكم الشريك", governance: "الحوكمة",
    pilots: "المشاريع التجريبية", partners: "الشركاء", foundingPartners: "الشركاء المؤسسون",
    howItWorks: "كيف يعمل", contact: "اتصل بنا", joinEcosystem: "انضم كشريك",
    aiHub: "منصة الذكاء", adminPanel: "لوحة الإدارة", signOut: "تسجيل خروج",
    regionalHubs: "المراكز الإقليمية", uae: "الإمارات", ksa: "السعودية", pakistan: "باكستان",
    ecosystem: "النظام البيئي", egypt: "مصر", qatar: "قطر", bahrain: "البحرين",
    india: "الهند", bangladesh: "بنغلاديش", uk: "بريطانيا", germany: "ألمانيا",
    turkey: "تركيا", oman: "عُمان", kuwait: "الكويت", srilanka: "سريلانكا",
    france: "فرنسا", netherlands: "هولندا", usa: "أمريكا", canada: "كندا",
    gcc: "الخليج والشرق الأوسط", southAsia: "جنوب آسيا", europe: "أوروبا", americas: "الأمريكتان",
  },
  ur: {
    home: "ہوم", marketplace: "مارکیٹ", intelligence: "انٹیلیجنس",
    about: "ہمارے بارے میں", dashboard: "پارٹنر ڈیش بورڈ", governance: "گورننس",
    pilots: "پائلٹ پروگرام", partners: "پارٹنرز", foundingPartners: "بانی پارٹنرز",
    howItWorks: "کیسے کام کرتا ہے", contact: "رابطہ کریں", joinEcosystem: "پارٹنر بنیں",
    aiHub: "اے آئی ہب", adminPanel: "ایڈمن پینل", signOut: "سائن آؤٹ",
    regionalHubs: "علاقائی مراکز", uae: "یو اے ای", ksa: "سعودی عرب", pakistan: "پاکستان",
    ecosystem: "ایکو سسٹم", egypt: "مصر", qatar: "قطر", bahrain: "بحرین",
    india: "بھارت", bangladesh: "بنگلہ دیش", uk: "برطانیہ", germany: "جرمنی",
    turkey: "ترکی", oman: "عمان", kuwait: "کویت", srilanka: "سری لنکا",
    france: "فرانس", netherlands: "نیدرلینڈز", usa: "امریکہ", canada: "کینیڈا",
    gcc: "خلیج اور مشرق وسطیٰ", southAsia: "جنوبی ایشیا", europe: "یورپ", americas: "امریکاز",
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

const languageLabels: Record<Language, string> = { en: "English", ar: "العربية", ur: "اردو" };

const regionalHubGroups = [
  {
    labelKey: "gcc",
    hubs: [
      { path: "/country/uae", labelKey: "uae", flag: "🇦🇪" },
      { path: "/country/ksa", labelKey: "ksa", flag: "🇸🇦" },
      { path: "/country/qatar", labelKey: "qatar", flag: "🇶🇦" },
      { path: "/country/bahrain", labelKey: "bahrain", flag: "🇧🇭" },
      { path: "/country/egypt", labelKey: "egypt", flag: "🇪🇬" },
      { path: "/country/oman", labelKey: "oman", flag: "🇴🇲" },
      { path: "/country/kuwait", labelKey: "kuwait", flag: "🇰🇼" },
      { path: "/country/turkey", labelKey: "turkey", flag: "🇹🇷" },
    ],
  },
  {
    labelKey: "southAsia",
    hubs: [
      { path: "/country/pakistan", labelKey: "pakistan", flag: "🇵🇰" },
      { path: "/country/india", labelKey: "india", flag: "🇮🇳" },
      { path: "/country/bangladesh", labelKey: "bangladesh", flag: "🇧🇩" },
      { path: "/country/srilanka", labelKey: "srilanka", flag: "🇱🇰" },
    ],
  },
  {
    labelKey: "europe",
    hubs: [
      { path: "/country/uk", labelKey: "uk", flag: "🇬🇧" },
      { path: "/country/germany", labelKey: "germany", flag: "🇩🇪" },
      { path: "/country/france", labelKey: "france", flag: "🇫🇷" },
      { path: "/country/netherlands", labelKey: "netherlands", flag: "🇳🇱" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { user, isAdmin, signOut } = useAuth();

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/marketplace", label: t("marketplace") },
    { path: "/how-it-works", label: t("howItWorks") },
    { path: "/about", label: t("about") },
    { path: "/contact", label: t("contact") },
  ];

  const ecosystemLinks = [
    { path: "/governance", label: t("governance") },
    { path: "/pilots", label: t("pilots") },
    { path: "/intelligence", label: t("intelligence") },
  ];

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (active: boolean) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? "bg-primary/10 text-primary"
        : "text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]"
    }`;

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
              <span className="font-display font-bold text-lg text-[hsl(220_15%_95%)]">AIgilityX</span>
              <Badge variant="outline" className="ml-2 text-[10px] border-primary/30 text-primary">{t("aiHub")}</Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(isActive(link.path))}>
                {link.label}
              </Link>
            ))}

            {/* Ecosystem Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 ${linkClass(ecosystemLinks.some(l => isActive(l.path)))}`}>
                  <Layers size={14} />
                  {t("ecosystem")}
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)] w-48">
                {ecosystemLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="flex items-center gap-2 cursor-pointer text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)]">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 ${linkClass(isActive("/partners") || isActive("/partner-dashboard") || isActive("/admin"))}`}>
                  {t("partners")}
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)] w-52">
                <DropdownMenuItem asChild>
                  <Link to="/partners" className="flex items-center gap-2 cursor-pointer text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)]">
                    <Users size={16} />{t("foundingPartners")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[hsl(220_18%_20%)]" />
                <DropdownMenuItem asChild>
                  <Link to="/partner-dashboard" className="flex items-center gap-2 cursor-pointer text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)]">
                    <BarChart3 size={16} />{t("dashboard")}
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <>
                    <DropdownMenuSeparator className="bg-[hsl(220_18%_20%)]" />
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center gap-2 cursor-pointer text-primary">
                        <Shield size={16} />{t("adminPanel")}
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Regional Hubs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]">
                  <MapPin size={18} className="mr-1" />
                  <span className="hidden sm:inline">{t("regionalHubs")}</span>
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)] w-52 max-h-80 overflow-y-auto">
                {regionalHubGroups.map((group, idx) => (
                  <div key={group.labelKey}>
                    {idx > 0 && <DropdownMenuSeparator className="bg-[hsl(220_18%_20%)]" />}
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t(group.labelKey)}</div>
                    {group.hubs.map((hub) => (
                      <DropdownMenuItem key={hub.path} asChild>
                        <Link to={hub.path} className="flex items-center gap-2 cursor-pointer text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)]">
                          <span>{hub.flag}</span>
                          {t(hub.labelKey)}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]">
                  <Globe size={18} className="mr-1" />
                  <span className="hidden sm:inline">{languageLabels[language]}</span>
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)]">
                {(Object.keys(languageLabels) as Language[]).map((lang) => (
                  <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}
                    className={`cursor-pointer ${language === lang ? "text-primary" : "text-[hsl(220_12%_70%)]"} hover:text-[hsl(220_15%_95%)]`}>
                    {languageLabels[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth / CTA */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <Button variant="ghost" size="sm" onClick={signOut} className="text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)]">
                  <LogOut size={16} className="mr-1" />{t("signOut")}
                </Button>
              ) : null}
              <Link to="/onboarding">
                <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-glow">{t("joinEcosystem")}</Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden text-[hsl(220_12%_70%)]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[hsl(220_18%_20%)] animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path) ? "bg-primary/10 text-primary" : "text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]"
                  }`}>
                  {link.label}
                </Link>
              ))}
              <Link to="/partners" onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive("/partners") ? "bg-primary/10 text-primary" : "text-[hsl(220_12%_70%)]"}`}>
                {t("foundingPartners")}
              </Link>
              <Link to="/partner-dashboard" onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-[hsl(220_12%_70%)] flex items-center gap-2">
                <BarChart3 size={16} />{t("dashboard")}
              </Link>
              {/* Ecosystem - Mobile */}
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("ecosystem")}</div>
              {ecosystemLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path) ? "bg-primary/10 text-primary" : "text-[hsl(220_12%_70%)] hover:text-[hsl(220_15%_95%)] hover:bg-[hsl(220_20%_15%)]"
                  }`}>
                  {link.label}
                </Link>
              ))}
              {/* Regional Hubs - Mobile */}
              {regionalHubGroups.map((group) => (
                <div key={group.labelKey}>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t(group.labelKey)}</div>
                  {group.hubs.map((hub) => (
                    <Link key={hub.path} to={hub.path} onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-lg text-sm font-medium text-[hsl(220_12%_70%)] flex items-center gap-2">
                      <span>{hub.flag}</span>{t(hub.labelKey)}
                    </Link>
                  ))}
                </div>
              ))}
              {isAdmin && (
                <Link to="/admin" onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-primary flex items-center gap-2">
                  <Shield size={16} />{t("adminPanel")}
                </Link>
              )}
              <div className="pt-4 border-t border-[hsl(220_18%_20%)] mt-2 space-y-2">
                {user && (
                  <Button variant="outline" className="w-full" onClick={() => { signOut(); setIsOpen(false); }}>
                    <LogOut size={16} className="mr-2" />{t("signOut")}
                  </Button>
                )}
                <Link to="/onboarding" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">{t("joinEcosystem")}</Button>
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
