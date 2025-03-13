import { CompanyResponse } from "@/types/company";
import { API_BASE_URL, fetchConfig } from "@/config/api";

export async function getCompany(): Promise<CompanyResponse> {
  const response = await fetch(`${API_BASE_URL}/customer`, fetchConfig);

  if (!response.ok) {
    throw new Error("Failed to fetch customers");
  }

  return response.json();
}

export async function createCompany(data: any): Promise<CompanyResponse> {
  const response = await fetch(`${API_BASE_URL}/customer`, {
    ...fetchConfig,
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create customer");
  }

  return response.json();
}
