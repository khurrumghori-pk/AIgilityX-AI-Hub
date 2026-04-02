import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle, XCircle, Clock, Search, Shield, Building2, MapPin, Mail,
  Loader2, Cpu, Users, Scale, FlaskConical, GraduationCap, Server, Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryLabelMap: Record<string, string> = {
  ai_solutions: "AI Solutions",
  experts: "Expert",
  regulators: "Regulator",
  research_labs: "Research Lab",
  certified_partners: "Certified Partner",
  telcos_cloud: "Telco & Cloud",
};

const categoryIconMap: Record<string, any> = {
  ai_solutions: Cpu, experts: Users, regulators: Scale,
  research_labs: FlaskConical, certified_partners: GraduationCap, telcos_cloud: Server,
};

interface PartnerApp {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string | null;
  category: string;
  industry: string;
  region: string;
  country: string;
  description: string;
  status: string;
  created_at: string;
  tags: string[];
  website: string | null;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [partners, setPartners] = useState<PartnerApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("pending");
  const [search, setSearch] = useState("");
  const [processing, setProcessing] = useState<string | null>(null);

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = async () => {
    setLoading(true);
    // Admin needs to see all statuses - use service role via edge function or direct query
    // For now we fetch all statuses by querying each
    const results: PartnerApp[] = [];
    for (const status of ["pending", "approved", "rejected"]) {
      const { data } = await supabase.from("partners").select("*").eq("status", status);
      if (data) results.push(...(data as any[]));
    }
    setPartners(results.map(p => ({ ...p, tags: p.tags || [] })));
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    setProcessing(id);
    const { error } = await supabase.from("partners").update({ status: newStatus }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setPartners(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
      toast({ title: `Partner ${newStatus}`, description: `Status updated to ${newStatus}.` });
    }
    setProcessing(null);
  };

  const filtered = partners.filter(p => {
    const matchesStatus = filter === "all" || p.status === filter;
    const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.organization.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const counts = {
    all: partners.length,
    pending: partners.filter(p => p.status === "pending").length,
    approved: partners.filter(p => p.status === "approved").length,
    rejected: partners.filter(p => p.status === "rejected").length,
  };

  return (
    <div className="min-h-screen">
      <section className="section-dark pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary" size={32} />
            <Badge className="badge-glow">Admin Panel</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[hsl(220_15%_95%)] mb-2">Partner Management</h1>
          <p className="text-[hsl(220_12%_65%)]">Review, approve, or reject partner applications.</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Total", count: counts.all, icon: Building2, color: "text-primary" },
              { label: "Pending", count: counts.pending, icon: Clock, color: "text-amber-500" },
              { label: "Approved", count: counts.approved, icon: CheckCircle, color: "text-emerald-500" },
              { label: "Rejected", count: counts.rejected, icon: XCircle, color: "text-red-500" },
            ].map(s => (
              <Card key={s.label} className="p-4 bg-[hsl(220_22%_12%)] border-[hsl(220_18%_20%)]">
                <s.icon className={s.color} size={20} />
                <p className="text-2xl font-bold text-[hsl(220_15%_95%)] mt-2">{s.count}</p>
                <p className="text-sm text-[hsl(220_12%_65%)]">{s.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-8 px-4 min-h-[60vh]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Tabs value={filter} onValueChange={setFilter} className="flex-1">
              <TabsList>
                <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({counts.pending})</TabsTrigger>
                <TabsTrigger value="approved">Approved ({counts.approved})</TabsTrigger>
                <TabsTrigger value="rejected">Rejected ({counts.rejected})</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input placeholder="Search partners..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary" size={40} /></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No partners match your filters.</div>
          ) : (
            <div className="space-y-4">
              {filtered.map(p => {
                const CatIcon = categoryIconMap[p.category] || Cpu;
                return (
                  <Card key={p.id} className="p-5 shadow-soft">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                        <CatIcon className="text-primary-foreground" size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{p.name}</h3>
                          <Badge variant={p.status === "approved" ? "default" : p.status === "rejected" ? "destructive" : "secondary"} className="text-xs">
                            {p.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{categoryLabelMap[p.category]}</Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1"><Building2 size={14} />{p.organization}</span>
                          <span className="flex items-center gap-1"><MapPin size={14} />{p.country}</span>
                          <span className="flex items-center gap-1"><Mail size={14} />{p.email}</span>
                          <span>{new Date(p.created_at).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{p.description}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Link to={`/partner/${p.id}`}>
                          <Button variant="outline" size="sm"><Eye size={14} className="mr-1" />View</Button>
                        </Link>
                        {p.status === "pending" && (
                          <>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={processing === p.id} onClick={() => updateStatus(p.id, "approved")}>
                              {processing === p.id ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle size={14} className="mr-1" />}Approve
                            </Button>
                            <Button size="sm" variant="destructive" disabled={processing === p.id} onClick={() => updateStatus(p.id, "rejected")}>
                              <XCircle size={14} className="mr-1" />Reject
                            </Button>
                          </>
                        )}
                        {p.status === "approved" && (
                          <Button size="sm" variant="destructive" disabled={processing === p.id} onClick={() => updateStatus(p.id, "rejected")}>
                            Revoke
                          </Button>
                        )}
                        {p.status === "rejected" && (
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={processing === p.id} onClick={() => updateStatus(p.id, "approved")}>
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
