import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Cloud, Cpu, Bot, Lock, CheckCircle2,
  Server, Landmark, Zap
} from "lucide-react";
import { countryData } from "@/data/countryConfigs";
import CountryMarketplace from "@/components/country/CountryMarketplace";

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
      {/* Hero */}
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
                <Button size="lg" className="text-lg px-8 h-14 text-[hsl(0_0%_100%)] shadow-lg" style={{ background: config.accentGradient }}>
                  {config.heroCta}<ArrowRight className="ml-2" size={20} />
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

      {/* Highlights */}
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

      {/* How It Works */}
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
                    <Icon className="text-[hsl(0_0%_100%)]" size={28} />
                  </div>
                  <h3 className="font-semibold text-[hsl(220_15%_95%)] mb-2">{layer.title}</h3>
                  <p className="text-sm text-[hsl(220_12%_60%)]">{layer.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Country Marketplace */}
      <CountryMarketplace
        countryName={config.name}
        dbCountryName={config.dbCountryName}
        accentColor={config.accentColor}
        accentGradient={config.accentGradient}
      />

      {/* Partners & Local Focus */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-6">Partners</Badge>
              <h2 className="text-3xl font-display font-bold mb-8">In Partnership With</h2>
              <div className="space-y-4">
                {config.partners.map((p, i) => (
                  <Card key={i} className="p-5 flex items-center justify-between shadow-soft">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: config.accentGradient }}>
                        {p.type.includes("Cloud") || p.type.includes("Telecom") ? (
                          <Server className="text-[hsl(0_0%_100%)]" size={24} />
                        ) : p.type.includes("Government") ? (
                          <Landmark className="text-[hsl(0_0%_100%)]" size={24} />
                        ) : (
                          <Zap className="text-[hsl(0_0%_100%)]" size={24} />
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

      {/* CTA */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden p-12 md:p-16" style={{ background: config.accentGradient }}>
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-display font-bold text-[hsl(0_0%_100%)]">
                Become a {config.name} Founding Partner
              </h2>
              <p className="text-lg text-[hsl(0_0%_100%)]/90">
                Join {config.partners.map(p => p.name).join(", ")} in building the sovereign AI ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/onboarding">
                  <Button size="lg" variant="secondary" className="shadow-lg h-14 px-8">Apply Now</Button>
                </Link>
                <Link to="/pilots">
                  <Button size="lg" variant="outline" className="bg-transparent text-[hsl(0_0%_100%)] border-[hsl(0_0%_100%)]/30 hover:bg-[hsl(0_0%_100%)]/10 h-14 px-8">
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
