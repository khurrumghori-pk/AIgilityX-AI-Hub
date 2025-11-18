import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Eye, DollarSign } from "lucide-react";

const PartnerDashboard = () => {
  const statsData = [
    { title: "Total Views", value: "24,532", change: "+12.5%", icon: Eye },
    { title: "Demo Requests", value: "1,247", change: "+8.3%", icon: Users },
    { title: "Active Deployments", value: "456", change: "+15.2%", icon: TrendingUp },
    { title: "Revenue (MTD)", value: "$125,450", change: "+22.1%", icon: DollarSign },
  ];

  const monthlyViews = [
    { month: "Jan", views: 4200 },
    { month: "Feb", views: 5100 },
    { month: "Mar", views: 4800 },
    { month: "Apr", views: 6300 },
    { month: "May", views: 7200 },
    { month: "Jun", views: 8100 },
  ];

  const demoRequests = [
    { week: "Week 1", requests: 45 },
    { week: "Week 2", requests: 52 },
    { week: "Week 3", requests: 48 },
    { week: "Week 4", requests: 61 },
  ];

  const regionData = [
    { name: "GCC & MENA", value: 35 },
    { name: "South Asia", value: 28 },
    { name: "Europe", value: 22 },
    { name: "North America", value: 15 },
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Partner Analytics Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Track your AI solution performance and insights
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6 hover:shadow-lg-custom transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-sm font-medium text-green-500">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Views */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Monthly Solution Views</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyViews}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Demo Requests */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Weekly Demo Requests</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={demoRequests}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="requests" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Region Distribution */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Deployment by Region</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 mt-6">
          <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "New demo request from STC", time: "2 hours ago", region: "GCC & MENA" },
              { action: "Solution deployed at Etisalat", time: "5 hours ago", region: "GCC & MENA" },
              { action: "Review received: 4.8 stars", time: "1 day ago", region: "South Asia" },
              { action: "Contract signed with Telenor", time: "2 days ago", region: "South Asia" },
              { action: "Demo request from Vodafone", time: "3 days ago", region: "Europe" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.region}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartnerDashboard;
