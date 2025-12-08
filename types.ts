export interface NavItem {
  label: string;
  path: string;
}

export enum BikeCategory {
  CITY = 'Ville',
  TREKKING = 'Trekking',
  CARGO = 'Cargo',
  UTILITY = 'Utilitaire',
}

export interface Bike {
  id: string;
  name: string;
  category: BikeCategory;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
