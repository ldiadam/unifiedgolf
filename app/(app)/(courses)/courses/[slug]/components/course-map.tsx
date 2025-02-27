"use client";
// components/CourseMap.tsx
import React, { useState, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

// We need to handle mapboxgl import differently for Next.js to avoid SSR issues
interface MapboxGl {
  Map: any;
  NavigationControl: any;
  Marker: any;
}

interface Course {
  id: number;
  name: string;
  city: string;
  coordinates?: [number, number];
}

interface CourseMapProps {
  country: string | null;
  courses: Course[];
  selectedCourseId: number | null;
  className?: string;
  onCourseClick: (courseId: number) => void;
}

// Country center coordinates and zoom levels
const countryCoordinates: Record<
  string,
  { center: [number, number]; zoom: number }
> = {
  China: { center: [104.195397, 35.86166], zoom: 4 },
  Cambodia: { center: [104.990963, 12.565679], zoom: 6 },
  Indonesia: { center: [108, -1.5], zoom: 4 },
  Japan: { center: [138.252924, 36.204824], zoom: 4 },
  Laos: { center: [102.495496, 19.85627], zoom: 5 },
  Malaysia: { center: [101.975766, 4.210484], zoom: 5 },
  Myanmar: { center: [95.956223, 21.913965], zoom: 5 },
  Philippines: { center: [121.774017, 12.879721], zoom: 5 },
  Singapore: { center: [103.819836, 1.352083], zoom: 10 },
  Thailand: { center: [100.992541, 15.870032], zoom: 5 },
  Vietnam: { center: [108.277199, 14.058324], zoom: 5 },
  Brunei: { center: [114.727669, 4.535277], zoom: 7 },
};

export default function CourseMap({
  country,
  courses,
  selectedCourseId,
  className = "",
  onCourseClick,
}: CourseMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
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
        style: "mapbox://styles/mapbox/streets-v12",
        center: coordinates.center,
        zoom: coordinates.zoom,
        attributionControl: true,
        preserveDrawingBuffer: true,
      });

      newMap.on("load", () => {
        setMap(newMap);
        setIsLoading(false);
        console.log("Map loaded successfully");

        // Add markers after the map is fully loaded
        addMarkersToMap(newMap);
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
  const addMarkersToMap = (mapInstance: any) => {
    if (!mapboxgl || !mapInstance) return;

    clearMarkers();

    // Add markers for each course with coordinates
    courses.forEach((course) => {
      if (course.coordinates) {
        // Create custom marker element
        const markerElement = document.createElement("div");
        markerElement.className = "cursor-pointer";
        markerElement.style.display = "flex";
        markerElement.style.flexDirection = "column";
        markerElement.style.alignItems = "center";

        const pin = document.createElement("div");
        pin.style.width = "12px";
        pin.style.height = "12px";
        pin.style.backgroundColor = "#ea580c"; // Red if selected, orange otherwise
        // pin.style.backgroundColor =
        //   course.id === selectedCourseId ? "#ef4444" : "#ea580c"; // Red if selected, orange otherwise
        pin.style.borderRadius = "50%";
        pin.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";

        // Add a pulse effect if selected
        if (course.id === selectedCourseId) {
          pin.style.animation = "pulse 1.5s infinite";
          // Add the CSS animation
          const style = document.createElement("style");
          style.innerHTML = `
            @keyframes pulse {
              0% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.5); opacity: 0.7; }
              100% { transform: scale(1); opacity: 1; }
            }
          `;
          document.head.appendChild(style);
        }

        const label = document.createElement("span");
        label.style.fontSize = "10px";
        label.style.fontWeight = "600";
        label.style.marginTop = "4px";
        // label.style.backgroundColor =
        //   course.id === selectedCourseId ? "#ef4444" : "#ea580c";
        label.style.backgroundColor = "#ea580c";
        label.style.color = "white";
        label.style.padding = "1px 4px";
        label.style.borderRadius = "2px";
        label.style.whiteSpace = "nowrap";
        label.textContent = course.name;

        markerElement.appendChild(pin);
        markerElement.appendChild(label);

        // Create and add the marker
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat(course.coordinates)
          .addTo(mapInstance);

        // Add click event to the marker
        markerElement.addEventListener("click", () => {
          onCourseClick(course.id);
        });

        // Store the marker reference for later cleanup
        markersRef.current.push(marker);
      }
    });
  };

  // Update markers when courses or selection changes
  useEffect(() => {
    if (map) {
      addMarkersToMap(map);
    }
  }, [courses, selectedCourseId, map]);

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

    // Re-add markers
    addMarkersToMap(map);
  }, [country, map]);

  // Focus on selected course
  useEffect(() => {
    if (!map || !selectedCourseId) return;

    const selectedCourse = courses.find((c) => c.id === selectedCourseId);
    if (selectedCourse?.coordinates) {
      map.flyTo({
        center: selectedCourse.coordinates,
        zoom: 10,
        essential: true,
        duration: 1000,
      });
    }
  }, [selectedCourseId, map, courses]);

  // Add window resize handler to fix map container issue
  useEffect(() => {
    const handleResize = () => {
      if (map) {
        map.resize();
      }
    };

    window.addEventListener("resize", handleResize);
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
            <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-sm text-gray-600">Loading map...</p>
          </div>
        </div>
      )}

      {!isLoading && courses.length === 0 && (
        <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs z-10">
          No course data available for {country}
        </div>
      )}
    </div>
  );
}
