import React, { useState } from 'react';
import { PawPrint, Plus } from 'lucide-react';
import { Listing, ListingFormData, TabType } from './types';
import { ListingCard } from './components/ListingCard';
import { CreateListingForm } from './components/CreateListingForm';
import { TabSelector } from './components/TabSelector';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('owner');
  const [listings, setListings] = useState<Listing[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateListing = (formData: ListingFormData & { type: TabType }) => {
    const newListing: Listing = {
      ...formData,
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
    } as Listing;
    
    setListings(prev => [newListing, ...prev]);
    setShowCreateForm(false);
  };

  const filteredListings = listings.filter(listing => listing.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <PawPrint className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Pati Rotası</h1>
            </div>
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="w-5 h-5 mr-2" />
              Yeni İlan
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {showCreateForm && (
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {activeTab === 'owner' ? 'Köpek Gezdirme İlanı Oluştur' : 'Köpek Gezdiricisi İlanı Oluştur'}
            </h2>
            <CreateListingForm type={activeTab} onSubmit={handleCreateListing} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;