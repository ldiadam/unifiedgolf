export interface Location {
  id: number;
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
