import LandingHero from "../components/LandingHero/LandingHero";
import { Inter } from "next/font/google";
import LandingPageContent from "../components/LandingPageContent/LandingPageContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <LandingHero />
      <LandingPageContent />
    </main>
  );
}
