import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitzee Aquarium",
  description: "Interview project for Hoopla Digital",
};

export default function BitzeeAquarium() {
  return (
    <iframe
      src="/bitzee-aquarium/index.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}
