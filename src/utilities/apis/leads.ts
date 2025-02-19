import { LeadType } from "../../components/leads/LeadsSelector";
import { Lead } from "../../types/leads";

// Fetch leads based on type
const fetchLeadsByType = async (leadType: LeadType): Promise<Lead[]> => {
  // in dev send the leadType to server and get items from there only and some more filter like date and range too
  try {
    const response = await fetch("/statics/leads.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch leads: ${response.statusText}`);
    }
    const leads: Lead[] = await response.json();
    const filteredLeads = leads.filter((lead) => lead.type === leadType);
    console.log(`Filtered Leads for "${leadType}":`, filteredLeads);

    return filteredLeads;
  } catch (error) {
    console.warn("Error fetching leads:", error);
    return [];
  }
};

export { fetchLeadsByType };
