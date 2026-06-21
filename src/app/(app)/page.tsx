import Deployment from '@/components/home/deployment/deployment';
import Feature from '@/components/home/feature/feature';
import Footer from '@/components/home/footer/footer';
import Fullstack from '@/components/home/fullstack/fullstack';
import HeaderBanner from '@/components/home/header-banner/header-banner';
import NavBar from '@/components/home/nav-bar/nav-bar';
import Performance from '@/components/home/performance/performance';

export default function AppPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HeaderBanner />
        <Feature />
        <Fullstack />
        <Performance />
        <Deployment />
      </main>
      <Footer />
    </>
  );
}
