import EnhancedProfileHero from '@/components/features/EnhancedProfileHero';
import Enhanced3DProjectGallery from '@/components/features/Enhanced3DProjectGallery';
import Enhanced3DContactSection from '@/components/features/Enhanced3DContactSection';

export default function Home() {
  return (
    <>
      {/* Enhanced 3D Profile Hero Section */}
      <EnhancedProfileHero />

      {/* Enhanced 3D Project Gallery with Flip Cards */}
      <Enhanced3DProjectGallery />

      {/* Enhanced 3D Contact Section */}
      <Enhanced3DContactSection />
    </>
  );
}