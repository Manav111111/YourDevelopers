export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  status: "New" | "Contacted" | "Closed";
  created_at: string;
}

// Memory & session store for consultation requests
const globalLeadsStore: Lead[] = [];

export async function saveLeadToStore(leadData: Omit<Lead, "id" | "created_at" | "status">): Promise<Lead> {
  const newLead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    ...leadData,
    status: "New",
    created_at: new Date().toISOString()
  };

  globalLeadsStore.unshift(newLead);
  return newLead;
}

export async function getLeadsFromStore(): Promise<Lead[]> {
  return globalLeadsStore;
}

export async function updateLeadStatus(id: string, status: Lead["status"]): Promise<boolean> {
  const lead = globalLeadsStore.find((l) => l.id === id);
  if (lead) {
    lead.status = status;
    return true;
  }
  return false;
}

export async function deleteLeadFromStore(id: string): Promise<boolean> {
  const idx = globalLeadsStore.findIndex((l) => l.id === id);
  if (idx !== -1) {
    globalLeadsStore.splice(idx, 1);
    return true;
  }
  return false;
}
