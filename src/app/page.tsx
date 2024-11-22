import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { HeroScrollDemo } from "@/components/Scroll";
import {AnimatedPinDemo} from "@/components/Pin3d";
import HeroSection from "@/components/Hero";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingDockDemo } from "@/components/FloatingDemo";
// import { AboutIcon } from "@/components/AboutIcon";
import {BentoGridDemo} from "@/components/Education";
import { TabsDemo } from "@/components/Tabs";
import { Research } from "@/components/Research";
import {AppleCardsCarouselDemo} from "@/components/WorkEx";
// import { BentoGridDemo } from "@/components/Education";
import src1 from "@/public/images/about.webp";
export default function Home() {
  return (
    <Container>
      {/* <HeroScrollDemo/> */}

      <HeroSection/> 
      <Research/>
      {/* <AnimatedPinDemo/>  */}
      {/* <FloatingDockDemo/> */}
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
       Research Work
      </Heading>
      {/* <Research/> */}
      <AppleCardsCarouselDemo/>
      <BentoGridDemo/>
      <TabsDemo/>
      <BentoGridDemo/>
      <Products />
      
      <TechStack />
    </Container>
  );
}
