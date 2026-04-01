import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-[hsl(220_18%_20%)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl text-[hsl(220_15%_95%)]">AIgilityX</span>
            </div>
            <p className="text-sm text-[hsl(220_12%_60%)] max-w-sm leading-relaxed">
              The world's first Sovereign AI Partner Ecosystem — a neutral, governed platform 
              connecting telcos, governments, enterprises, and vendors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[hsl(220_12%_60%)] hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[hsl(220_12%_60%)] hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[hsl(220_12%_60%)] hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-[hsl(220_15%_95%)] mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/marketplace" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">AI Marketplace</Link></li>
              <li><Link to="/intelligence" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Market Intelligence</Link></li>
              <li><Link to="/governance" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Governance & Security</Link></li>
              <li><Link to="/pilots" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Use Cases & Pilots</Link></li>
              <li><Link to="/onboarding" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Partner Onboarding</Link></li>
              <li><Link to="/partners" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Founding Partners</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Country Hubs */}
          <div>
            <h3 className="font-semibold text-[hsl(220_15%_95%)] mb-4">Country Hubs</h3>
            <ul className="space-y-3">
              <li><Link to="/country/uae" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors flex items-center gap-2"><Globe size={14} /> UAE Hub</Link></li>
              <li><Link to="/country/ksa" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors flex items-center gap-2"><Globe size={14} /> KSA Hub</Link></li>
              <li><Link to="/country/pakistan" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors flex items-center gap-2"><Globe size={14} /> Pakistan Hub</Link></li>
            </ul>
            <h3 className="font-semibold text-[hsl(220_15%_95%)] mt-6 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Careers</a></li>
              <li><Link to="/contact" className="text-sm text-[hsl(220_12%_60%)] hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold text-[hsl(220_15%_95%)] mb-4">Partners</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-[hsl(220_12%_60%)]">Core42 (G42)</span></li>
              <li><span className="text-sm text-[hsl(220_12%_60%)]">STC</span></li>
              <li><span className="text-sm text-[hsl(220_12%_60%)]">Jazz</span></li>
              <li><span className="text-sm text-[hsl(220_12%_60%)]">DFF</span></li>
              <li><span className="text-sm text-[hsl(220_12%_60%)]">HUMAIN</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[hsl(220_18%_20%)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(220_12%_50%)]">
            © {new Date().getFullYear()} AIgilityX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[hsl(220_12%_50%)] hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-[hsl(220_12%_50%)] hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-[hsl(220_12%_50%)] hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
