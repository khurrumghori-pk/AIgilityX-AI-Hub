import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Zap, Globe, Shield, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Network,
      title: "Telco-First Innovation",
      description: "We believe telecommunications operators are uniquely positioned to become AI infrastructure partners, leveraging their networks and data centers."
    },
    {
      icon: Globe,
      title: "Global Federation",
      description: "Our multi-telco approach creates an interconnected network of AI marketplaces, enabling global innovation with local deployment."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in data sovereignty, privacy-by-design, and adherence to regulatory frameworks ensure enterprise-grade security."
    },
    {
      icon: Zap,
      title: "Network-Native Performance",
      description: "Ultra-low latency AI services powered by 5G MEC nodes and edge computing infrastructure."
    }
  ];

  const differentiators = [
    {
      title: "Multi-Telco vs Single Entity",
      description: "Unlike platforms confined to one operator, AIgilityX scales across regions and telcos globally."
    },
    {
      title: "Infrastructure-Led Design",
      description: "Deep integration with telco assets enables GPU-as-a-Service and network API capabilities."
    },
    {
      title: "Open Ecosystem Model",
      description: "Multiple AI providers, developers, and integrators create diverse, interoperable solutions."
    },
    {
      title: "AI-IaaS Leadership",
      description: "Beyond solution curation - we enable telcos to sell AI compute infrastructure on demand."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            About AIgilityX
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Transforming Telcos into
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Innovation Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            AIgilityX AI Hub is a telco-driven AI marketplace platform that empowers telecommunications 
            operators to deliver AI Infrastructure as a Service at scale.
          </p>
        </div>

        {/* Vision Statement */}
        <Card className="p-12 mb-16 bg-gradient-card">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Target className="mx-auto text-primary" size={48} />
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a future where telecommunications operators evolve from connectivity providers 
              to comprehensive AI innovation partners. By embedding AI capabilities within telco infrastructure, 
              we enable ultra-low latency, data locality, and seamless network integration - advantages that 
              traditional cloud providers cannot replicate.
            </p>
          </div>
        </Card>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our platform design and partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg-custom transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Competitive Differentiation */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why AIgilityX is Different</h2>
            <p className="text-xl text-muted-foreground">
              Setting new standards for telco-driven AI platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Positioning */}
        <Card className="p-12 mb-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategic Positioning</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">Marketplace</div>
                <p className="text-sm text-muted-foreground">
                  One-stop AI ecosystem for discovering and deploying solutions
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">Infrastructure</div>
                <p className="text-sm text-muted-foreground">
                  Network-native AI compute powered by telco assets
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-primary">Partnership</div>
                <p className="text-sm text-muted-foreground">
                  Aligning telco success with AI innovation outcomes
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Market Context */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Market Context</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The AI economy is growing rapidly, with massive opportunities for telcos to 
              capture new revenue streams and drive digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">$500B+</div>
              <p className="text-sm text-muted-foreground">Global AI market by 2028</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-sm text-muted-foreground">Annual growth in regional AI adoption</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5G+AI</div>
              <p className="text-sm text-muted-foreground">Network-native competitive advantage</p>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mt-16 p-12 bg-gradient-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Users className="mx-auto" size={48} />
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-90">
              To empower telecommunications operators worldwide to become indispensable AI innovation 
              partners, bridging the gap between cutting-edge AI capabilities and enterprise needs through 
              network-native infrastructure, curated solutions, and a thriving global ecosystem.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
