import SpaceNav from '@/components/layout/SpaceNav';
import SpaceHero from '@/components/sections/SpaceHero';
import SpaceAbout from '@/components/sections/SpaceAbout';
import SpaceProjects from '@/components/sections/SpaceProjects';
import SpaceSkills from '@/components/sections/SpaceSkills';
import SpaceCerts from '@/components/sections/SpaceCerts';
import SpaceContact from '@/components/sections/SpaceContact';
import SpaceFooter from '@/components/layout/SpaceFooter';
import StarField from '@/components/ui/StarField';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-starlight overflow-hidden selection:bg-stellar-cyan/30 selection:text-starlight">
      {/* Deep Space Background Layer */}
      <StarField />
      
      {/* Interactive HUD Overlay Tools */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* Navigation */}
      <SpaceNav />
      
      {/* Deep Space Mission Sectors */}
      <SpaceHero />
      <SpaceAbout />
      <SpaceProjects />
      <SpaceSkills />
      <SpaceCerts />
      <SpaceContact />
      
      {/* Footer */}
      <SpaceFooter />
    </main>
  );
}
