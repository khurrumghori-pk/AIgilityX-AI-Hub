import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Users, Zap, Globe } from "lucide-react";

const Intelligence = () => {
  const marketMetrics = [
    {
      title: "AI Market Growth",
      value: "45.2%",
      change: "+12.3%",
      trend: "up",
      icon: TrendingUp,
      description: "Annual growth rate in Saudi Arabia"
    },
    {
      title: "Enterprise Adoption",
      value: "83%",
      change: "+8%",
      trend: "up",
      icon: Users,
      description: "Enterprises implementing or piloting AI"
    },
    {
      title: "Government Investment",
      value: "$15.8B",
      change: "+25%",
      trend: "up",
      icon: DollarSign,
      description: "Annual AI investment under Vision 2030"
    },
    {
      title: "AI Professionals",
      value: "16,500+",
      change: "+15%",
      trend: "up",
      icon: Users,
      description: "Active AI professionals in the region"
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
      title: "Edge AI Deployment",
      description: "5G-enabled edge computing driving 3x increase in low-latency AI applications for IoT and real-time analytics.",
      impact: "High",
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
      title: "Industry-Specific Solutions",
      description: "Vertical AI solutions gaining traction in healthcare, finance, education, and smart city initiatives.",
      impact: "Medium",
      growth: "+118%"
    }
  ];

  const sectors = [
    { name: "Government & Public Sector", adoption: 92, investment: "$4.2B" },
    { name: "Telecommunications", adoption: 88, investment: "$2.8B" },
    { name: "Financial Services", adoption: 85, investment: "$3.1B" },
    { name: "Healthcare", adoption: 76, investment: "$1.9B" },
    { name: "Education", adoption: 71, investment: "$1.4B" },
    { name: "Manufacturing", adoption: 68, investment: "$1.6B" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Real-time Market Data
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold">Market Intelligence</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive insights into AI adoption trends, investment patterns, and emerging technologies
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.trend === "up";
            return (
              <Card key={index} className="p-6 hover:shadow-lg-custom transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <Badge className={isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                    {metric.change}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Emerging Trends */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Emerging AI Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {trends.map((trend, index) => (
              <Card key={index} className="p-6 hover:shadow-lg-custom transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold flex-grow">{trend.title}</h3>
                  <Badge className="bg-accent/10 text-accent border-accent/20 ml-2">
                    {trend.impact}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{trend.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">YoY Growth</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-primary" size={16} />
                    <span className="font-semibold text-primary">{trend.growth}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sector Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">AI Adoption by Sector</h2>
          <Card className="p-6">
            <div className="space-y-6">
              {sectors.map((sector, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{sector.name}</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{sector.investment}</Badge>
                      <span className="text-sm font-semibold text-primary">{sector.adoption}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${sector.adoption}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Regional Insights */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Regional Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Globe className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Saudi Arabia</h3>
              <p className="text-muted-foreground mb-4">
                Leading the region with Vision 2030 initiatives and world-class AI infrastructure investments.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Readiness</span>
                  <span className="font-medium">9.2/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Startups</span>
                  <span className="font-medium">2,400+</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Globe className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">GCC Region</h3>
              <p className="text-muted-foreground mb-4">
                Rapid AI adoption across UAE, Qatar, and Kuwait with focus on smart city initiatives.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Readiness</span>
                  <span className="font-medium">8.7/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Investment</span>
                  <span className="font-medium">$8.2B</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Globe className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Pakistan</h3>
              <p className="text-muted-foreground mb-4">
                Emerging AI talent hub with growing tech ecosystem and government digital transformation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AI Readiness</span>
                  <span className="font-medium">7.1/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Professionals</span>
                  <span className="font-medium">12,000+</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
