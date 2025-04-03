export interface GreenFeeData {
  company: string;
  golfCourse: string;
  values: any[];
  remarks: string;
}

export interface GreenFeeTableProps {
  title: string;
  headerLabels: string[];
  data: GreenFeeData[];
}
