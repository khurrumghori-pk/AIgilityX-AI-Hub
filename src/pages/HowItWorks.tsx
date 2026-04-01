import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Server,
  ShoppingBag,
  Bot,
  Shield,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Network,
  Zap,
  Globe,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const layers = [
  {
    id: "compute",
    icon: Server,
    title: "Sovereign Compute Layer",
    subtitle: "GPU-as-a-Service & Edge Infrastructure",
    color: "from-[hsl(200_80%_40%)] to-[hsl(210_85%_50%)]",
    accent: "hsl(200, 80%, 40%)",
    description:
      "Multi-region GPU infrastructure enabling sovereign AI workloads with data residency compliance, federated across telco and cloud partners.",
    details: [
      {
        title: "GPU-as-a-Service",
        desc: "On-demand GPU compute via telco sovereign clouds — Core42, stc Cloud, Jazz DC — with pay-per-use billing.",
      },
      {
        title: "Edge AI Nodes",
        desc: "Deploy AI inference at the network edge for low-latency applications in smart cities, healthcare, and industrial IoT.",
      },
      {
        title: "Data Residency",
        desc: "Guaranteed in-country data residency with sovereign cloud deployments meeting national regulatory requirements.",
      },
      {
        title: "Federated Training",
        desc: "Train AI models across distributed infrastructure while keeping data local — privacy-preserving collaborative learning.",
      },
    ],
  },
  {
    id: "marketplace",
    icon: ShoppingBag,
    title: "AI Marketplace Layer",
    subtitle: "Multi-Category Solution Discovery",
    color: "from-primary to-primary-glow",
    accent: "hsl(180, 70%, 35%)",
    description:
      "Six integrated marketplaces connecting solution providers, experts, regulators, research labs, certified partners, and telco infrastructure in one platform.",
    details: [
      {
        title: "Solution Providers",
        desc: "Browse, compare, and deploy AI products from vetted vendors with ratings, certifications, and deployment metrics.",
      },
      {
        title: "Expert Network",
        desc: "Find certified AI consultants, researchers, and trainers with verified credentials and industry expertise.",
      },
      {
        title: "Research-to-Market",
        desc: "Accelerate commercialization from research labs to market-ready solutions via the AI Factory pipeline.",
      },
      {
        title: "Infrastructure Partners",
        desc: "Connect with telcos and cloud providers offering sovereign compute, 5G edge, and deployment services.",
      },
    ],
  },
  {
    id: "agents",
    icon: Bot,
    title: "AI Agents Layer",
    subtitle: "Intelligent Automation & Orchestration",
    color: "from-[hsl(280_70%_50%)] to-[hsl(300_80%_55%)]",
    accent: "hsl(280, 70%, 50%)",
    description:
      "Autonomous AI agents that discover solutions, negotiate terms, orchestrate deployments, and continuously optimize performance across the ecosystem.",
    details: [
      {
        title: "Discovery Agents",
        desc: "AI-powered recommendation engine matching enterprise needs to optimal solutions based on requirements and context.",
      },
      {
        title: "Procurement Agents",
        desc: "Automated RFP generation, vendor comparison, and contract negotiation with built-in compliance checks.",
      },
      {
        title: "Deployment Orchestration",
        desc: "Intelligent deployment pipelines that select optimal infrastructure, configure environments, and manage rollouts.",
      },
      {
        title: "Performance Monitors",
        desc: "Continuous AI model monitoring with drift detection, SLA tracking, and automated remediation workflows.",
      },
    ],
  },
  {
    id: "governance",
    icon: Shield,
    title: "Governance & Trust Layer",
    subtitle: "Compliance, Ethics & Responsible AI",
    color: "from-accent to-[hsl(45_100%_55%)]",
    accent: "hsl(32, 95%, 52%)",
    description:
      "End-to-end AI governance framework with regulatory compliance, ethical AI assessment, and transparent audit trails across all ecosystem operations.",
    details: [
      {
        title: "Policy-as-Code",
        desc: "Automated compliance checking against ISO 42001, EU AI Act, and regional frameworks with real-time policy enforcement.",
      },
      {
        title: "Ethical AI Assessment",
        desc: "Bias detection, fairness metrics, and explainability tools ensuring responsible AI deployment across the ecosystem.",
      },
      {
        title: "Audit Trails",
        desc: "Immutable logs of all decisions, deployments, and data access for full transparency and regulatory reporting.",
      },
      {
        title: "Trust Badges",
        desc: "Verifiable compliance certifications displayed on marketplace listings — building buyer confidence.",
      },
    ],
  },
];

const HowItWorks = () => {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("compute");

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="section-dark pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
            <Badge className="badge-glow text-sm px-4 py-2">
              <Layers className="w-4 h-4 mr-2" /> Platform Architecture
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-tight">
              Four Layers of
              <span className="block gradient-text mt-2">Intelligence</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto leading-relaxed">
              A full-stack sovereign AI platform — from GPU compute to intelligent agents —
              orchestrated through a unified governance layer.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Stack - Light */}
      <section className="section-light py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">Architecture Overview</Badge>
            <h2 className="text-3xl font-display font-bold">The AIgilityX Stack</h2>
          </div>

          <div className="space-y-3">
            {layers.map((layer) => {
              const Icon = layer.icon;
              const isExpanded = expandedLayer === layer.id;
              return (
                <Card
                  key={layer.id}
                  className={`overflow-hidden transition-all duration-500 shadow-soft ${
                    isExpanded ? "ring-2 ring-primary/30" : ""
                  }`}
                >
                  <button
                    onClick={() => setExpandedLayer(isExpanded ? null : layer.id)}
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${layer.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.subtitle}</p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="text-muted-foreground flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-muted-foreground flex-shrink-0" size={20} />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {layer.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                            <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                            <div>
                              <h4 className="font-medium text-sm mb-1">{detail.title}</h4>
                              <p className="text-xs text-muted-foreground">{detail.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Layers - Alternating Dark/Light */}
      {layers.map((layer, index) => {
        const Icon = layer.icon;
        const isDark = index % 2 === 0;
        return (
          <section
            key={layer.id}
            className={`${isDark ? "section-dark" : "section-light"} py-24 px-4 sm:px-6 lg:px-8`}
          >
            <div className="container mx-auto">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Badge
                    className={isDark ? "badge-glow" : "bg-accent/10 text-accent border-accent/20"}
                  >
                    Layer {index + 1}
                  </Badge>
                  <h2 className="text-4xl font-display font-bold leading-tight">
                    {layer.title}
                  </h2>
                  <p className={`text-lg leading-relaxed ${isDark ? "text-[hsl(220_12%_65%)]" : "text-muted-foreground"}`}>
                    {layer.description}
                  </p>
                  <ul className="space-y-4">
                    {layer.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className={`font-semibold mb-1 ${isDark ? "text-[hsl(220_15%_95%)]" : ""}`}>
                            {detail.title}
                          </h4>
                          <p className={`text-sm ${isDark ? "text-[hsl(220_12%_60%)]" : "text-muted-foreground"}`}>
                            {detail.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square bg-primary/20 rounded-3xl absolute inset-0 blur-3xl" />
                  <Card className={`relative p-8 ${isDark ? "card-themed" : "shadow-lg-custom"}`}>
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className={`w-24 h-24 bg-gradient-to-br ${layer.color} rounded-3xl flex items-center justify-center shadow-lg animate-float`}>
                        <Icon className="text-white" size={48} />
                      </div>
                      <h3 className={`text-2xl font-display font-bold ${isDark ? "text-[hsl(220_15%_95%)]" : ""}`}>
                        {layer.title}
                      </h3>
                      <p className={`text-sm ${isDark ? "text-[hsl(220_12%_60%)]" : "text-muted-foreground"}`}>
                        {layer.subtitle}
                      </p>
                      <div className="grid grid-cols-2 gap-4 w-full">
                        {layer.details.map((d, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-xl text-center ${
                              isDark ? "bg-[hsl(220_25%_8%)]" : "bg-muted"
                            }`}
                          >
                            <p className="text-xs font-medium gradient-text">{d.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-primary p-12 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary-foreground">
                Experience the Full Stack
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Explore the marketplace or join as a partner to access all four layers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/marketplace">
                  <Button size="lg" variant="secondary" className="shadow-lg h-14 px-8">
                    Explore Marketplace
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 h-14 px-8"
                  >
                    Contact Us <ArrowRight className="ml-2" size={18} />
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

export default HowItWorks;
