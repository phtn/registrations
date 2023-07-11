"use client";
import { Nav } from "../components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin-ext"],
});

export default function NextStepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Nav />
      {children}
    </section>
  );
}
