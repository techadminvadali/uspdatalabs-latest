// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import "leaflet/dist/leaflet.css";

// // Office locations data
// const offices = [
//   {
//     id: 1,
//     name: "Datalabs Singapore",
//     position: [1.3521, 103.8198] as [number, number],
//     address: "1 Marina Bay Sands, Singapore 018956",
//     phone: "+65 6123 4567",
//     email: "singapore@datalabs.com",
//     color: "#3B82F6", // Blue
//   },
//   {
//     id: 2,
//     name: "Datalabs UAE",
//     position: [25.2048, 55.2708] as [number, number],
//     address: "Sheikh Zayed Road, Dubai, UAE",
//     phone: "+971 4 123 4567",
//     email: "uae@datalabs.com",
//     color: "#10B981", // Green
//   },
//   {
//     id: 3,
//     name: "Datalabs Netherlands",
//     position: [52.3676, 4.9041] as [number, number],
//     address: "Damrak 1, 1012 LG Amsterdam, Netherlands",
//     phone: "+31 20 123 4567",
//     email: "netherlands@datalabs.com",
//     color: "#F59E0B", // Orange
//   },
// ];

// // Custom marker icon for Datalabs offices
// const createCustomIcon = (color: string) => {
//   return L.divIcon({
//     className: "custom-marker",
//     html: `
//       <div style="
//         background-color: ${color};
//         width: 30px;
//         height: 30px;
//         border-radius: 50% 50% 50% 0;
//         transform: rotate(-45deg);
//         border: 3px solid white;
//         box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       ">
//         <div style="
//           transform: rotate(45deg);
//           color: white;
//           font-weight: bold;
//           font-size: 12px;
//         ">DL</div>
//       </div>
//     `,
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//   });
// };

// // Map component that will be dynamically imported
// const MapComponent = () => {
//   useEffect(() => {
//     // Fix for default markers in react-leaflet
//     delete (L.Icon.Default.prototype as any)._getIconUrl;
//     L.Icon.Default.mergeOptions({
//       iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//       iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//       shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//     });

//     // Add custom CSS for markers
//     const style = document.createElement("style");
//     style.textContent = `
//       .custom-marker {
//         background: transparent !important;
//         border: none !important;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       if (document.head.contains(style)) {
//         document.head.removeChild(style);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
//       <div id="map" style={{ height: "100%", width: "100%" }}></div>
//     </div>
//   );
// };

// // Dynamic import with SSR disabled
// const DynamicMap = dynamic(() => import("react-leaflet").then((mod) => {
//   const { MapContainer, TileLayer, Marker, Popup } = mod;
  
//   return function MapComponent() {
//     useEffect(() => {
//       // Fix for default markers in react-leaflet
//       delete (L.Icon.Default.prototype as any)._getIconUrl;
//       L.Icon.Default.mergeOptions({
//         iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//         iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//         shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//       });

//       // Add custom CSS for markers
//       const style = document.createElement("style");
//       style.textContent = `
//         .custom-marker {
//           background: transparent !important;
//           border: none !important;
//         }
//       `;
//       document.head.appendChild(style);

//       return () => {
//         if (document.head.contains(style)) {
//           document.head.removeChild(style);
//         }
//       };
//     }, []);

//     return (
//       <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
//         <MapContainer
//           center={[25.2048, 55.2708]} // Center on UAE
//           zoom={4}
//           style={{ height: "100%", width: "100%" }}
//           className="z-0"
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
          
//           {offices.map((office) => (
//             <Marker
//               key={office.id}
//               position={office.position}
//               icon={createCustomIcon(office.color)}
//             >
//               <Popup className="custom-popup">
//                 <div className="p-2 min-w-[250px]">
//                   <h3 className="font-bold text-lg text-gray-800 mb-2">
//                     {office.name}
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex items-start space-x-2">
//                       <span className="text-gray-500">📍</span>
//                       <span className="text-gray-700">{office.address}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <span className="text-gray-500">📞</span>
//                       <span className="text-gray-700">{office.phone}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <span className="text-gray-500">✉️</span>
//                       <span className="text-gray-700">{office.email}</span>
//                     </div>
//                   </div>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     );
//   };
// }), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 flex items-center justify-center bg-gray-100">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
//         <p className="text-gray-600">Loading map...</p>
//       </div>
//     </div>
//   ),
// });

// export default function OfficeMap() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return (
//       <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading map...</p>
//         </div>
//       </div>
//     );
//   }

//   return <DynamicMap />;
// }