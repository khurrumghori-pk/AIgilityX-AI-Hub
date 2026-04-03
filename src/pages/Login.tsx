import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Shield, Loader2, Mail, Lock } from "lucide-react";

const Login = () => {
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Welcome back!" });
      navigate("/admin");
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signUp(email, password);
    if (error) {
      toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Check your email", description: "We sent you a verification link." });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <section className="section-dark pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-md">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Shield className="text-primary" size={32} />
            <h1 className="text-3xl font-display font-bold text-[hsl(220_15%_95%)]">Admin Access</h1>
          </div>

          <Card className="p-6 bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)]">
            <Tabs defaultValue="signin">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="signin" className="flex-1">Sign In</TabsTrigger>
                <TabsTrigger value="signup" className="flex-1">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <Label className="text-[hsl(220_12%_70%)]">Email</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@example.com" className="pl-9" required />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[hsl(220_12%_70%)]">Password</Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="pl-9" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary" disabled={loading}>
                    {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <Label className="text-[hsl(220_12%_70%)]">Email</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@example.com" className="pl-9" required />
                    </div>
                  </div>
                  <div>
                    <Label className="text-[hsl(220_12%_70%)]">Password</Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="pl-9" required minLength={6} />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary" disabled={loading}>
                    {loading ? <Loader2 className="animate-spin mr-2" size={16} /> : null}Sign Up
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  After signing up, an admin must assign you the admin role to access the dashboard.
                </p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Login;
