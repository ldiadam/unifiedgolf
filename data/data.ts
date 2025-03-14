export type Company = {
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
  company_category: { id: number; cat: string }[];
};
export const users: Company[] = [
  {
    id: 1,
    company_name: "ABC Pte Ltd",
    company_code: "Trx001",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Customer",
      },
    ],
    company_timestamp: "07-03-2025",
  },
  {
    id: 2,
    company_name: "ABC Pte Ltd",
    company_code: "Trx002",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Customer",
      },
      {
        id: 2,
        cat: "Vendors",
      },
    ],
    company_timestamp: "07-03-2025",
  },
  {
    id: 3,
    company_name: "ABC Pte Ltd",
    company_code: "Trx003",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Hotels",
      },
      {
        id: 2,
        cat: "Vendors",
      },
    ],
    company_timestamp: "07-03-2025",
  },
  {
    id: 4,
    company_name: "ABC Pte Ltd",
    company_code: "Trx003",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Transportation",
      },
      {
        id: 2,
        cat: "Hotels",
      },
    ],
    company_timestamp: "07-03-2025",
  },
  {
    id: 5,
    company_name: "ABC Pte Ltd",
    company_code: "Trx003",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Hotels",
      },
      {
        id: 2,
        cat: "Tour Company",
      },
    ],
    company_timestamp: "07-03-2025",
  },
  {
    id: 6,
    company_name: "ABC Pte Ltd",
    company_code: "Trx003",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Restaurant",
      },
      {
        id: 2,
        cat: "Hotels",
      },
    ],
    company_timestamp: "07-03-2025",
  },
  {
    id: 7,
    company_name: "ABC Pte Ltd",
    company_code: "Trx003",
    company_address: "st. Louis",
    company_address_building: "st. Louis",
    company_street_number: 12,
    company_street_name: "st. Louis",
    company_building_no: 12,
    company_building_unit: "3A",
    company_building_name: "Tower Building",
    company_city: "Johar",
    company_state: "Johar",
    company_country: "Malaysia",
    company_zip_code: 12510,
    company_fax: "xxxxx",
    company_website: "xxxx",
    company_pic: "Xxxx",
    company_designation: "xxxxx",
    company_email: "xxxxxx",
    company_phone: "Xxxxxx",
    company_category: [
      {
        id: 1,
        cat: "Golf Course",
      },
      {
        id: 2,
        cat: "Hotels",
      },
      {
        id: 3,
        cat: "Restaurant",
      },
    ],
    company_timestamp: "07-03-2025",
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
