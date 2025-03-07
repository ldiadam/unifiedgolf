import { NavItem } from "@/lib/types";
import TestImage from "@/public/vercel.svg";
export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];
// export type Slider = {
//   sl: number;
//   photo: string;
//   heading: string;
//   position: string;
//   language: string;
// };
// export type Product = {
//   sl: number;
//   name: string;
//   photo: string;
//   file_status: any;
// };
// export type ProductCategory = {
//   sl: number;
//   category_name: string;
//   status: string;
//   language: string;
// };
// export type PhotoGallery = {
//   sl: number;
//   photo: string;
// };

// export const productCategory: ProductCategory[] = [
//   {
//     sl: 1,
//     category_name: 'VSAT',
//     status: 'Active',
//     language: 'English'
//   },
//   {
//     sl: 2,
//     category_name: 'Iridium',
//     status: 'Active',
//     language: 'English'
//   },
//   {
//     sl: 3,
//     category_name: 'Polestar',
//     status: 'Active',
//     language: 'English'
//   },
//   {
//     sl: 4,
//     category_name: 'Starlink',
//     status: 'Active',
//     language: 'English'
//   }
// ];
// export const product: Product[] = [
//   {
//     sl: 1,
//     name: 'Test',
//     photo: TestImage,
//     file_status: [
//       {
//         id: 1,
//         url_file: 'https://www.test.com/'
//       },
//       {
//         id: 2,
//         url_file: 'https://www.test2.com/'
//       }
//     ]
//   },
//   {
//     sl: 2,
//     name: 'Test',
//     photo: TestImage,
//     file_status: [
//       {
//         id: 1,
//         url_file: 'https://www.test.com/'
//       },
//       {
//         id: 2,
//         url_file: 'https://www.test2.com/'
//       }
//     ]
//   }
// ];
// export const slider: Slider[] = [
//   {
//     sl: 1,
//     photo: TestImage,
//     heading: 'Test',
//     position: 'Frontend Developer',
//     language: 'Indonesia'
//   },
//   {
//     sl: 2,
//     photo: TestImage,
//     heading: 'Test',
//     position: 'Frontend Developer',
//     language: 'Indonesia'
//   },
//   {
//     sl: 3,
//     photo: TestImage,
//     heading: 'Test',
//     position: 'Frontend Developer',
//     language: 'Indonesia'
//   },
//   {
//     sl: 4,
//     photo: TestImage,
//     heading: 'Test',
//     position: 'Frontend Developer',
//     language: 'Indonesia'
//   }
// ];
// export const photoGallery: PhotoGallery[] = [
//   {
//     sl: 1,
//     photo: TestImage
//   },
//   {
//     sl: 2,
//     photo: TestImage
//   },
//   {
//     sl: 3,
//     photo: TestImage
//   },
//   {
//     sl: 4,
//     photo: TestImage
//   }
// ];

// export type Employee = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   gender: string;
//   date_of_birth: string; // Consider using a proper date type if possible
//   street: string;
//   city: string;
//   state: string;
//   country: string;
//   zipcode: string;
//   longitude?: number; // Optional field
//   latitude?: number; // Optional field
//   job: string;
//   profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
// };

// export const navItems: NavItem[] = [
//   {
//     title: 'Dashboard',
//     href: '/dashboard',
//     icon: 'dashboard',
//     label: 'Dashboard'
//   },
//   {
//     title: 'User',
//     icon: 'profile',
//     submenu: [
//       {
//         title: 'All Users',
//         href: '/user',
//         icon: 'profile'
//       },
//       {
//         title: 'Add User',
//         href: '/user/add',
//         icon: 'profile'
//       }
//     ]
//   },
//   {
//     title: 'Settings',
//     href: '/settings',
//     icon: 'settings',
//     label: 'Settings'
//   },
//   {
//     title: 'Slider',
//     href: '/slider',
//     icon: 'media',
//     label: 'Slider'
//   },
//   {
//     title: 'Photo Gallery',
//     href: '/photo-gallery',
//     icon: 'camera',
//     label: 'Photo Gallery'
//   },
//   {
//     title: 'Product',
//     icon: 'laptop',
//     label: 'Product',
//     submenu: [
//       {
//         title: 'Product',
//         href: '/product',
//         icon: 'laptop',
//         label: 'Product'
//       },
//       {
//         title: 'Product Category',
//         href: '/product/product-category',
//         icon: 'laptop',
//         label: 'Product Category'
//       }
//     ]
//   },
//   {
//     title: 'Add Data',
//     href: '/add-data',
//     icon: 'add',
//     label: 'Add Data'
//   },
//   {
//     title: 'Records',
//     icon: 'records',
//     label: 'Records',
//     submenu: [
//       {
//         title: 'Quotations Records',
//         href: '/quotations-record',
//         icon: 'records',
//         label: 'Quotations Records'
//       },
//       {
//         title: 'Contract Records',
//         href: '/quotations-record',
//         icon: 'records',
//         label: 'Quotations Records'
//       },
//       {
//         title: 'Registration Records',
//         href: '/registration-record',
//         icon: 'records',
//         label: 'Registrations Records'
//       }
//     ]
//   },
//   {
//     title: 'File',
//     href: '/file',
//     icon: 'file',
//     label: 'Product Category'
//   },
//   // {
//   //   title: 'User',
//   //   href: '/dashboard/user',
//   //   icon: 'user',
//   //   label: 'user'
//   // },
//   // {
//   //   title: 'Employee',
//   //   href: '/dashboard/employee',
//   //   icon: 'employee',
//   //   label: 'employee'
//   // },
//   // {
//   //   title: 'Profile',
//   //   href: '/dashboard/profile',
//   //   icon: 'profile',
//   //   label: 'profile'
//   // },
//   // {
//   //   title: 'Kanban',
//   //   href: '/dashboard/kanban',
//   //   icon: 'kanban',
//   //   label: 'kanban'
//   // },
//   {
//     title: 'Logout',
//     href: '/',
//     icon: 'login',
//     label: 'Logout'
//   }
// ];
