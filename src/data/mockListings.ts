import { DogWalkingListing } from '../types';

export const mockListings: DogWalkingListing[] = [
  {
    id: '1',
    title: 'Golden Retriever Needs Afternoon Walk',
    description: 'Friendly Golden Retriever looking for a walking companion. Max is very social and loves other dogs.',
    location: 'Kadıköy, Istanbul',
    date: '2024-03-20',
    duration: 60,
    price: 150,
    ownerName: 'Ayşe Yılmaz',
    dogName: 'Max',
    dogBreed: 'Golden Retriever',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80',
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    title: 'Morning Walk for Energetic Husky',
    description: 'Luna needs a morning walk partner. She is full of energy and loves long walks.',
    location: 'Beşiktaş, Istanbul',
    date: '2024-03-21',
    duration: 45,
    price: 120,
    ownerName: 'Mehmet Demir',
    dogName: 'Luna',
    dogBreed: 'Siberian Husky',
    imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80',
    createdAt: '2024-03-16',
  },
];