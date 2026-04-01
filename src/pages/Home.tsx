import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ScrollSection } from "@/hooks/useScrollAnimation";
import { 
  Network, 
  Zap, 
  Shield, 
  Globe,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  Scale,
  FlaskConical,
  Server,
  Sparkles,
  TrendingUp,
  Cloud,
  Bot,
  Lock,
  Layers,
  Radio,
  Landmark,
  Factory,
  Star
} from "lucide-react";

const Home = () => {
  const categories = [
    {
      icon: Cpu,
      title: "Solution Providers",
      description: "AI vendors, startups & companies offering AI products, tools, and platforms.",
      cta: "View Solutions"
    },
    {
      icon: Users,
      title: "Individual Experts",
      description: "Consultants, researchers, trainers & innovators offering AI expertise.",
      cta: "Find Experts"
    },
    {
      icon: Scale,
      title: "Regulators",
      description: "Government bodies publishing AI policies, standards & frameworks.",
      cta: "View Compliance"
    },
    {
      icon: FlaskConical,
      title: "Research Labs",
      description: "University research centers, R&D units & innovation labs.",
      cta: "Explore Research"
    },
    {
      icon: GraduationCap,
      title: "Certified Partners",
      description: "Certified trainers, consultants & system integrators.",
      cta: "View Partners"
    },
    {
      icon: Server,
      title: "Telcos & Cloud",
      description: "Sovereign cloud platforms, telecom operators & infra providers.",
      cta: "View Infrastructure"
    }
  ];

  const features = [
    {
      icon: Network,
      title: "Multi-Category Marketplace",
      description: "Six integrated marketplaces connecting all AI ecosystem stakeholders."
    },
    {
      icon: Zap,
      title: "AI Factory Integration",
      description: "Validation, experimentation, and deployment pipeline for AI solutions."
    },
    {
      icon: Shield,
      title: "Compliance & Governance",
      description: "Built-in regulatory frameworks and responsible AI governance."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-region scaling across GCC, South Asia, Europe & North America."
    }
  ];

  const stats = [
    { value: "500+", label: "AI Solutions" },
    { value: "200+", label: "Trusted Partners" },
    { value: "50+", label: "Countries" },
    { value: "6", label: "Categories" }
  ];

  const howItWorksLayers = [
    {
      icon: Cloud,
      title: "Compute Exchange",
      description: "Sovereign data centers from telco partners integrated via a unified API."
    },
    {
      icon: Cpu,
      title: "AI Marketplace",
      description: "Curated AI solutions, models, and tools from vetted global providers."
    },
    {
      icon: Bot,
      title: "Agents & Advisors",
      description: "AI-powered advisory agents for deployment, optimization, and governance."
    },
    {
      icon: Lock,
      title: "Governance",
      description: "Embedded policy-as-code ensuring compliance and responsible AI at every layer."
    }
  ];

  const telcoPartners = [
    { name: "Core42 (G42)", region: "UAE" },
    { name: "STC", region: "KSA" },
    { name: "Jazz", region: "Pakistan" },
    { name: "e&", region: "UAE" },
    { name: "Zain", region: "Kuwait" },
    { name: "Ooredoo", region: "Qatar" },
  ];

  const featuredSolutions = [
    {
      title: "AI-Powered Cyber Defense",
      description: "Automate threat detection with sovereign AI agents.",
      category: "Security",
      rating: 4.9
    },
    {
      title: "Arabic NLP Suite",
      description: "Advanced natural language processing for Arabic dialects.",
      category: "NLP",
      rating: 4.8
    },
    {
      title: "Smart Network Optimizer",
      description: "AI-driven network traffic management for 5G infrastructure.",
      category: "Telecom",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="section-dark relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
            <Badge className="badge-glow text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              The Infrastructure of the Intelligence Economy
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
              AIgilityX Sovereign
              <span className="block gradient-text mt-2">AI Hub™</span>
            </h1>
            
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto leading-relaxed">
              A neutral, governed platform for sovereign AI. Empower your organization 
              or nation to scale AI securely — connecting telcos, governments, enterprises, 
              and vendors in one ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/onboarding">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 h-14">
                  Become a Founding Partner
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-[hsl(220_18%_25%)] text-[hsl(220_15%_85%)] hover:bg-[hsl(220_20%_15%)]">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Co-brand logos strip */}
            <div className="pt-8">
              <p className="text-xs text-[hsl(220_12%_50%)] uppercase tracking-widest mb-4">Trusted by Leading Partners</p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {telcoPartners.map((partner, i) => (
                  <div key={i} className="px-4 py-2 bg-[hsl(220_22%_12%)] border border-[hsl(220_18%_20%)] rounded-lg">
                    <span className="text-sm text-[hsl(220_12%_65%)] font-medium">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="section-light py-16 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollSection key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center space-y-2">
                  <div className="text-5xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Section - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollSection animation="fade-left">
              <Card className="card-themed p-8 border-destructive/20 hover-lift">
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-5">
                  <Layers className="text-destructive" size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-[hsl(220_15%_95%)]">
                  Fragmented AI Ecosystem
                </h3>
                <p className="text-[hsl(220_12%_60%)] leading-relaxed">
                  Compute, models, and solutions are scattered across vendors. Organizations lack 
                  a unified approach to deploy and govern AI at national or enterprise scale.
                </p>
              </Card>
            </ScrollSection>
            <ScrollSection animation="fade-right">
              <Card className="card-themed p-8 border-primary/20 hover-lift">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Network className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-[hsl(220_15%_95%)]">
                  Sovereign AI Exchange
                </h3>
                <p className="text-[hsl(220_12%_60%)] leading-relaxed">
                  A governed, multi-partner hub connecting infrastructure, intelligence, and users 
                  at national scale — with built-in compliance, trust, and sovereignty.
                </p>
              </Card>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Layers - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <ScrollSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">How It Works</Badge>
              <h2 className="text-4xl sm:text-5xl font-display font-bold">
                Four <span className="gradient-text">Layers</span> of Intelligence
              </h2>
              <p className="text-lg text-muted-foreground">
                A multi-layered architecture connecting compute, solutions, agents, and governance.
              </p>
            </div>
          </ScrollSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <ScrollSection key={index} animation="fade-up" delay={index * 150}>
                  <Card className="p-8 text-center hover-lift shadow-soft group h-full">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all">
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                  </Card>
                </ScrollSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience Sections - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="badge-glow">Ecosystem</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">
              Built for <span className="gradient-text">Every Stakeholder</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Telcos */}
            <Card className="card-themed p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Radio className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(220_15%_95%)]">Telcos</h3>
              </div>
              <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                Become AI economy enablers. Offer GPU-as-a-Service, sovereign cloud, 
                and edge computing through the platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Core42", "STC", "Jazz", "e&"].map(name => (
                  <Badge key={name} variant="outline" className="text-xs border-[hsl(220_18%_25%)] text-[hsl(220_12%_65%)]">{name}</Badge>
                ))}
              </div>
              <Link to="/marketplace">
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  Provide Compute <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </Card>

            {/* Governments */}
            <Card className="card-themed p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <Landmark className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(220_15%_95%)]">Governments</h3>
              </div>
              <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                Deploy sovereign AI with compliance, data residency, and national AI strategy alignment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["DFF", "HUMAIN", "SDAIA"].map(name => (
                  <Badge key={name} variant="outline" className="text-xs border-[hsl(220_18%_25%)] text-[hsl(220_12%_65%)]">{name}</Badge>
                ))}
              </div>
              <Link to="/governance">
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </Card>

            {/* Enterprises */}
            <Card className="card-themed p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Building2 className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(220_15%_95%)]">Enterprises</h3>
              </div>
              <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                Pilot AI use cases, access validated solutions, and scale with confidence 
                through the AI Factory pipeline.
              </p>
              <ul className="text-sm text-[hsl(220_12%_60%)] space-y-2 mb-4">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Validated AI solutions</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Rapid pilot deployment</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Enterprise-grade security</li>
              </ul>
              <Link to="/pilots">
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  Pilot a Use Case <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </Card>

            {/* Vendors */}
            <Card className="card-themed p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Cpu className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(220_15%_95%)]">AI Vendors & Startups</h3>
              </div>
              <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                List your solutions on the sovereign AI marketplace and reach enterprise 
                and government buyers across regions.
              </p>
              <div className="flex gap-2">
                <Link to="/marketplace">
                  <Button variant="ghost" className="text-primary p-0 h-auto">
                    Browse Marketplace <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Research */}
            <Card className="card-themed p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <FlaskConical className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(220_15%_95%)]">Research & Innovation</h3>
              </div>
              <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                Commercialize research through the AI Factory pipeline. Connect labs 
                with enterprise deployment partners.
              </p>
              <Link to="/marketplace">
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  Explore Research <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </Card>

            {/* Regulators */}
            <Card className="card-themed p-6 hover-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <Scale className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(220_15%_95%)]">Regulators & Standards</h3>
              </div>
              <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                Publish AI policies, standards, and frameworks. Monitor compliance 
                across the ecosystem.
              </p>
              <Link to="/governance">
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  View Governance <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace Preview - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Featured Solutions</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">
              Featured AI <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Curated, validated solutions from the sovereign AI marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredSolutions.map((solution, index) => (
              <Card key={index} className="p-6 hover-lift shadow-soft">
                <Badge variant="secondary" className="mb-4">{solution.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="text-amber-500 fill-amber-500" size={16} />
                    <span className="text-sm font-medium">{solution.rating}</span>
                  </div>
                  <Link to="/marketplace">
                    <Button variant="ghost" size="sm" className="text-primary">
                      Learn More <ArrowRight className="ml-1" size={14} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/marketplace">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Browse Full Marketplace <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Governance & Compliance - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="badge-glow">Governance & Compliance</Badge>
              <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                Embedded <span className="gradient-text">Trust</span> at Every Layer
              </h2>
              <p className="text-lg text-[hsl(220_12%_65%)] leading-relaxed">
                Embedded policy-as-code ensures every AI workflow meets your nation's regulations 
                and standards. Real-time audit logs and explainability are built in.
              </p>
              <ul className="space-y-4">
                {[
                  "Multi-layer AI policy engine",
                  "ISO 42001-aligned framework",
                  "Agent-level audit trails",
                  "Data residency & sovereignty controls",
                  "Responsible AI compliance badges"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-[hsl(220_15%_90%)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/governance">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  Learn About Governance <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-3xl absolute inset-0 blur-3xl" />
              <Card className="card-themed relative p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-[hsl(220_25%_8%)] rounded-xl">
                    <Shield className="text-primary" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[hsl(220_15%_95%)]">Policy Engine</p>
                      <p className="text-xs text-[hsl(220_12%_60%)]">Real-time compliance checks</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/30">Active</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[hsl(220_25%_8%)] rounded-xl">
                    <Scale className="text-accent" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[hsl(220_15%_95%)]">ISO 42001</p>
                      <p className="text-xs text-[hsl(220_12%_60%)]">AI management system standard</p>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/30">Certified</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[hsl(220_25%_8%)] rounded-xl">
                    <Lock className="text-primary" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[hsl(220_15%_95%)]">Data Sovereignty</p>
                      <p className="text-xs text-[hsl(220_12%_60%)]">Local data residency controls</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/30">Enforced</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20">
                Platform Features
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                Built for the <span className="gradient-text">AI Economy</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A comprehensive platform designed for multi-role users, multi-language operation, 
                and multi-region scaling with rapid development workflows.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-3xl opacity-10 absolute inset-0 blur-3xl" />
              <Card className="relative p-8 bg-card shadow-lg-custom">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <Building2 className="text-primary" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">AI Factory Pipeline</p>
                      <p className="text-xs text-muted-foreground">5-phase validation workflow</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary">Active</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <Globe className="text-primary" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Regional Coverage</p>
                      <p className="text-xs text-muted-foreground">GCC, MENA, South Asia, Europe</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary">Global</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <Shield className="text-primary" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Compliance Center</p>
                      <p className="text-xs text-muted-foreground">Regulatory frameworks & badges</p>
                    </div>
                    <Badge className="bg-accent/10 text-accent">Certified</Badge>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                    <TrendingUp className="text-primary" size={24} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Analytics Dashboard</p>
                      <p className="text-xs text-muted-foreground">Performance & engagement</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary">Live</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Factory Section - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="badge-glow">AI Factory</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">
              From Idea to <span className="gradient-text">Deployment</span>
            </h2>
            <p className="text-xl text-[hsl(220_12%_65%)]">
              A comprehensive pipeline for validating, evaluating, and deploying AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Intake", desc: "Solution submission" },
              { step: "02", title: "Experimentation", desc: "Technical evaluation" },
              { step: "03", title: "Evaluation", desc: "Security & ethics review" },
              { step: "04", title: "Deployment", desc: "Telco integration" },
              { step: "05", title: "Monitoring", desc: "Performance tracking" }
            ].map((phase, index) => (
              <Card key={index} className="card-themed p-6 text-center relative overflow-hidden group hover-lift">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-4xl font-display font-bold gradient-text mb-3">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-[hsl(220_15%_95%)] mb-1">{phase.title}</h3>
                <p className="text-sm text-[hsl(220_12%_60%)]">{phase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Country Hubs - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Country Hubs</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">
              Sovereign AI <span className="gradient-text">Locally</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Localized hubs with co-branded partnerships in key markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/country/uae">
              <Card className="p-6 hover-lift shadow-soft group cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00D2AA, #00B89C)" }}>
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">UAE Hub</h3>
                    <p className="text-xs text-muted-foreground">G42 • Core42 • DFF</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">UAE's Sovereign AI Hub — powered by G42 Cloud and Dubai Future Foundation.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore UAE Hub <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            </Link>

            <Link to="/country/ksa">
              <Card className="p-6 hover-lift shadow-soft group cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5B2D90, #7B4DB8)" }}>
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KSA Hub</h3>
                    <p className="text-xs text-muted-foreground">STC • HUMAIN • SDAIA</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Vision 2030 — Sovereign AI powered by STC Cloud and HUMAIN.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore KSA Hub <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            </Link>

            <Link to="/country/pakistan">
              <Card className="p-6 hover-lift shadow-soft group cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF7900, #FFa040)" }}>
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Pakistan Hub</h3>
                    <p className="text-xs text-muted-foreground">Jazz • Digital Pakistan</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Pakistan's Sovereign AI Initiative — powered by Jazz Cloud and Digital Pakistan.</p>
                <Button variant="ghost" className="text-primary p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore Pakistan Hub <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Six Categories Section - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="badge-glow">6 Categories</Badge>
            <h2 className="text-4xl sm:text-5xl font-display font-bold">
              One Unified <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-xl text-[hsl(220_12%_65%)]">
              Six first-class user categories, each with unique flows, dashboards, and listings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="card-themed p-6 hover-lift group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(220_15%_95%)]">
                    {category.title}
                  </h3>
                  <p className="text-[hsl(220_12%_60%)] mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary-glow p-0 h-auto group-hover:translate-x-1 transition-transform">
                    {category.cta}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founding Partner CTA - Light with Gradient Card */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary p-12 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">
                Become a Founding Partner
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join the sovereign AI ecosystem as a founding partner. Shape the future 
                of the intelligence economy across regions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/onboarding">
                  <Button size="lg" variant="secondary" className="shadow-lg h-14 px-8">
                    Apply as Founding Partner
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 h-14 px-8">
                    Learn More
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

export default Home;
