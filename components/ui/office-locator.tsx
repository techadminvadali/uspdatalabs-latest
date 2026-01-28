"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, Phone, Mail, X, ChevronDown, ChevronRight, Building2 } from "lucide-react";

// Office locations data
const offices = [
  {
    id: 1,
    name: "Datalabs",
    position: [1.3521, 103.8198] as [number, number],
    address: "1 Marina Bay Sands, Singapore 018956",
    phone: "+65 6123 4567",
    email: "contact@datalabs.com",
    country: "Singapore",
    city: "Singapore",
    continent: "Asia"
  },
  {
    id: 2,
    name: "Itconsulting",
    position: [25.2048, 55.2708] as [number, number],
    address: "Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "contact@itconsulting.ae",
    country: "United Arab Emirates",
    city: "Dubai",
    continent: "Asia"
  },
  {
    id: 3,
    name: "Fgsc Consulting",
    position: [52.3676, 4.9041] as [number, number],
    address: "Damrak 1, 1012 LG Amsterdam, Netherlands",
    phone: "+31 20 123 4567",
    email: "contact@fgscconsulting.com",
    country: "Netherlands",
    city: "Amsterdam",
    continent: "Europe"
  },
  {
    id: 4,
    name: "Datalabs Cambodia",
    position: [11.5564, 104.9282] as [number, number],
    address: "Phnom Penh, Cambodia",
    phone: "+855 23 123 456",
    email: "contact@datalabs.com.kh",
    country: "Cambodia",
    city: "Phnom Penh",
    continent: "Asia"
  },
  {
    id: 5,
    name: "Datalabs India",
    position: [28.6139, 77.2090] as [number, number],
    address: "New Delhi, India",
    phone: "+91 11 1234 5678",
    email: "contact@datalabs.in",
    country: "India",
    city: "New Delhi",
    continent: "Asia"
  },
];

// Get unique continents
const continents = Array.from(new Set(offices.map(office => office.continent)));

export default function OfficeLocator() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [expandedContinent, setExpandedContinent] = useState<string | null>("Asia");
  const [selectedOffice, setSelectedOffice] = useState<typeof offices[0] | null>(offices[0]);

  // Filter offices based on search and country
  const filteredOffices = useMemo(() => {
    let filtered = offices;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(office =>
        office.name.toLowerCase().includes(searchLower) ||
        office.city.toLowerCase().includes(searchLower) ||
        office.country.toLowerCase().includes(searchLower) ||
        office.address.toLowerCase().includes(searchLower) ||
        office.continent.toLowerCase().includes(searchLower)
      );
    }

    if (selectedCountry) {
      filtered = filtered.filter(office => office.country === selectedCountry);
    }

    return filtered;
  }, [searchTerm, selectedCountry]);

  // Generate Google Maps embed URL for selected office
  const mapUrl = useMemo(() => {
    if (selectedOffice) {
      const query = encodeURIComponent(selectedOffice.address);
      return `https://www.google.com/maps?q=${query}&output=embed`;
    }
    // Default world view
    return `https://www.google.com/maps?q=20,0&z=2&output=embed`;
  }, [selectedOffice]);

  const handleContinentToggle = (continent: string) => {
    setExpandedContinent(expandedContinent === continent ? null : continent);
  };

  const handleCountrySelect = (country: string) => {
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
      // Auto-select first office in this country
      const firstOffice = offices.find(o => o.country === country);
      if (firstOffice) setSelectedOffice(firstOffice);
    }
  };

  const handleOfficeSelect = (office: typeof offices[0]) => {
    setSelectedOffice(office);
  };

  return (
    <div className="w-full h-auto lg:h-[600px] bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 bg-neutral-50 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col max-h-[500px] lg:max-h-none">
          {/* Header */}
          <div className="p-4 lg:p-5 border-b border-neutral-200">
            <h2 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-3 lg:mb-4">Partner Locations</h2>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search city, country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Locations List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-3 lg:p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Regions</span>
                <span className="text-xs text-neutral-400">{filteredOffices.length} locations</span>
              </div>

              {continents.map((continent) => {
                const continentOffices = offices.filter(office => office.continent === continent);
                const continentCountries = Array.from(new Set(continentOffices.map(office => office.country)));
                const isExpanded = expandedContinent === continent;

                return (
                  <div key={continent} className="mb-1">
                    {/* Continent Header */}
                    <button
                      onClick={() => handleContinentToggle(continent)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isExpanded
                          ? "bg-blue-50 text-blue-700"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        <span>{continent}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isExpanded ? "bg-blue-100 text-blue-600" : "bg-neutral-200 text-neutral-500"
                      }`}>
                        {continentOffices.length}
                      </span>
                    </button>

                    {/* Countries & Offices Dropdown */}
                    {isExpanded && (
                      <div className="ml-4 mt-1 space-y-1">
                        {continentCountries.map((country) => {
                          const countryOffices = continentOffices.filter(office => office.country === country);
                          const isCountrySelected = selectedCountry === country;

                          return (
                            <div key={country}>
                              <button
                                onClick={() => handleCountrySelect(country)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                                  isCountrySelected
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-neutral-600 hover:bg-neutral-50"
                                }`}
                              >
                                <span className="text-left">{country}</span>
                                <span className={`text-xs ${isCountrySelected ? "text-green-500" : "text-neutral-400"}`}>
                                  ({countryOffices.length})
                                </span>
                              </button>

                              {/* Show offices under selected country */}
                              {isCountrySelected && (
                                <div className="ml-3 mt-1 space-y-1">
                                  {countryOffices.map((office) => (
                                    <button
                                      key={office.id}
                                      onClick={() => handleOfficeSelect(office)}
                                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-all ${
                                        selectedOffice?.id === office.id
                                          ? "bg-blue-100 text-blue-800 font-medium"
                                          : "text-neutral-500 hover:bg-neutral-50"
                                      }`}
                                    >
                                      <Building2 className="w-3 h-3 flex-shrink-0" />
                                      <span className="truncate text-left">{office.name}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Office Details */}
          {selectedOffice && (
            <div className="border-t border-neutral-200 bg-white p-3 lg:p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Office Details</h3>
                <button
                  onClick={() => setSelectedOffice(null)}
                  className="p-1 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-blue-50 rounded flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-neutral-900 text-sm">{selectedOffice.name}</p>
                    <p className="text-xs text-neutral-500 mt-0.5 break-words">{selectedOffice.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-green-50 rounded flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href={`tel:${selectedOffice.phone}`} className="text-sm text-neutral-600 hover:text-blue-600 transition-colors break-all">
                    {selectedOffice.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-purple-50 rounded flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${selectedOffice.email}`} className="text-sm text-neutral-600 hover:text-blue-600 transition-colors truncate">
                    {selectedOffice.email}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Map */}
        <div className="flex-1 relative bg-neutral-100 h-[400px] lg:h-auto">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="grayscale"
          />

          {/* Office markers overlay - shows clickable cards for all filtered offices */}
          <div className="absolute top-2 lg:top-4 right-2 lg:right-4 space-y-2 max-h-[calc(100%-1rem)] lg:max-h-[calc(100%-2rem)] overflow-y-auto">
            {filteredOffices.map((office) => (
              <button
                key={office.id}
                onClick={() => handleOfficeSelect(office)}
                className={`flex items-center gap-2 px-2 lg:px-3 py-1.5 lg:py-2 bg-white rounded-lg shadow-md border transition-all text-left ${
                  selectedOffice?.id === office.id
                    ? "border-blue-500 ring-2 ring-blue-100"
                    : "border-neutral-200 hover:border-neutral-300 hover:shadow-lg"
                }`}
              >
                <MapPin className={`w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0 ${
                  selectedOffice?.id === office.id ? "text-blue-600" : "text-neutral-400"
                }`} />
                <div className="min-w-0">
                  <p className={`text-xs lg:text-sm font-medium truncate ${
                    selectedOffice?.id === office.id ? "text-blue-700" : "text-neutral-700"
                  }`}>
                    {office.name}
                  </p>
                  <p className="text-xs text-neutral-400 truncate">{office.city}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}