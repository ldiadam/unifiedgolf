import { GreenFeeData } from "@/types/green-fee";

export const malaysianGreenFeeData: GreenFeeData[] = [
  {
    company: "Le Grandeur",
    golfCourse: "Palm Resort",
    values: [130, 170, 225, 340, 205, 295, 165, 295],
    remarks: "Agent Rates",
  },
  {
    company: "Le Grandeur",
    golfCourse: "Palm Resort",
    values: [null, null, null, null, null, null, null, null],
    remarks: "Published Rates",
  },
  {
    company: "Que Golf Service",
    golfCourse: "Forest City",
    values: [270, null, 370, null, null, null, null, null],
    remarks: "Agent Rates",
  },
  {
    company: "Que Golf Service",
    golfCourse: "Forest City",
    values: [300, null, 400, null, null, null, null, null],
    remarks: "Published Rates",
  },
  {
    company: "Ace",
    golfCourse: "",
    values: [280, null, 380, null, null, null, null, null],
    remarks: "Agent Rates",
  },
  {
    company: "Ace",
    golfCourse: "",
    values: [null, null, null, null, null, null, null, null],
    remarks: "",
  },
  {
    company: "Bintang Course",
    golfCourse: "Star Hill",
    values: [205, 205, 205, 205, null, null, 250, 250],
    remarks: "Agent Rates",
  },
  {
    company: "Bintang Course",
    golfCourse: "Star Hill",
    values: [200, 240, 340, 400, null, null, 200, 240],
    remarks: "Published Rates",
  },
];

export const nonMalaysianGreenFeeData: GreenFeeData[] = [
  {
    company: "Le Grandeur",
    golfCourse: "Palm Resort",
    values: [160, 200, 255, 370, 235, 325, 195, 325],
    remarks: "Agent Rates",
  },
  {
    company: "Le Grandeur",
    golfCourse: "Palm Resort",
    values: [null, null, null, null, null, null, null, null],
    remarks: "Published Rates",
  },
  {
    company: "Que Golf Service",
    golfCourse: "Forest City",
    values: [350, null, 450, null, null, null, null, null],
    remarks: "Agent Rates",
  },
  {
    company: "Que Golf Service",
    golfCourse: "Forest City",
    values: [380, null, 480, null, null, null, null, null],
    remarks: "Published Rates",
  },
];

export const columnHeaders = [
  "Company",
  "Golf Course",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "Remarks",
];
