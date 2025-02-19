import { LeadType } from "../components/leads/LeadsSelector";

// Define a TypeScript type for Lead objects
export interface Lead {
  name: string;
  email: string;
  date: string[];
  type: LeadType;
  people: { adult: string; children: string }[];
  address: string;
  phone: string;
  destination: string;
  by: "user" | "org";
}
