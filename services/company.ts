import { CompanyResponse } from "@/types/company";
import { API_BASE_URL, fetchConfig } from "@/config/api";

export async function getCompany(): Promise<CompanyResponse> {
  const response = await fetch(`${API_BASE_URL}/customer`, fetchConfig);

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  return response.json();
}

export async function getCompanyId(id: any): Promise<CompanyResponse> {
  const response = await fetch(`${API_BASE_URL}/customer/${id}`, fetchConfig);

  if (!response.ok) {
    throw new Error("Failed to fetch company id");
  }

  return response.json();
}
