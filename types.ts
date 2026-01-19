export interface Room {
  id: string;
  name: string;
  type: string;
  price: number; // Monthly rent in 10,000 KRW
  deposit: number; // Deposit in 10,000 KRW
  features: string[];
  status: 'available' | 'full' | 'soon';
  image: string;
  dateAvailable?: string;
}

export interface Review {
  id: string;
  user: string;
  date: string;
  rating: number;
  content: string;
  images: string[];
  avatar?: string;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface MediaItem {
  id: number | string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  alt?: string;
}

export enum ModalType {
  NONE,
  BOOKING,
  INQUIRY,
  MANAGER,
}