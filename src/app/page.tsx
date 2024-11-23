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
import { SpecialisationDemo } from "@/components/Specialisatio";
// import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <Container>
      {/* <HeroScrollDemo/> */}

      <HeroSection/> 
      {/* <FloatingDockDemo/>  */}
      
      {/* <AnimatedPinDemo/>  */}
      {/* <FloatingDockDemo/>  */}
      
      <Research/>
      {/* <Research/> */}
      <AppleCardsCarouselDemo/>
      <BentoGridDemo/>
      <TabsDemo/>
      <SpecialisationDemo/>
      {/* <Products /> */}
      
      {/* <TechStack /> */}
      
    </Container>
  );
}
