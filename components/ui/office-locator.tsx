"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Search, MapPin, Phone, Mail, X } from "lucide-react";

// Office locations data with more detailed information
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

// Get unique countries and continents
const countries = Array.from(new Set(offices.map(office => office.country)));
const continents = Array.from(new Set(offices.map(office => office.continent)));


// Dynamic import with SSR disabled
const DynamicMap = dynamic(() => Promise.all([
  import("react-leaflet"),
  import("leaflet")
]).then(([reactLeaflet, leaflet]) => {
  const { MapContainer, TileLayer, Marker, Popup } = reactLeaflet;
  const L = leaflet.default;
  
  return function MapComponent({ selectedOffices, onOfficeClick }: { selectedOffices: typeof offices, onOfficeClick: (office: typeof offices[0]) => void }) {
    
    // Map pin marker icon using Lucide React
    const createMapPin = () => {
      return L.divIcon({
        className: "map-pin-marker",
        html: `
          <div style="
            width: 24px;
            height: 24px;
            color: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            border-radius: 50%;
          
          ">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" fill="#ffffff" cy="10" r="5"/>
            </svg>
          </div>
        `,
        iconSize: [150, 150],
        iconAnchor: [12, 12],
      });
    };

    useEffect(() => {
      // Fix for default markers in react-leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      // Add custom CSS for markers and map styling
      const style = document.createElement("style");
      style.textContent = `
        .map-pin-marker {
          background: transparent !important;
          border: none !important;
        }
        
        /* Grayscale map styling */
        .leaflet-tile-pane {
          filter: grayscale(100%) contrast(1.2) brightness(1.1);
        }
        
        /* Hide unnecessary map elements */
        .leaflet-control-container .leaflet-top.leaflet-left {
          display: none;
        }
        
        /* Custom zoom controls styling */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }
        
        .leaflet-control-zoom a {
          background-color: white !important;
          color: #333 !important;
          border: 1px solid #ddd !important;
          font-weight: bold !important;
        }
        
        .leaflet-control-zoom a:hover {
          background-color: #f5f5f5 !important;
        }
        
        /* Hide attribution */
        .leaflet-control-attribution {
          display: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }, []);

    return (
      <div className="w-full h-full">
        <MapContainer
          center={[20, 0]} // Center to show all countries
          zoom={2} // Zoom out to show all countries
          style={{ height: "100%", width: "100%" }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {selectedOffices.map((office) => (
            <Marker
              key={office.id}
              position={office.position}
              icon={createMapPin()}
              eventHandlers={{
                click: () => onOfficeClick(office)
              }}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[250px]">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {office.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500">📍</span>
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">📞</span>
                      <span className="text-gray-700">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">✉️</span>
                      <span className="text-gray-700">{office.email}</span>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  };
}), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});

export default function OfficeLocator() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>('Singapore');
  const [selectedContinent, setSelectedContinent] = useState<string | null>('Asia');
  const [selectedOffice, setSelectedOffice] = useState<typeof offices[0] | null>(null);
  const [filteredOffices, setFilteredOffices] = useState(offices);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let filtered = offices;

    // Apply search filter first
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

    // Apply country filter (takes priority)
    if (selectedCountry) {
      filtered = filtered.filter(office => office.country === selectedCountry);
    }
    // Apply continent filter only if no country is selected
    else if (selectedContinent) {
      filtered = filtered.filter(office => office.continent === selectedContinent);
    }

    setFilteredOffices(filtered);
  }, [searchTerm, selectedCountry, selectedContinent]);

  const handleOfficeClick = (office: typeof offices[0]) => {
    setSelectedOffice(office);
  };

  const closeOfficeDetails = () => {
    setSelectedOffice(null);
  };

  const handleCountrySelect = (country: string) => {
    console.log('Country clicked:', country, 'Current selected:', selectedCountry);
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
      setSelectedContinent(null); // Clear continent when country is selected
    }
  };

  const handleContinentSelect = (continent: string) => {
    console.log('Continent clicked:', continent, 'Current selected:', selectedContinent);
    if (selectedContinent === continent) {
      setSelectedContinent(null);
    } else {
      setSelectedContinent(continent);
      setSelectedCountry(null); // Clear country when continent is selected
    }
  };

  if (!isClient) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading office locator...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex h-full">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partner Locations</h2>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Enter city for a location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500"
              />
              <div className="absolute right-0 top-2.5 flex items-center space-x-1">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="w-4 h-4 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Continents with Countries Dropdown */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Locations</h3>
                <span className="text-xs text-gray-500">{filteredOffices.length} office{filteredOffices.length !== 1 ? 's' : ''} found</span>
              </div>
              
            
              
              {continents.map((continent) => {
                const continentOffices = offices.filter(office => office.continent === continent);
                const continentCountries = Array.from(new Set(continentOffices.map(office => office.country)));
                const isExpanded = selectedContinent === continent;
                
                return (
                  <div key={continent} className="mb-2">
                    {/* Continent Header */}
                    <button
                      onClick={() => handleContinentSelect(continent)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                        selectedContinent === continent 
                          ? 'bg-blue-200 text-blue-800 font-semibold border border-blue-300' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{continent}</span>
                      <span className="text-xs text-gray-500">({continentOffices.length})</span>
                    </button>
                    
                    {/* Countries Dropdown */}
                    {isExpanded && (
                      <div className="ml-4 mt-1 space-y-1">
                        {continentCountries.map((country) => {
                          const countryOffices = continentOffices.filter(office => office.country === country);
                          return (
                            <button
                              key={country}
                              onClick={() => handleCountrySelect(country)}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                                selectedCountry === country 
                                  ? 'bg-green-200 text-green-800 font-semibold border border-green-300' 
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              <span>{country}</span>
                              <span className="text-xs text-gray-500">({countryOffices.length})</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Office Details */}
            {selectedOffice && (
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Office Details</h3>
                  <button
                    onClick={closeOfficeDetails}
                    className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{selectedOffice.name}</p>
                      <p className="text-sm text-gray-600">{selectedOffice.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{selectedOffice.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{selectedOffice.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Map */}
        <div className="flex-1 relative">
          <DynamicMap 
            selectedOffices={filteredOffices} 
            onOfficeClick={handleOfficeClick}
          />
        </div>
      </div>
    </div>
  );
}