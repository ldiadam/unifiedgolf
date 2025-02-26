// components/CountryMap.tsx
import React, { useState, useEffect, useRef } from "react";
import locationData from "@/data/locationData.json";
import Image from "next/image";

interface CityArea {
  city: string;
  coords: string; // comma-separated coordinates for the area
  shape: "rect" | "circle" | "poly";
}

interface CountryMapConfig {
  [key: string]: {
    width: number;
    height: number;
    cities: CityArea[];
  };
}

// Map configurations with city coordinates
const mapConfigs: CountryMapConfig = {
  China: {
    width: 800,
    height: 600,
    cities: [
      // { city: "ChengDu", coords: "400,300,20", shape: "circle" },
      // { city: "ChongQing", coords: "420,320,20", shape: "circle" },
      // { city: "Hainan", coords: "450,500,20", shape: "circle" },
      { city: "Kunming", coords: "500,300,20", shape: "circle" },
      // { city: "Dali", coords: "360,380,20", shape: "circle" },
      // { city: "Lijiang", coords: "340,360,20", shape: "circle" },
      // { city: "Nanjing", coords: "500,250,20", shape: "circle" },
      // { city: "QingDao", coords: "520,220,20", shape: "circle" },
      // { city: "WeiHai", coords: "540,200,20", shape: "circle" },
      // { city: "Shanghai", coords: "520,260,20", shape: "circle" },
      // { city: "Shengzhen", coords: "480,480,20", shape: "circle" },
      // { city: "Xiamen", coords: "500,460,20", shape: "circle" },
      // { city: "XingXiang", coords: "460,300,20", shape: "circle" },
      // { city: "Xinjiang", coords: "300,200,20", shape: "circle" },
      // { city: "Inner Mongolia", coords: "320,180,20", shape: "circle" },
      // { city: "Heliongjiang", coords: "340,160,20", shape: "circle" },
      // { city: "Jilin", coords: "360,140,20", shape: "circle" },
      // { city: "Liaoning", coords: "380,120,20", shape: "circle" },
      // { city: "Shandong", coords: "400,100,20", shape: "circle" },
      // { city: "Shanxi", coords: "420,80,20", shape: "circle" },
      // { city: "Ningxia", coords: "440,60,20", shape: "circle" },
      // { city: "Hebei", coords: "460,40,20", shape: "circle" },
    ],
  },
  Cambodia: {
    width: 800,
    height: 600,
    cities: [
      { city: "Phom Penh", coords: "400,400,20", shape: "circle" },
      { city: "Siem Reap", coords: "250,200,20", shape: "circle" },
    ],
  },
  Indonesia: {
    width: 800,
    height: 600,
    cities: [
      { city: "Java", coords: "400,400,20", shape: "circle" },
      { city: "Bali", coords: "730,450,20", shape: "circle" },
      { city: "Surabaya", coords: "600,410,20", shape: "circle" },
      { city: "Batam", coords: "220,160,20", shape: "circle" },
      { city: "Bintan", coords: "100,160,20", shape: "circle" },
      { city: "Bogor", coords: "110,360,20", shape: "circle" },
      { city: "Jakarta", coords: "200,300,20", shape: "circle" },
      { city: "Bandung", coords: "260,380,20", shape: "circle" },
    ],
  },
  Japan: {
    width: 800,
    height: 600,
    cities: [
      { city: "Nara", coords: "200,360,20", shape: "circle" },
      { city: "Okinawa", coords: "100,460,20", shape: "circle" },
      { city: "Ciba", coords: "330,340,20", shape: "circle" },
      { city: "Osaka", coords: "300,370,20", shape: "circle" },
      { city: "Hokkaido", coords: "380,130,20", shape: "circle" },
    ],
  },
  Laos: {
    width: 800,
    height: 600,
    cities: [{ city: "Vientaine", coords: "400,215,20", shape: "circle" }],
  },
  Malaysia: {
    width: 800,
    height: 600,
    cities: [
      { city: "Johor", coords: "400,300,20", shape: "circle" },
      { city: "Meleka", coords: "420,320,20", shape: "circle" },
      { city: "Selangor", coords: "440,340,20", shape: "circle" },
      { city: "Ipoh", coords: "460,360,20", shape: "circle" },
      { city: "Sabah", coords: "480,380,20", shape: "circle" },
      { city: "Kuching", coords: "500,400,20", shape: "circle" },
      { city: "Penang", coords: "520,420,20", shape: "circle" },
      { city: "Langkawi", coords: "540,440,20", shape: "circle" },
    ],
  },
  Myanmar: {
    width: 800,
    height: 600,
    cities: [],
  },
  Philippines: {
    width: 800,
    height: 600,
    cities: [
      { city: "Makati", coords: "400,300,20", shape: "circle" },
      { city: "Manila", coords: "420,320,20", shape: "circle" },
      { city: "Cebu", coords: "440,340,20", shape: "circle" },
      { city: "Bagio", coords: "460,360,20", shape: "circle" },
      { city: "Iloilo", coords: "480,380,20", shape: "circle" },
    ],
  },
  Singapore: {
    width: 800,
    height: 600,
    cities: [],
  },
  Thailand: {
    width: 800,
    height: 600,
    cities: [
      { city: "Bangkok", coords: "400,350,20", shape: "circle" },
      { city: "Phuket", coords: "200,500,20", shape: "circle" },
      { city: "Chiang Mai", coords: "350,100,15", shape: "circle" },
      { city: "Hua Hin", coords: "420,370,20", shape: "circle" },
      { city: "Chengmai", coords: "440,390,20", shape: "circle" },
      { city: "Chengrai", coords: "460,410,20", shape: "circle" },
      { city: "Pataya", coords: "480,430,20", shape: "circle" },
    ],
  },
  Vietnam: {
    width: 800,
    height: 600,
    cities: [
      { city: "Hanoi", coords: "400,150,20", shape: "circle" },
      { city: "Ho Chi Minh", coords: "380,500,20", shape: "circle" },
      { city: "Danang", coords: "400,300,20", shape: "circle" },
      { city: "Nha Trang", coords: "420,320,20", shape: "circle" },
      { city: "Dalat", coords: "440,340,20", shape: "circle" },
    ],
  },
  Brunei: {
    width: 800,
    height: 600,
    cities: [{ city: "Brunei", coords: "400,300,20", shape: "circle" }],
  },
};

interface CountryMapProps {
  country: string | null;
  className?: string;
  onCityClick: (city: string) => void;
}

export default function CountryMap({
  country,
  className = "",
  onCityClick,
}: CountryMapProps) {
  const [imageError, setImageError] = useState(false);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const mapRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronize available cities with locationData
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

  // Calculate actual city positions based on the displayed image size
  const calculateActualPosition = (
    x: number,
    y: number,
    mapConfig: { width: number; height: number }
  ) => {
    if (!mapRef.current || !containerRef.current) return { x: 0, y: 0 };

    const imgRect = mapRef.current.getBoundingClientRect();
    const scaleX = imgRect.width / mapConfig.width;
    const scaleY = imgRect.height / mapConfig.height;

    return {
      x: x * scaleX,
      y: y * scaleY,
    };
  };

  if (!country) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <p className="text-gray-500">Select a country to view its map</p>
      </div>
    );
  }

  const mapConfig = mapConfigs[country];
  const mapPath = `/maps/${country.toLowerCase()}-map.jpg`;

  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <p className="text-gray-500">Map not available for {country}</p>
      </div>
    );
  }

  // Filter cities to only those that exist in locationData
  const validCities =
    mapConfig?.cities.filter((cityArea) =>
      availableCities.includes(cityArea.city)
    ) || [];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <img
        ref={mapRef}
        src={mapPath}
        alt={`Map of ${country}`}
        className="w-full h-full object-contain"
        // onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Clickable areas directly on top of the image */}
      {mapConfig && imageLoaded && !imageError && (
        <div className="absolute top-0 left-0 w-full h-full">
          {validCities.map((cityArea, index) => {
            // Parse coordinates based on shape
            if (cityArea.shape === "circle") {
              const [xStr, yStr, rStr] = cityArea.coords.split(",");
              const x = parseInt(xStr);
              const y = parseInt(yStr);
              const radius = parseInt(rStr);

              // Get the actual position based on the displayed image size
              const { x: actualX, y: actualY } = calculateActualPosition(
                x,
                y,
                mapConfig
              );
              const actualRadius =
                (radius *
                  (mapRef.current?.getBoundingClientRect().width || 0)) /
                mapConfig.width;

              return (
                <div
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${actualX}px`,
                    top: `${actualY}px`,
                    width: `${actualRadius * 2}px`,
                    height: `${actualRadius * 2}px`,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                  }}
                  onClick={() => onCityClick(cityArea.city)}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                    <div className="h-4 w-4  rounded-full shadow-md z-10" />
                    <span className="text-xs font-semibold mt-1 bg-primary px-1 py-0.5 rounded shadow-sm z-10">
                      {cityArea.city}
                    </span>
                  </div>
                </div>
              );
            } else if (cityArea.shape === "rect") {
              const [x1Str, y1Str, x2Str, y2Str] = cityArea.coords.split(",");
              const x1 = parseInt(x1Str);
              const y1 = parseInt(y1Str);
              const x2 = parseInt(x2Str);
              const y2 = parseInt(y2Str);

              // Get the actual positions based on the displayed image size
              const { x: actualX1, y: actualY1 } = calculateActualPosition(
                x1,
                y1,
                mapConfig
              );
              const { x: actualX2, y: actualY2 } = calculateActualPosition(
                x2,
                y2,
                mapConfig
              );

              return (
                <div
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${actualX1}px`,
                    top: `${actualY1}px`,
                    width: `${actualX2 - actualX1}px`,
                    height: `${actualY2 - actualY1}px`,
                  }}
                  onClick={() => onCityClick(cityArea.city)}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                    <div className="h-3 w-3 bg-green-500 rounded-full shadow-md group-hover:bg-green-600 z-10" />
                    <span className="text-xs font-medium mt-1 bg-primary px-1 py-0.5 rounded shadow-sm z-10">
                      {cityArea.city}
                    </span>
                  </div>
                </div>
              );
            }
            return null; // For poly, we'd need different visualization logic
          })}
        </div>
      )}

      {/* Debug info */}
      {/* {process.env.NODE_ENV !== "production" && (
        <div className="absolute bottom-0 left-0 bg-primary/80 p-1 text-xs">
          <div>Country: {country}</div>
          <div>Cities: {validCities.map((c) => c.city).join(", ")}</div>
          <div>Available in data: {availableCities.join(", ")}</div>
        </div>
      )} */}
    </div>
  );
}
