export interface BaseListing {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
  createdAt: string;
}

export interface DogOwnerListing extends BaseListing {
  type: 'owner';
  dogName: string;
  dogBreed: string;
  date: string;
  duration: number;
  ownerName: string;
}

export interface DogWalkerListing extends BaseListing {
  type: 'walker';
  walkerName: string;
  experience: string;
  availability: string[];
  preferences: string;
}

export type Listing = DogOwnerListing | DogWalkerListing;

export type ListingFormData = Omit<DogOwnerListing, 'id' | 'createdAt' | 'type'> | 
                            Omit<DogWalkerListing, 'id' | 'createdAt' | 'type'>;

export type TabType = 'owner' | 'walker';