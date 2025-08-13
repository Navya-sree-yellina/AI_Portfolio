import ProfileHero from '@/components/features/ProfileHero';
import ProjectShowcase from '@/components/features/ProjectShowcase';
import ContactSection from '@/components/features/ContactSection';

export default function Home() {
  return (
    <>
      {/* Profile Hero Section */}
      <ProfileHero />
      
      {/* Featured Projects Section */}
      <ProjectShowcase />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}