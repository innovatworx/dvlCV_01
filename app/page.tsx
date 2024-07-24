import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import Image from "next/image";
import { navItems } from "@/data";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { hero } from "@/hero/"

export default function Home() {
  return (
    <div>
      {/* <hero /> */}
      <AuroraBackgroundDemo />
    </div>
  );
}
