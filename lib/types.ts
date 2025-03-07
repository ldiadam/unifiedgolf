// import { Icons } from '@/components/icons';

export interface Location {
  id: number;
  slug: string;
  name: string;
  country: string;
  city: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviews: number;
  pricePerDay: number;
  type: string;
}

export interface SearchFilters {
  location: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  searchTerm: string;
}

export interface BookingItem {
  bookingId: string;
  name: string;
  imageUrl: string;
  country: string;
  city: string;
  date: string;
  players: number;
  teeTime: string;
  pricePerDay: number;
  totalPrice: number;
}

export interface RouteProps {
  id: number;
  href: string;
  label: string;
  hasChildren?: boolean;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  // icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  submenu?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
