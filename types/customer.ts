export interface Customer {
  id: number;
  company_name: string;
  company_code: string;
  company_address: string;
  company_address_building: string;
  company_street_number: number;
  company_street_name: string;
  company_building_no: number;
  company_building_unit: string;
  company_building_name: string;
  company_city: string;
  company_state: string;
  company_country: string;
  company_zip_code: number;
  company_fax: string;
  company_website: string;
  company_pic: string;
  company_designation: string;
  company_email: string;
  company_phone: string;
  company_timestamp: string;
  active_status_id: string;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
}

export interface CustomerResponse {
  code: number;
  status: string;
  error: null | string;
  data: Customer[];
}
