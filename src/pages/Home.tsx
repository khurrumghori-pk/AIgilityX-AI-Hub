import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  TrendingUp
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
              Sovereign AI Partner Ecosystem
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
              AIgilityX Global
              <span className="block gradient-text mt-2">AI Hub™</span>
            </h1>
            
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto leading-relaxed">
              The world's first sovereign AI partner ecosystem unifying solution providers, experts, 
              regulators, research labs, certified partners, and telcos in one marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 h-14">
                  Explore Marketplace
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-[hsl(220_18%_25%)] text-[hsl(220_15%_85%)] hover:bg-[hsl(220_20%_15%)]">
                  Join the Ecosystem
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="section-light py-16 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
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

      {/* Features Section - Light */}
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

      {/* CTA Section - Light with Gradient Card */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary p-12 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">
                Ready to Join the AI Revolution?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Connect with the sovereign AI ecosystem and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/marketplace">
                  <Button size="lg" variant="secondary" className="shadow-lg h-14 px-8">
                    Browse Marketplace
                  </Button>
                </Link>
                <Link to="/onboarding">
                  <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 h-14 px-8">
                    Become a Partner
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
