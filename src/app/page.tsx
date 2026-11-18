import SpaceNav from '@/components/layout/SpaceNav';
import SpaceHero from '@/components/sections/SpaceHero';
import SpaceAbout from '@/components/sections/SpaceAbout';
import SpaceSingularity from '@/components/sections/SpaceSingularity';
import SpaceProjects from '@/components/sections/SpaceProjects';
import SpaceSkills from '@/components/sections/SpaceSkills';
import SpaceCerts from '@/components/sections/SpaceCerts';
import SpaceContact from '@/components/sections/SpaceContact';
import SpaceFooter from '@/components/layout/SpaceFooter';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-canvas text-primary overflow-x-hidden">
      <ScrollProgress />
      <SpaceNav />
      <SpaceHero />
      <SpaceAbout />
      <SpaceSingularity />
      <SpaceProjects />
      <SpaceSkills />
      <SpaceCerts />
      <SpaceContact />
      <SpaceFooter />
    </main>
  );
}
