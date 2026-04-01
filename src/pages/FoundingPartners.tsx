import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Globe,
  Server,
  Shield,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Users,
  Star,
  Zap,
  Crown,
} from "lucide-react";

const partners = [
  {
    name: "Core42 (G42)",
    type: "Sovereign Cloud & AI Infrastructure",
    region: "UAE",
    description:
      "A G42 company providing sovereign cloud, AI infrastructure, and cybersecurity services powering national AI strategies across the Middle East.",
    capabilities: ["Sovereign Cloud", "GPU-as-a-Service", "AI Infrastructure", "Cybersecurity"],
    tier: "Platinum",
  },
  {
    name: "stc",
    type: "Telecommunications & Digital Infra",
    region: "Saudi Arabia",
    description:
      "Saudi Arabia's leading digital enabler powering Vision 2030 with 5G, edge computing, and AI-powered network services across the Kingdom.",
    capabilities: ["5G Networks", "Edge AI", "Cloud Platform", "Digital Transformation"],
    tier: "Platinum",
  },
  {
    name: "Jazz (VEON)",
    type: "Digital Operator & AI Services",
    region: "Pakistan",
    description:
      "Pakistan's leading digital operator delivering AI-powered connectivity and digital financial services to 75M+ subscribers.",
    capabilities: ["Mobile AI", "Digital Finance", "IoT", "Data Analytics"],
    tier: "Gold",
  },
  {
    name: "Dubai Future Foundation (DFF)",
    type: "Government Innovation & AI Strategy",
    region: "UAE",
    description:
      "Driving Dubai's AI and future-readiness agenda through policy, research, and accelerator programs for AI adoption.",
    capabilities: ["AI Policy", "Innovation Labs", "Future Foresight", "Accelerators"],
    tier: "Platinum",
  },
  {
    name: "HUMAIN",
    type: "National AI Company",
    region: "Saudi Arabia",
    description:
      "Saudi Arabia's national AI powerhouse building sovereign AI infrastructure, Arabic LLMs, and enterprise AI solutions.",
    capabilities: ["Arabic LLMs", "Sovereign AI", "Enterprise AI", "Data Centers"],
    tier: "Platinum",
  },
  {
    name: "NVIDIA",
    type: "AI Compute & GPU Technology",
    region: "Global",
    description:
      "World leader in GPU computing and AI platforms enabling accelerated AI training and inference across the ecosystem.",
    capabilities: ["GPU Computing", "AI Frameworks", "DGX Systems", "Omniverse"],
    tier: "Technology",
  },
];

const benefits = [
  {
    icon: Crown,
    title: "Priority Marketplace Placement",
    description: "Featured listings and premium visibility across all regional hubs and marketplace categories.",
  },
  {
    icon: Globe,
    title: "Multi-Region Access",
    description: "Launch across GCC, South Asia, Europe, and North America through unified partner infrastructure.",
  },
  {
    icon: Shield,
    title: "Co-Branded Governance",
    description: "Joint compliance frameworks, shared certifications, and co-branded trust badges.",
  },
  {
    icon: Users,
    title: "Exclusive Deal Flow",
    description: "First access to enterprise RFPs, government tenders, and pilot program opportunities.",
  },
  {
    icon: Zap,
    title: "AI Factory Access",
    description: "Priority pipeline through the 5-phase AI Factory for solution validation and deployment.",
  },
  {
    icon: Star,
    title: "Revenue Sharing",
    description: "Preferential revenue-sharing models and joint GTM strategies for co-developed solutions.",
  },
];

const applicationSteps = [
  { step: "01", title: "Expression of Interest", desc: "Submit your partner inquiry with organization details and strategic alignment." },
  { step: "02", title: "Strategic Review", desc: "Our partnership team evaluates fit, capabilities, and regional coverage." },
  { step: "03", title: "Partnership Agreement", desc: "Negotiate terms, tier selection, and co-development roadmap." },
  { step: "04", title: "Onboarding & Launch", desc: "Technical integration, marketplace listing, and joint go-to-market." },
];

const tierColors: Record<string, string> = {
  Platinum: "bg-[hsl(270_60%_55%)]/10 text-[hsl(270_60%_55%)] border-[hsl(270_60%_55%)]/30",
  Gold: "bg-accent/10 text-accent border-accent/30",
  Technology: "bg-primary/10 text-primary border-primary/30",
};

const FoundingPartners = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="section-dark pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
            <Badge className="badge-glow text-sm px-4 py-2">
              <Crown className="w-4 h-4 mr-2" /> Founding Partners
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-tight">
              The <span className="gradient-text">Founding Circle</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto leading-relaxed">
              Industry leaders shaping the future of sovereign AI — telcos, cloud providers,
              government entities, and technology pioneers driving the ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Profiles - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Partner Profiles</Badge>
            <h2 className="text-4xl font-display font-bold">Our Ecosystem Leaders</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <Card key={i} className="p-6 hover-lift shadow-soft flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Building2 className="text-primary-foreground" size={28} />
                  </div>
                  <Badge className={tierColors[partner.tier]}>{partner.tier}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                  <Server size={14} /> {partner.type}
                </p>
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <Globe size={12} /> {partner.region}
                </p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{partner.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {partner.capabilities.map((cap, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {cap}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="badge-glow">Partner Benefits</Badge>
            <h2 className="text-4xl font-display font-bold">
              Why Become a <span className="gradient-text">Founding Partner</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Card key={i} className="card-themed p-6 hover-lift group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(220_15%_95%)]">{benefit.title}</h3>
                  <p className="text-[hsl(220_12%_60%)] leading-relaxed">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Application Process</Badge>
            <h2 className="text-4xl font-display font-bold">How to Join</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined path from interest to partnership launch
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {applicationSteps.map((phase, i) => (
              <Card key={i} className="p-6 text-center relative overflow-hidden group hover-lift shadow-soft">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-4xl font-display font-bold gradient-text mb-3">{phase.step}</div>
                <h3 className="font-semibold mb-1">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary p-12 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary-foreground">
                Ready to Shape the Future of AI?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Apply to become a Founding Partner and gain priority access to the sovereign AI ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="shadow-lg h-14 px-8">
                    Apply Now <ArrowRight className="ml-2" size={18} />
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

export default FoundingPartners;
