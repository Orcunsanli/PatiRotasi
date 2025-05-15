import React, { useState } from 'react';
import { ListingFormData, TabType } from '../types';
import { ImageUpload } from './ImageUpload';

interface CreateListingFormProps {
  type: TabType;
  onSubmit: (data: ListingFormData & { type: TabType }) => void;
}

export function CreateListingForm({ type, onSubmit }: CreateListingFormProps) {
  const [formData, setFormData] = useState<any>({
    title: '',
    description: '',
    location: '',
    price: 0,
    imageUrl: '',
    ...(type === 'owner'
      ? {
          dogName: '',
          dogBreed: '',
          date: '',
          duration: 30,
          ownerName: '',
        }
      : {
          walkerName: '',
          experience: '',
          availability: [],
          preferences: '',
        }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, type });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageSelect = (imageUrl: string) => {
    setFormData(prev => ({
      ...prev,
      imageUrl,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fotoğraf</label>
          <div className="mt-1">
            <ImageUpload onImageSelect={handleImageSelect} />
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Başlık
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Açıklama
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {type === 'owner' ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dogName" className="block text-sm font-medium text-gray-700">
                  Köpeğin Adı
                </label>
                <input
                  type="text"
                  id="dogName"
                  name="dogName"
                  value={formData.dogName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="dogBreed" className="block text-sm font-medium text-gray-700">
                  Köpeğin Cinsi
                </label>
                <input
                  type="text"
                  id="dogBreed"
                  name="dogBreed"
                  value={formData.dogBreed}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Tarih
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Süre (dakika)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  min="15"
                  step="15"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="walkerName" className="block text-sm font-medium text-gray-700">
                Adınız
              </label>
              <input
                type="text"
                id="walkerName"
                name="walkerName"
                value={formData.walkerName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Deneyim
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Konum
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Ücret (TL)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        İlan Oluştur
      </button>
    </form>
  );
}