import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const GlobePage = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.pointOfView({ altitude: 2.5 }, 4000);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={[
          { lat: 40.7128, lng: -74.0060, size: 1, color: 'red' }, // New York
          { lat: 48.8566, lng: 2.3522, size: 1, color: 'blue' },  // Paris
        ]}
        pointAltitude="size"
        pointColor="color"
      />
    </div>
  );
};

export default GlobePage;
