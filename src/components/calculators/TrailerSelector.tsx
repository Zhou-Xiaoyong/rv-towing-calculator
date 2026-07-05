/**
 * Trailer Selection Component
 * Allows users to select a trailer from the database or enter custom specs
 */

import React, { useState, useMemo } from 'react';
import { allTrailers, getTrailerBrands, getTrailersByBrand, searchTrailersByModel, TrailerDatabaseEntry } from '@/data/trailer-data';

interface TrailerSelectorProps {
  onTrailerSelect: (trailer: TrailerDatabaseEntry) => void;
  onCustomSpecs: (specs: {
    dryWeight: number;
    gvwr: number;
    hitchWeight: number;
    length: number;
    type: 'travel-trailer' | 'fifth-wheel';
  }) => void;
  selectedTrailerId?: string;
}

type SelectionMode = 'database' | 'custom';

export default function TrailerSelector({ onTrailerSelect, onCustomSpecs, selectedTrailerId }: TrailerSelectorProps) {
  const [mode, setMode] = useState<SelectionMode>('database');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedTrim, setSelectedTrim] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customSpecs, setCustomSpecs] = useState({
    dryWeight: 0,
    gvwr: 0,
    hitchWeight: 0,
    length: 0,
    type: 'travel-trailer' as 'travel-trailer' | 'fifth-wheel',
  });

  const brands = useMemo(() => getTrailerBrands(), []);
  
  const models = useMemo(() => {
    if (!selectedBrand) return [];
    return [...new Set(
      allTrailers
        .filter(t => t.brand === selectedBrand)
        .map(t => t.model)
    )];
  }, [selectedBrand]);

  const trims = useMemo(() => {
    if (!selectedBrand || !selectedModel) return [];
    return allTrailers.filter(
      t => t.brand === selectedBrand && t.model === selectedModel
    );
  }, [selectedBrand, selectedModel]);

  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    return searchTrailersByModel(searchQuery).slice(0, 10);
  }, [searchQuery]);

  const handleTrailerSelect = (trailer: TrailerDatabaseEntry) => {
    onTrailerSelect(trailer);
  };

  const handleCustomSpecsSubmit = () => {
    onCustomSpecs(customSpecs);
  };

  return (
    <div className="space-y-4">
      {/* Mode Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('database')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'database'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Select from Database
        </button>
        <button
          onClick={() => setMode('custom')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === 'custom'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Enter Custom Specs
        </button>
      </div>

      {mode === 'database' ? (
        <div className="space-y-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quick Search
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, model, or trim (e.g. 'Airstream 27FB')"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-3 max-h-48 overflow-y-auto">
              <p className="text-sm font-medium text-blue-900 mb-2">Search Results:</p>
              <div className="space-y-1">
                {searchResults.map(trailer => (
                  <button
                    key={trailer.id}
                    onClick={() => handleTrailerSelect(trailer)}
                    className={`w-full text-left px-3 py-2 rounded hover:bg-blue-100 transition-colors ${
                      selectedTrailerId === trailer.id ? 'bg-blue-200 font-medium' : ''
                    }`}
                  >
                    <span className="text-sm">
                      {trailer.brand} {trailer.model} {trailer.trim} ({trailer.year}) - {trailer.dryWeight} lbs
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Brand → Model → Trim Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel('');
                  setSelectedTrim('');
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Brand</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => {
                  setSelectedModel(e.target.value);
                  setSelectedTrim('');
                }}
                disabled={!selectedBrand}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Select Model</option>
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* Trim / Floorplan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Floorplan / Trim
              </label>
              <select
                value={selectedTrim}
                onChange={(e) => {
                  const trailer = trims.find(t => t.id === e.target.value);
                  if (trailer) handleTrailerSelect(trailer);
                }}
                disabled={!selectedModel}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Select Floorplan</option>
                {trims.map(trailer => (
                  <option key={trailer.id} value={trailer.id}>
                    {trailer.trim} ({trailer.year}) - {trailer.dryWeight} lbs
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected Trailer Info */}
          {selectedTrailerId && (
            <TrailerInfoCard trailerId={selectedTrailerId} />
          )}
        </div>
      ) : (
        /* Custom Specs Mode */
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trailer Type
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="trailerType"
                  checked={customSpecs.type === 'travel-trailer'}
                  onChange={() => setCustomSpecs({ ...customSpecs, type: 'travel-trailer' })}
                  className="text-blue-600"
                />
                <span className="text-sm">Travel Trailer</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="trailerType"
                  checked={customSpecs.type === 'fifth-wheel'}
                  onChange={() => setCustomSpecs({ ...customSpecs, type: 'fifth-wheel' })}
                  className="text-blue-600"
                />
                <span className="text-sm">Fifth Wheel</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dry Weight (lbs)
              </label>
              <input
                type="number"
                value={customSpecs.dryWeight || ''}
                onChange={(e) => setCustomSpecs({ ...customSpecs, dryWeight: Number(e.target.value) })}
                placeholder="e.g. 6500"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GVWR (lbs)
              </label>
              <input
                type="number"
                value={customSpecs.gvwr || ''}
                onChange={(e) => setCustomSpecs({ ...customSpecs, gvwr: Number(e.target.value) })}
                placeholder="e.g. 8500"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {customSpecs.type === 'fifth-wheel' ? 'Pin Weight' : 'Hitch Weight'} (lbs)
              </label>
              <input
                type="number"
                value={customSpecs.hitchWeight || ''}
                onChange={(e) => setCustomSpecs({ ...customSpecs, hitchWeight: Number(e.target.value) })}
                placeholder={customSpecs.type === 'fifth-wheel' ? 'e.g. 1800' : 'e.g. 800'}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Length (ft)
              </label>
              <input
                type="number"
                value={customSpecs.length || ''}
                onChange={(e) => setCustomSpecs({ ...customSpecs, length: Number(e.target.value) })}
                placeholder="e.g. 30"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            onClick={handleCustomSpecsSubmit}
            disabled={!customSpecs.dryWeight || !customSpecs.gvwr}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Use Custom Specs
          </button>
        </div>
      )}
    </div>
  );
}

/* Trailer Info Card - shows selected trailer details */
function TrailerInfoCard({ trailerId }: { trailerId: string }) {
  const trailer = allTrailers.find(t => t.id === trailerId);
  
  if (!trailer) return null;

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-green-900">
          {trailer.brand} {trailer.model} {trailer.trim}
        </h4>
        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
          {trailer.type}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
        <div>
          <span className="text-green-700">Dry Weight:</span>
          <p className="font-medium">{trailer.dryWeight} lbs</p>
        </div>
        <div>
          <span className="text-green-700">GVWR:</span>
          <p className="font-medium">{trailer.gvwr} lbs</p>
        </div>
        <div>
          <span className="text-green-700">
            {trailer.type === 'fifth-wheel' ? 'Pin Weight:' : 'Hitch Weight:'}
          </span>
          <p className="font-medium">
            {trailer.pinWeight || trailer.hitchWeight} lbs
          </p>
        </div>
        <div>
          <span className="text-green-700">Length:</span>
          <p className="font-medium">{trailer.length} ft</p>
        </div>
        <div>
          <span className="text-green-700">Sleeps:</span>
          <p className="font-medium">{trailer.sleepCapacity}</p>
        </div>
        <div>
          <span className="text-green-700">Fresh Water:</span>
          <p className="font-medium">{trailer.freshWater} gal</p>
        </div>
      </div>
      {trailer.verificationStatus === 'verified' && (
        <div className="mt-2 text-xs text-green-700">
          ✓ Data verified from {trailer.dataSource}
        </div>
      )}
    </div>
  );
}
