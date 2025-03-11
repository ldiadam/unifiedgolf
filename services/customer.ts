import { CustomerResponse } from "@/types/customer";
import { API_BASE_URL, fetchConfig } from "@/config/api";

export async function getCustomers(): Promise<CustomerResponse> {
  const response = await fetch(`${API_BASE_URL}/customer`, fetchConfig);

  if (!response.ok) {
    throw new Error("Failed to fetch customers");
  }

  return response.json();
}
