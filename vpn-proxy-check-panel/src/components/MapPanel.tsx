import L from "leaflet";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import type { IpInfo } from "../types/checks";

type MapPanelProps = {
  ipInfo: IpInfo | null;
};

export function MapPanel({ ipInfo }: MapPanelProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) {
      return;
    }

    mapRef.current = L.map(mapElementRef.current, {
      attributionControl: false,
      zoomControl: false,
      scrollWheelZoom: false,
    }).setView([48.8566, 2.3522], 3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap",
    }).addTo(mapRef.current);

    L.control.zoom({ position: "bottomright" }).addTo(mapRef.current);

    const resizeObserver = new ResizeObserver(() => {
      mapRef.current?.invalidateSize();
    });
    resizeObserver.observe(mapElementRef.current);

    return () => {
      resizeObserver.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || ipInfo?.latitude == null || ipInfo.longitude == null) {
      return;
    }

    const position: L.LatLngExpression = [ipInfo.latitude, ipInfo.longitude];
    mapRef.current.invalidateSize();
    mapRef.current.setView(position, 12, { animate: true, duration: 0.6 });

    const markerIcon = L.divIcon({
      className: "pulse-marker",
      html: '<span class="pulse-marker-ring"></span><span class="pulse-marker-dot"></span>',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    if (!markerRef.current) {
      markerRef.current = L.marker(position, {
        icon: markerIcon,
        keyboard: false,
      }).addTo(mapRef.current);
    } else {
      markerRef.current.setIcon(markerIcon);
      markerRef.current.setLatLng(position);
    }

    window.requestAnimationFrame(() => {
      mapRef.current?.invalidateSize();
      mapRef.current?.panTo(position, { animate: true, duration: 0.35 });
    });
  }, [ipInfo]);

  return (
    <section className="map-panel" aria-label="Карта определения IP">
      <div className="panel-heading">
        <span className="icon-box" aria-hidden="true">
          <MapPin size={17} />
        </span>
        <div>
          <h2>Карта выхода</h2>
          <p>{ipInfo ? `${ipInfo.city}, ${ipInfo.country}` : "Ожидается геолокация"}</p>
        </div>
      </div>
      <div ref={mapElementRef} className="map-surface" />
    </section>
  );
}
