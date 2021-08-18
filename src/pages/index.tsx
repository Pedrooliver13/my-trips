import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function Home() {
  const place = [
    {
      id: 1,
      name: 'nota pontiguá',
      slug: 'pontiguá',
      location: {
        latitude: 129,
        longitude: -50
      }
    }
  ];

  return <Map places={place} />;
}
