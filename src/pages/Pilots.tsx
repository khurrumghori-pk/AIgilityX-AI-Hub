import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Rocket, ArrowRight, CheckCircle2, Building2, Globe,
  Zap, Shield, TrendingUp, Factory
} from "lucide-react";

const Pilots = () => {
  const [submitted, setSubmitted] = useState(false);

  const useCases = [
    { title: "AI-Powered Citizen Services", industry: "Government", region: "GCC", description: "Automate citizen requests, document processing, and service delivery using AI agents." },
    { title: "5G Network Optimization", industry: "Telecom", region: "Global", description: "Predictive maintenance and real-time network optimization for 5G infrastructure." },
    { title: "Sovereign Document Intelligence", industry: "Enterprise", region: "MENA", description: "Process Arabic and multilingual documents with full data residency compliance." },
    { title: "AI-Driven Fraud Detection", industry: "Finance", region: "South Asia", description: "Real-time transaction monitoring and fraud prevention using ML models." },
    { title: "Smart Grid Energy Management", industry: "Energy", region: "KSA", description: "Optimize energy distribution and predict demand using AI analytics." },
    { title: "Healthcare Diagnostics AI", industry: "Healthcare", region: "Pakistan", description: "AI-assisted diagnostics and patient management systems." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Dark */}
      <section className="section-dark pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="badge-glow">Use Cases & Pilots</Badge>
            <h1 className="text-5xl sm:text-6xl font-display font-bold">
              Pilot a <span className="gradient-text">Sovereign AI</span> Use Case
            </h1>
            <p className="text-xl text-[hsl(220_12%_65%)] max-w-3xl mx-auto">
              Launch a pilot with validated AI solutions, sovereign infrastructure, 
              and expert support from the ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid - Light */}
      <section className="section-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">Industry Scenarios</Badge>
            <h2 className="text-4xl font-display font-bold">Featured Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <Card key={i} className="p-6 hover-lift shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{uc.industry}</Badge>
                  <Badge variant="outline" className="text-xs">{uc.region}</Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{uc.description}</p>
                <Button variant="ghost" className="text-primary p-0 h-auto">
                  Learn More <ArrowRight className="ml-2" size={14} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Signup Form - Dark */}
      <section className="section-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="badge-glow mb-4">Sign Up</Badge>
              <h2 className="text-4xl font-display font-bold">Request a Pilot</h2>
              <p className="text-[hsl(220_12%_65%)] mt-4">Tell us about your use case and we'll match you with the right solution.</p>
            </div>

            {!submitted ? (
              <Card className="card-themed p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[hsl(220_15%_95%)]">Organization Name</Label>
                      <Input placeholder="Your organization" className="bg-[hsl(220_25%_12%)] border-[hsl(220_18%_20%)]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[hsl(220_15%_95%)]">Contact Person</Label>
                      <Input placeholder="Full name" className="bg-[hsl(220_25%_12%)] border-[hsl(220_18%_20%)]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[hsl(220_15%_95%)]">Email</Label>
                      <Input type="email" placeholder="email@company.com" className="bg-[hsl(220_25%_12%)] border-[hsl(220_18%_20%)]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[hsl(220_15%_95%)]">Industry</Label>
                      <Select>
                        <SelectTrigger className="bg-[hsl(220_25%_12%)] border-[hsl(220_18%_20%)]">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="telecom">Telecommunications</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="energy">Energy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[hsl(220_15%_95%)]">Pilot Description</Label>
                    <Textarea placeholder="Describe your use case, objectives, and requirements..." className="bg-[hsl(220_25%_12%)] border-[hsl(220_18%_20%)] min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow h-12" onClick={() => setSubmitted(true)}>
                    Submit Pilot Application
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="card-themed p-12 text-center">
                <CheckCircle2 className="text-primary mx-auto mb-4" size={56} />
                <h3 className="text-2xl font-semibold text-[hsl(220_15%_95%)] mb-2">Application Submitted!</h3>
                <p className="text-[hsl(220_12%_65%)]">We'll review your pilot request and get back to you within 48 hours.</p>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilots;
