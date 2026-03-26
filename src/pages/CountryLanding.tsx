import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe, ArrowRight, Cloud, Cpu, Bot, Lock, CheckCircle2,
  Building2, Server, Landmark, Shield, Users, Zap
} from "lucide-react";

interface CountryConfig {
  name: string;
  heroTitle: string;
  heroSubtext: string;
  heroCta: string;
  accentColor: string;
  accentGradient: string;
  partners: { name: string; type: string }[];
  highlights: string[];
  localFocus: { title: string; description: string }[];
}

const countryData: Record<string, CountryConfig> = {
  uae: {
    name: "UAE",
    heroTitle: "UAE Sovereign Intelligence Hub",
    heroSubtext: "Powering the UAE's AI vision with G42 Cloud, Core42, and Dubai Future Foundation — sovereign compute, curated intelligence, and embedded governance.",
    heroCta: "Join as UAE Founding Partner",
    accentColor: "#00D2AA",
    accentGradient: "linear-gradient(135deg, #00D2AA, #00B89C)",
    partners: [
      { name: "G42 / Core42", type: "Cloud & Compute" },
      { name: "Dubai Future Foundation", type: "Government" },
      { name: "e&", type: "Telecom" },
    ],
    highlights: [
      "UAE National AI Strategy 2031",
      "Minister of State for AI",
      "Smart Dubai Initiative",
      "DIFC Innovation Hub",
    ],
    localFocus: [
      { title: "Enabling UAE Government AI", description: "Sovereign AI deployment aligned with UAE's national vision and data residency requirements." },
      { title: "G42 Cloud Lab", description: "Access GPU-as-a-Service through Core42's sovereign cloud infrastructure in the UAE." },
    ],
  },
  ksa: {
    name: "KSA",
    heroTitle: "KSA Vision 2030: Sovereign AI Hub",
    heroSubtext: "Join STC and HUMAIN in transforming Saudi Arabia into a global AI powerhouse — aligned with Vision 2030 and SDAIA's National AI Strategy.",
    heroCta: "Join Saudi AI Initiative",
    accentColor: "#5B2D90",
    accentGradient: "linear-gradient(135deg, #5B2D90, #7B4DB8)",
    partners: [
      { name: "STC", type: "Cloud & Telecom" },
      { name: "HUMAIN", type: "AI Initiative" },
      { name: "SDAIA", type: "Government" },
    ],
    highlights: [
      "Vision 2030 AI Strategy",
      "SDAIA Data & AI Authority",
      "HUMAIN AI Labs",
      "Riyadh AI Hub",
    ],
    localFocus: [
      { title: "Saudi AI Governance", description: "Compliance with SDAIA regulations and Vision 2030 AI mandates." },
      { title: "HUMAIN Labs", description: "Collaborative AI research and development through HUMAIN's innovation centers." },
    ],
  },
  pakistan: {
    name: "Pakistan",
    heroTitle: "Pakistan's Sovereign AI Initiative",
    heroSubtext: "Accelerating Digital Pakistan with Jazz Cloud infrastructure and local AI talent — building sovereign AI capacity for South Asia's largest emerging market.",
    heroCta: "Join Pakistan AI Hub",
    accentColor: "#FF7900",
    accentGradient: "linear-gradient(135deg, #FF7900, #FFA040)",
    partners: [
      { name: "Jazz", type: "Cloud & Telecom" },
      { name: "AIgilityX", type: "Platform" },
      { name: "MOITT", type: "Government" },
    ],
    highlights: [
      "Digital Pakistan Vision",
      "National AI Policy",
      "Jazz 5G AI Campus",
      "Emerging AI Talent Hub",
    ],
    localFocus: [
      { title: "Pakistan Telecom AI", description: "AI-powered services deployed on Jazz's network infrastructure across Pakistan." },
      { title: "Jazz 5G Campus", description: "Next-generation 5G-enabled AI workloads for enterprise and government use cases." },
    ],
  },
};

const howItWorksLayers = [
  { icon: Cloud, title: "Compute Exchange", description: "Sovereign data centers integrated via unified API." },
  { icon: Cpu, title: "AI Marketplace", description: "Curated solutions from vetted global providers." },
  { icon: Bot, title: "Agents & Advisors", description: "AI-powered advisory for deployment & governance." },
  { icon: Lock, title: "Governance", description: "Policy-as-code ensuring compliance at every layer." },
];

const CountryLanding = () => {
  const { country } = useParams<{ country: string }>();
  const config = countryData[country || ""] || countryData.uae;

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="section-dark relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl" style={{ background: `${config.accentColor}20` }} />

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {config.partners.map((p, i) => (
                <Badge key={i} className="px-3 py-1 text-sm" style={{ background: `${config.accentColor}15`, color: config.accentColor, borderColor: `${config.accentColor}40` }}>
                  {p.name}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-[hsl(220_15%_95%)]">
              {config.heroTitle}
            </h1>

            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto leading-relaxed">
              {config.heroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/onboarding">
                <Button size="lg" className="text-lg px-8 h-14 text-white shadow-lg" style={{ background: config.accentGradient }}>
                  {config.heroCta}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-[hsl(220_18%_25%)] text-[hsl(220_15%_85%)] hover:bg-[hsl(220_20%_15%)]">
                  Explore Use Cases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights - Light */}
      <section className="section-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                <CheckCircle2 size={20} style={{ color: config.accentColor }} />
                <span className="font-medium text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Layers - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="badge-glow">How It Works</Badge>
            <h2 className="text-4xl font-display font-bold">
              Four <span className="gradient-text">Layers</span> of Intelligence
            </h2>
            <p className="text-[hsl(220_12%_65%)]">
              Powered by {config.partners[0].name} — local infrastructure, global standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <Card key={i} className="card-themed p-6 text-center hover-lift group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg transition-all" style={{ background: config.accentGradient }}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-[hsl(220_15%_95%)] mb-2">{layer.title}</h3>
                  <p className="text-sm text-[hsl(220_12%_60%)]">{layer.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners & Local Focus - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Partners */}
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Partners</Badge>
              <h2 className="text-3xl font-display font-bold mb-8">In Partnership With</h2>
              <div className="space-y-4">
                {config.partners.map((p, i) => (
                  <Card key={i} className="p-5 flex items-center justify-between shadow-soft">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: config.accentGradient }}>
                        {p.type.includes("Cloud") || p.type.includes("Telecom") ? (
                          <Server className="text-white" size={24} />
                        ) : p.type.includes("Government") ? (
                          <Landmark className="text-white" size={24} />
                        ) : (
                          <Zap className="text-white" size={24} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-sm text-muted-foreground">{p.type}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{config.name}</Badge>
                  </Card>
                ))}
              </div>
            </div>

            {/* Local Focus */}
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Local Focus</Badge>
              <h2 className="text-3xl font-display font-bold mb-8">{config.name} Initiatives</h2>
              <div className="space-y-4">
                {config.localFocus.map((focus, i) => (
                  <Card key={i} className="p-6 shadow-soft hover-lift">
                    <h3 className="text-lg font-semibold mb-2">{focus.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{focus.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden p-12 md:p-16" style={{ background: config.accentGradient }}>
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-display font-bold text-white">
                Become a {config.name} Founding Partner
              </h2>
              <p className="text-lg text-white/90">
                Join {config.partners.map(p => p.name).join(", ")} in building the sovereign AI ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/onboarding">
                  <Button size="lg" variant="secondary" className="shadow-lg h-14 px-8">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/pilots">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 h-14 px-8">
                    Submit Pilot Request
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CountryLanding;
