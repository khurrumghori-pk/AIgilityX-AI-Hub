import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Globe, Zap, Building2 } from "lucide-react";

const Intelligence = () => {
  const marketMetrics = [
    {
      title: "AI Market Growth",
      value: "45.2%",
      change: "+12.3%",
      trend: "up",
      icon: TrendingUp,
      description: "Annual growth rate in GCC region"
    },
    {
      title: "Enterprise Adoption",
      value: "83%",
      change: "+8%",
      trend: "up",
      icon: Building2,
      description: "Enterprises implementing AI"
    },
    {
      title: "Government Investment",
      value: "$15.8B",
      change: "+25%",
      trend: "up",
      icon: DollarSign,
      description: "Annual AI investment"
    },
    {
      title: "AI Professionals",
      value: "16,500+",
      change: "+15%",
      trend: "up",
      icon: Users,
      description: "Active in the ecosystem"
    }
  ];

  const trends = [
    {
      title: "Generative AI Dominance",
      description: "GenAI solutions now represent 67% of new AI deployments, with focus on content creation, code generation, and customer service automation.",
      impact: "High",
      growth: "+156%"
    },
    {
      title: "Arabic Language AI Surge",
      description: "Arabic NLP solutions growing rapidly, addressing unique linguistic challenges and cultural context for regional markets.",
      impact: "Critical",
      growth: "+203%"
    },
    {
      title: "Sovereign AI Infrastructure",
      description: "Growing demand for local AI infrastructure with data residency compliance and sovereign cloud deployments.",
      impact: "Critical",
      growth: "+187%"
    },
    {
      title: "AI Ethics & Governance",
      description: "Regulatory frameworks and ethical AI principles becoming mandatory for enterprise and government deployments.",
      impact: "Critical",
      growth: "+94%"
    },
    {
      title: "Telco AI Integration",
      description: "Telecommunications providers emerging as key AI infrastructure partners, enabling network-native AI services.",
      impact: "High",
      growth: "+142%"
    },
    {
      title: "Research Commercialization",
      description: "Accelerated pipeline from research labs to market-ready AI solutions through AI Factory validation.",
      impact: "High",
      growth: "+118%"
    }
  ];

  const regions = [
    { 
      name: "Saudi Arabia", 
      adoption: 92, 
      investment: "$4.2B",
      readiness: "9.2/10",
      highlights: "Vision 2030, NEOM AI Hub"
    },
    { 
      name: "UAE", 
      adoption: 89, 
      investment: "$3.1B",
      readiness: "9.0/10",
      highlights: "AI Minister, Smart Dubai"
    },
    { 
      name: "Qatar", 
      adoption: 85, 
      investment: "$2.8B",
      readiness: "8.7/10",
      highlights: "National AI Strategy"
    },
    { 
      name: "Pakistan", 
      adoption: 68, 
      investment: "$1.2B",
      readiness: "7.1/10",
      highlights: "AI Talent Hub"
    },
    { 
      name: "India", 
      adoption: 78, 
      investment: "$2.5B",
      readiness: "8.2/10",
      highlights: "Digital India AI"
    },
    { 
      name: "Europe", 
      adoption: 82, 
      investment: "$5.8B",
      readiness: "8.5/10",
      highlights: "EU AI Act Compliance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header - Dark Section */}
      <section className="section-dark pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl space-y-4">
            <Badge className="badge-glow">Market Intelligence</Badge>
            <h1 className="text-4xl sm:text-5xl font-display font-bold">
              AI Ecosystem <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl">
              Real-time analytics on AI adoption, investment patterns, and emerging technologies 
              across GCC, South Asia, Europe, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics - Light Section */}
      <section className="section-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="p-6 hover-lift shadow-soft">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-3xl font-display font-bold gradient-text">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emerging Trends - Dark Section */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="badge-glow mb-4">Trends</Badge>
            <h2 className="text-4xl font-display font-bold mb-4">Emerging AI Trends</h2>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-2xl mx-auto">
              Key developments shaping the sovereign AI landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((trend, index) => (
              <Card key={index} className="card-themed p-6 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[hsl(220_15%_95%)] flex-grow pr-2">
                    {trend.title}
                  </h3>
                  <Badge className={
                    trend.impact === "Critical" 
                      ? "bg-accent/10 text-accent border-accent/30" 
                      : "bg-primary/10 text-primary border-primary/30"
                  }>
                    {trend.impact}
                  </Badge>
                </div>
                <p className="text-[hsl(220_12%_60%)] text-sm mb-4 leading-relaxed">
                  {trend.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[hsl(220_18%_20%)]">
                  <span className="text-sm text-[hsl(220_12%_60%)]">YoY Growth</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-primary" size={16} />
                    <span className="font-semibold gradient-text">{trend.growth}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Analysis - Light Section */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">Regional Analysis</Badge>
            <h2 className="text-4xl font-display font-bold mb-4">AI Adoption by Region</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comparative analysis across key markets
            </p>
          </div>

          <Card className="p-6 shadow-soft">
            <div className="space-y-6">
              {regions.map((region, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="text-primary" size={20} />
                      <span className="font-semibold">{region.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-xs">{region.investment}</Badge>
                      <Badge variant="outline" className="text-xs bg-primary/5">{region.readiness}</Badge>
                      <span className="text-sm font-semibold gradient-text w-12 text-right">{region.adoption}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${region.adoption}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{region.highlights}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Key Stats Summary - Dark */}
      <section className="section-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-themed p-8 text-center hover-lift">
              <Zap className="text-primary mx-auto mb-4" size={40} />
              <div className="text-4xl font-display font-bold gradient-text mb-2">$500B+</div>
              <p className="text-sm text-[hsl(220_12%_60%)]">Global AI market by 2028</p>
            </Card>
            <Card className="card-themed p-8 text-center hover-lift">
              <TrendingUp className="text-primary mx-auto mb-4" size={40} />
              <div className="text-4xl font-display font-bold gradient-text mb-2">45%</div>
              <p className="text-sm text-[hsl(220_12%_60%)]">Annual regional growth</p>
            </Card>
            <Card className="card-themed p-8 text-center hover-lift">
              <Globe className="text-primary mx-auto mb-4" size={40} />
              <div className="text-4xl font-display font-bold gradient-text mb-2">5G+AI</div>
              <p className="text-sm text-[hsl(220_12%_60%)]">Network-native advantage</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intelligence;
