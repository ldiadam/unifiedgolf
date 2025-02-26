"use client";
// components/CountryMap.tsx
import React, { useState, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import locationData from "@/data/locationData.json";

// We need to handle mapboxgl import differently for Next.js to avoid SSR issues
interface MapboxGl {
  Map: any;
  NavigationControl: any;
  Marker: any;
}

interface CountryMapProps {
  country: string | null;
  className?: string;
  onCityClick: (city: string) => void;
}

// Country center coordinates and zoom levels
const countryCoordinates: Record<
  string,
  { center: [number, number]; zoom: number }
> = {
  China: { center: [104.195397, 35.86166], zoom: 2 },
  Cambodia: { center: [104.990963, 12.565679], zoom: 4 },
  Indonesia: { center: [108, -1.5], zoom: 3 },
  Japan: { center: [138.252924, 36.204824], zoom: 3 },
  Laos: { center: [102.495496, 19.85627], zoom: 3 },
  Malaysia: { center: [101.975766, 4.210484], zoom: 3 },
  Myanmar: { center: [95.956223, 21.913965], zoom: 3 },
  Philippines: { center: [121.774017, 12.879721], zoom: 3 },
  Singapore: { center: [103.819836, 1.352083], zoom: 3 },
  Thailand: { center: [100.992541, 15.870032], zoom: 3 },
  Vietnam: { center: [108.277199, 14.058324], zoom: 3 },
  Brunei: { center: [114.727669, 4.535277], zoom: 3 },
};

// City coordinates database
const cityCoordinates: Record<string, Record<string, [number, number]>> = {
  China: {
    ChengDu: [104.0668, 30.5728],
    ChongQing: [106.5528, 29.5628],
    Hainan: [109.8537, 19.2377],
    Kunming: [102.8329, 25.0389],
    Dali: [100.2676, 25.6064],
    Lijiang: [100.233, 26.8723],
    Nanjing: [118.7969, 32.0603],
    QingDao: [120.3826, 36.0671],
    WeiHai: [122.1155, 37.5128],
    Shanghai: [121.4737, 31.2304],
    Shengzhen: [114.0579, 22.5431],
    Xiamen: [118.0894, 24.4798],
    XingXiang: [113.8053, 35.3072],
    Xinjiang: [87.6271, 43.7886],
    "Inner Mongolia": [111.7656, 40.8142],
    Heliongjiang: [126.6424, 45.7581],
    Jilin: [126.5495, 43.8383],
    Liaoning: [123.4292, 41.8357],
    Shandong: [117.0207, 36.6513],
    Shanxi: [112.5755, 37.8706],
    Ningxia: [106.2582, 38.4681],
    Hebei: [115.4995, 38.0428],
  },
  Cambodia: {
    "Phom Penh": [104.9282, 11.5564],
    "Siem Reap": [103.856, 13.3633],
  },
  Indonesia: {
    Java: [110.0045, -7.4917],
    Bali: [115.1889, -8.4095],
    Surabaya: [112.752, -7.2575],
    Batam: [104.03, 1.1301],
    Bintan: [104.52, 1.0678],
    Bogor: [106.806, -6.5971],
    Jakarta: [106.8456, -6.2088],
    Bandung: [107.6138, -6.9175],
  },
  Japan: {
    Nara: [135.8048, 34.6851],
    Okinawa: [127.6791, 26.2124],
    Ciba: [140.1063, 35.6074],
    Osaka: [135.5023, 34.6937],
    Hokkaido: [142.7949, 43.2203],
  },
  Laos: {
    Vientaine: [102.6331, 17.9757],
  },
  Malaysia: {
    Johor: [103.7618, 1.4927],
    Meleka: [102.2501, 2.1896],
    Selangor: [101.5183, 3.0738],
    Ipoh: [101.0901, 4.5975],
    Sabah: [116.0753, 5.9804],
    Kuching: [110.3593, 1.5497],
    Penang: [100.3288, 5.4164],
    Langkawi: [99.8432, 6.35],
  },
  Myanmar: {
    Yangon: [96.1951, 16.8661],
    Mandalay: [96.0836, 21.9588],
    Naypyidaw: [96.1292, 19.7633],
    Bagan: [94.8585, 21.1717],
  },
  Philippines: {
    Makati: [121.0244, 14.5547],
    Manila: [120.9842, 14.5995],
    Cebu: [123.8854, 10.3157],
    Bagio: [120.596, 16.4023],
    Iloilo: [122.5644, 10.7202],
  },
  Singapore: {
    Singapore: [103.8198, 1.3521],
  },
  Thailand: {
    Bangkok: [100.5018, 13.7563],
    "Hua Hin": [99.9576, 12.5684],
    Chengmai: [98.9853, 18.7961],
    Chengrai: [99.8325, 19.9104],
    Phuket: [98.3923, 7.9519],
    Pataya: [100.8764, 12.9236],
  },
  Vietnam: {
    Hanoi: [105.8342, 21.0278],
    "Ho Chi Min": [106.702, 10.78], // Corrected coordinates for Ho Chi Minh City
    "Nha Trang": [109.1967, 12.2388],
    Dalat: [108.4583, 11.9404],
    Danang: [108.2022, 16.0544],
  },
  Brunei: {
    Brunei: [114.9398, 4.9031],
  },
  // Other countries...
  // Add missing coordinates for all cities in locationData.json
};

// Fill in any missing coordinates with dummy values to prevent errors
locationData.forEach((location) => {
  if (!cityCoordinates[location.country]) {
    cityCoordinates[location.country] = {};
  }

  location.city.forEach((city) => {
    if (!cityCoordinates[location.country][city]) {
      // If we don't have coordinates, use the country center (slightly offset to avoid overlap)
      const countryCenter = countryCoordinates[location.country]?.center || [
        0, 0,
      ];
      const randomOffset = [
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ];
      cityCoordinates[location.country][city] = [
        countryCenter[0] + randomOffset[0],
        countryCenter[1] + randomOffset[1],
      ];
    }
  });
});

export default function CountryMap({
  country,
  className = "",
  onCityClick,
}: CountryMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const markersRef = useRef<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapboxgl, setMapboxgl] = useState<MapboxGl | null>(null);

  // Load mapboxgl dynamically on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("mapbox-gl")
        .then((mapboxModule) => {
          // Set the access token
          mapboxModule.default.accessToken =
            "pk.eyJ1IjoibGRpYWRhbSIsImEiOiJjancxaHZsaGMwazNwNDNtcDZyMTQwM2o5In0.oqd_kF8J4o22yRzKuYHoIg";
          setMapboxgl(mapboxModule);
        })
        .catch((err) => {
          console.error("Failed to load mapbox-gl:", err);
          setError(
            "Failed to load map library. Please check your network connection."
          );
          setIsLoading(false);
        });
    }
  }, []);

  // Update available cities when country changes
  useEffect(() => {
    if (!country) return;

    const countryData = locationData.find(
      (location) => location.country === country
    );

    if (countryData && countryData.city) {
      setAvailableCities(countryData.city);
    } else {
      setAvailableCities([]);
    }
  }, [country]);

  // Initialize the map once mapboxgl is loaded
  useEffect(() => {
    if (!mapboxgl || !mapContainer.current || !country || map) return;

    try {
      // Make sure the container has dimensions before initializing the map
      if (
        mapContainer.current.offsetWidth === 0 ||
        mapContainer.current.offsetHeight === 0
      ) {
        console.warn(
          "Map container has zero width or height. Map cannot initialize properly."
        );
        return;
      }

      const coordinates = countryCoordinates[country] || {
        center: [0, 0],
        zoom: 1,
      };

      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12", // Try a different style
        center: coordinates.center,
        zoom: coordinates.zoom,
        attributionControl: true,
        preserveDrawingBuffer: true, // Helps with some rendering issues
      });

      newMap.on("load", () => {
        setMap(newMap);
        setIsLoading(false);
        console.log("Map loaded successfully");

        // Add markers after the map is fully loaded
        addMarkersToMap(newMap, country);
      });

      newMap.on("error", (e: any) => {
        console.error("Mapbox error:", e);
        setError(`Map error: ${e.error?.message || "Unknown error"}`);
        setIsLoading(false);
      });

      // Add controls
      newMap.addControl(new mapboxgl.NavigationControl(), "top-right");
    } catch (err) {
      console.error("Error initializing map:", err);
      setError(
        "Failed to initialize map. Please refresh the page and try again."
      );
      setIsLoading(false);
    }

    return () => {
      clearMarkers();
      if (map) {
        map.remove();
        setMap(null);
      }
    };
  }, [mapboxgl, country]);

  // Clear existing markers
  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
  };

  // Add markers to map
  const addMarkersToMap = (mapInstance: any, selectedCountry: string) => {
    if (!mapboxgl || !mapInstance) return;

    clearMarkers();

    // Get city coordinates for the current country
    const citiesForCountry = cityCoordinates[selectedCountry] || {};

    // Add markers for available cities
    availableCities.forEach((cityName) => {
      const coords = citiesForCountry[cityName];

      if (coords) {
        // Create custom marker element
        const markerElement = document.createElement("div");
        markerElement.className = "cursor-pointer";
        markerElement.style.display = "flex";
        markerElement.style.flexDirection = "column";
        markerElement.style.alignItems = "center";

        const pin = document.createElement("div");
        pin.style.width = "12px";
        pin.style.height = "12px";
        pin.style.backgroundColor = "#3b82f6"; // Tailwind blue-500
        pin.style.borderRadius = "50%";
        pin.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";

        const label = document.createElement("span");
        label.style.fontSize = "10px";
        label.style.fontWeight = "600";
        label.style.marginTop = "4px";
        label.style.backgroundColor = "#3b82f6"; // Tailwind blue-500
        label.style.color = "white";
        label.style.padding = "1px 4px";
        label.style.borderRadius = "2px";
        label.style.whiteSpace = "nowrap";
        label.textContent = cityName;

        markerElement.appendChild(pin);
        markerElement.appendChild(label);

        // Create and add the marker
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(coords)
          .addTo(mapInstance);

        // Add click event to the marker
        markerElement.addEventListener("click", () => {
          onCityClick(cityName);
        });

        // Store the marker reference for later cleanup
        markersRef.current.push(marker);
      }
    });
  };

  // Update markers when available cities change
  useEffect(() => {
    if (map && country) {
      addMarkersToMap(map, country);
    }
  }, [availableCities, map]);

  // Handle country change when map is already initialized
  useEffect(() => {
    if (!map || !country) return;

    const coordinates = countryCoordinates[country] || {
      center: [0, 0],
      zoom: 1,
    };

    map.flyTo({
      center: coordinates.center,
      zoom: coordinates.zoom,
      essential: true,
      duration: 1500, // Smooth animation
    });

    // Re-add markers for the new country
    addMarkersToMap(map, country);
  }, [country, map]);

  // Add window resize handler to fix map container issue
  useEffect(() => {
    const handleResize = () => {
      if (map) {
        // Force map to update its size
        map.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    // Trigger resize after 100ms to ensure the map container has been properly laid out
    setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [map]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <p className="text-red-500 text-sm p-4">{error}</p>
      </div>
    );
  }

  if (!country) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <p className="text-gray-500">Select a country to view its map</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ minHeight: "400px" }}>
      <div
        ref={mapContainer}
        className="w-full h-full"
        style={{
          minHeight: "400px",
          height: "100%",
          width: "100%",
        }}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-10">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-sm text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {!isLoading && availableCities.length === 0 && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-10">
          No city data available for {country}
        </div>
      )}
    </div>
  );
}
