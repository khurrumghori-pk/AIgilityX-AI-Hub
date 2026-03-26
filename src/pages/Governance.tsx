import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield, Lock, Scale, FileText, CheckCircle2, ArrowRight,
  Eye, Layers, Globe, AlertTriangle
} from "lucide-react";

const Governance = () => {
  const policies = [
    { icon: Shield, title: "Multi-Layer AI Policy Engine", description: "Automated policy enforcement across compute, model, and application layers." },
    { icon: Scale, title: "ISO 42001-Aligned Framework", description: "AI management system standard ensuring responsible AI development and deployment." },
    { icon: Eye, title: "Agent-Level Audit Trails", description: "Complete traceability for every AI agent action with real-time logging." },
    { icon: Lock, title: "Data Sovereignty Controls", description: "Enforce data residency requirements and cross-border data transfer policies." },
    { icon: FileText, title: "Explainability Reports", description: "Automated model explainability and bias detection reporting for stakeholders." },
    { icon: AlertTriangle, title: "Risk Assessment Engine", description: "Continuous AI risk scoring and mitigation recommendations." },
  ];

  const frameworks = [
    { name: "UAE AI Ethics", status: "Active", region: "UAE" },
    { name: "SDAIA AI Governance", status: "Active", region: "KSA" },
    { name: "EU AI Act", status: "Active", region: "Europe" },
    { name: "ISO 42001", status: "Certified", region: "Global" },
    { name: "NIST AI RMF", status: "Active", region: "Global" },
    { name: "Pakistan AI Policy", status: "In Progress", region: "Pakistan" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="section-dark pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-glow">Governance & Security</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-bold">
              Sovereign AI <span className="gradient-text">Governance</span>
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto">
              Embedded policy-as-code ensures every AI workflow meets your nation's regulations. 
              Real-time audit logs and explainability are built in.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Features - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">Capabilities</Badge>
            <h2 className="text-4xl font-display font-bold">Governance Framework</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, i) => {
              const Icon = policy.icon;
              return (
                <Card key={i} className="p-6 hover-lift shadow-soft">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{policy.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="badge-glow mb-4">Compliance</Badge>
            <h2 className="text-4xl font-display font-bold">Regulatory Frameworks</h2>
            <p className="text-[hsl(220_12%_65%)] mt-4">Aligned with regional and global AI governance standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((fw, i) => (
              <Card key={i} className="card-themed p-6 hover-lift">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-[hsl(220_15%_95%)]">{fw.name}</h3>
                  <Badge className={fw.status === "Certified" ? "bg-accent/10 text-accent border-accent/30" : fw.status === "In Progress" ? "bg-[hsl(220_20%_18%)] text-[hsl(220_12%_65%)]" : "bg-primary/10 text-primary border-primary/30"}>
                    {fw.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-[hsl(220_12%_60%)]" size={14} />
                  <span className="text-sm text-[hsl(220_12%_60%)]">{fw.region}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl space-y-6">
          <h2 className="text-4xl font-display font-bold">Need Compliance Support?</h2>
          <p className="text-lg text-muted-foreground">Contact our governance team to discuss regulatory requirements for your region.</p>
          <Link to="/onboarding">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow h-14 px-8">
              Contact Governance Team <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Governance;
