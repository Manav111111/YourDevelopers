"use client";

import { useEffect, useState } from "react";
import { Search, Download, Trash2, RefreshCw, Mail, Phone, Calendar, Tag, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { Lead } from "@/lib/leadsStore";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads || []);
      } else {
        toast.error("Failed to load leads");
      }
    } catch (e) {
      console.error("Fetch error:", e);
      toast.error("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Lead["status"]) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        toast.success(`Status updated to ${newStatus}`);
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        toast.success("Lead deleted successfully");
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete lead");
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) {
      toast.error("No leads available to export");
      return;
    }
    const headers = ["ID", "Name", "Email", "Phone", "Service", "Description", "Status", "Date"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.email.replace(/"/g, '""')}"`,
      `"${l.phone.replace(/"/g, '""')}"`,
      `"${l.service.replace(/"/g, '""')}"`,
      `"${l.description.replace(/"/g, '""')}"`,
      l.status,
      new Date(l.created_at).toLocaleString()
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `consultation_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Exported leads to CSV!");
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.toLowerCase().includes(search.toLowerCase()) ||
      lead.service.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "New").length;
  const contactedLeads = leads.filter((l) => l.status === "Contacted").length;
  const closedLeads = leads.filter((l) => l.status === "Closed").length;

  return (
    <div className="min-h-screen bg-dark text-white p-6 md:p-12 font-body">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-widest mb-1">
              <ShieldAlert size={16} />
              <span>ADMIN DASHBOARD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
              Consultation Requests & Leads
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-xs font-mono font-bold uppercase tracking-wider transition-all"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              <span>Refresh</span>
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs shadow-md hover:bg-white transition-all"
            >
              <Download size={15} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest block mb-1">TOTAL REQUESTS</span>
            <span className="text-3xl font-display font-black text-white">{totalLeads}</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest block mb-1">NEW LEADS</span>
            <span className="text-3xl font-display font-black text-accent">{newLeads}</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">CONTACTED</span>
            <span className="text-3xl font-display font-black text-blue-400">{contactedLeads}</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">CLOSED</span>
            <span className="text-3xl font-display font-black text-emerald-400">{closedLeads}</span>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent text-white placeholder:text-white/30 text-xs font-body outline-none"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs font-mono text-white/60">Status:</span>
            {["All", "New", "Contacted", "Closed"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-colors ${
                  statusFilter === st
                    ? "bg-accent text-dark"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-white/50 font-mono text-xs">Loading leads...</div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-white/50 font-mono text-xs">No consultation requests found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 font-mono text-[11px] uppercase tracking-wider text-white/60">
                    <th className="p-4 font-bold">Client Name</th>
                    <th className="p-4 font-bold">Contact Info</th>
                    <th className="p-4 font-bold">Service Needed</th>
                    <th className="p-4 font-bold">Description</th>
                    <th className="p-4 font-bold">Date</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-display font-bold text-white whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="p-4 whitespace-nowrap space-y-1">
                        <div className="flex items-center gap-1.5 text-white/80">
                          <Mail size={12} className="text-accent" />
                          <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                        </div>
                        <div className="flex items-center gap-1.5 text-white/60 font-mono text-[11px]">
                          <Phone size={12} className="text-accent" />
                          <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone}</a>
                        </div>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-accent/15 text-accent font-mono font-bold text-[11px]">
                          {lead.service}
                        </span>
                      </td>
                      <td className="p-4 max-w-xs text-white/75 line-clamp-2 leading-relaxed">
                        {lead.description}
                      </td>
                      <td className="p-4 whitespace-nowrap font-mono text-[11px] text-white/50">
                        {new Date(lead.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold outline-none cursor-pointer border ${
                            lead.status === "New"
                              ? "bg-accent/20 text-accent border-accent/40"
                              : lead.status === "Contacted"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/40"
                              : "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                          }`}
                        >
                          <option value="New" className="bg-[#191918] text-accent">New</option>
                          <option value="Contacted" className="bg-[#191918] text-blue-400">Contacted</option>
                          <option value="Closed" className="bg-[#191918] text-emerald-400">Closed</option>
                        </select>
                      </td>
                      <td className="p-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="p-2 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/10 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
