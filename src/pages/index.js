import { Features } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="bg-white dark:bg-gray-900">
      <HeroSection />
      <Features />
      {/* <AppFooter /> */}
      <footer class="py-10 md:py-20">/</footer>
    </div>
  );
}
