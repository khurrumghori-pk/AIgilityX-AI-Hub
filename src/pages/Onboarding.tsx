import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Upload, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "Your solution will be reviewed by our team within 3-5 business days.",
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Partner Onboarding
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold">List Your AI Solution</h1>
          <p className="text-xl text-muted-foreground">
            Join our marketplace and reach thousands of enterprises and government organizations
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { num: 1, label: "Basic Info" },
              { num: 2, label: "Technical Details" },
              { num: 3, label: "Compliance" }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s.num 
                      ? "bg-gradient-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {step > s.num ? <CheckCircle2 size={20} /> : s.num}
                  </div>
                  <span className="text-xs mt-2 text-center">{s.label}</span>
                </div>
                {idx < 2 && (
                  <div className={`h-0.5 flex-1 mx-2 transition-all ${
                    step > s.num ? "bg-primary" : "bg-secondary"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
              
              <div className="space-y-2">
                <Label htmlFor="solution-name">Solution Name *</Label>
                <Input id="solution-name" placeholder="e.g., AI-Powered Customer Analytics" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="partner-name">Partner/Company Name *</Label>
                <Input id="partner-name" placeholder="Your company name" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Solution Category *</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analytics">Analytics</SelectItem>
                      <SelectItem value="nlp">Natural Language Processing</SelectItem>
                      <SelectItem value="computer-vision">Computer Vision</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="iot">IoT & Edge AI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Target Industry *</Label>
                  <Select>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telecom">Telecommunications</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Solution Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your AI solution, its key features, and benefits..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" type="url" placeholder="https://yourcompany.com" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Technical Details</h2>
              
              <div className="space-y-2">
                <Label htmlFor="tech-stack">Technology Stack *</Label>
                <Textarea 
                  id="tech-stack" 
                  placeholder="List the key technologies, frameworks, and models used..."
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deployment">Deployment Model *</Label>
                  <Select>
                    <SelectTrigger id="deployment">
                      <SelectValue placeholder="Select deployment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cloud">Cloud-based</SelectItem>
                      <SelectItem value="on-premise">On-premise</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="edge">Edge Computing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="integration">Integration Type *</Label>
                  <Select>
                    <SelectTrigger id="integration">
                      <SelectValue placeholder="Select integration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="api">REST API</SelectItem>
                      <SelectItem value="sdk">SDK</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="custom">Custom Integration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="use-cases">Key Use Cases *</Label>
                <Textarea 
                  id="use-cases" 
                  placeholder="Describe 2-3 primary use cases and success stories..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricing">Pricing Model *</Label>
                <Input id="pricing" placeholder="e.g., Per user/month, Enterprise license, Usage-based" />
              </div>

              <div className="space-y-3">
                <Label>Documentation *</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="mx-auto mb-4 text-muted-foreground" size={40} />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload technical documentation, API specs, or product sheets
                  </p>
                  <p className="text-xs text-muted-foreground">PDF, DOCX, or ZIP (Max 10MB)</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Compliance & Certifications</h2>
              
              <div className="space-y-4">
                <Label>Data Compliance *</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gdpr" />
                    <label htmlFor="gdpr" className="text-sm">GDPR Compliant</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="data-sovereignty" />
                    <label htmlFor="data-sovereignty" className="text-sm">Local Data Sovereignty</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="iso27001" />
                    <label htmlFor="iso27001" className="text-sm">ISO 27001 Certified</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="soc2" />
                    <label htmlFor="soc2" className="text-sm">SOC 2 Compliant</label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="security">Security Measures *</Label>
                <Textarea 
                  id="security" 
                  placeholder="Describe your security architecture, encryption methods, access controls..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ai-ethics">AI Ethics & Governance *</Label>
                <Textarea 
                  id="ai-ethics" 
                  placeholder="Explain your approach to AI ethics, bias mitigation, and responsible AI practices..."
                  rows={4}
                />
              </div>

              <div className="space-y-3">
                <Label>Certifications & Compliance Documents</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="mx-auto mb-4 text-muted-foreground" size={40} />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload compliance certificates and security audit reports
                  </p>
                  <p className="text-xs text-muted-foreground">PDF or ZIP (Max 10MB)</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm leading-relaxed">
                    I confirm that all information provided is accurate and I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-primary hover:underline">Vendor Agreement</a>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2" size={16} />
              Previous
            </Button>

            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="bg-gradient-primary hover:opacity-90"
              >
                Next Step
                <ArrowRight className="ml-2" size={16} />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-primary hover:opacity-90"
              >
                Submit Application
                <CheckCircle2 className="ml-2" size={16} />
              </Button>
            )}
          </div>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Review Process</h3>
            <p className="text-sm text-muted-foreground">
              Our team conducts a two-stage evaluation: technical review (3-5 days) and 
              business validation (2-3 days). You'll receive feedback at each stage.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Free Listing</h3>
            <p className="text-sm text-muted-foreground">
              Basic marketplace listing is free. Premium features include enhanced analytics, 
              priority placement, and dedicated support.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
