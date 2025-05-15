import React from 'react';
import { MapPin, Clock, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={listing.imageUrl || 'https://images.unsplash.com/photo-1544568100-847a948585b9'}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
        <p className="text-gray-600 mb-4">{listing.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{listing.location}</span>
          </div>
          
          {listing.type === 'owner' ? (
            <>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{listing.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{listing.duration} dakika</span>
              </div>
            </>
          ) : (
            <div className="flex items-center text-gray-600">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{listing.experience}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-2" />
            <span>{listing.price} TL</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          {listing.type === 'owner' ? (
            <p className="text-sm text-gray-600">
              {listing.dogName} • {listing.dogBreed}
              <br />
              <span className="text-gray-500">İlan Sahibi: {listing.ownerName}</span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Gezdiricinin Adı: {listing.walkerName}
              <br />
              <span className="text-gray-500">Müsait Günler: {listing.availability.join(', ')}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}