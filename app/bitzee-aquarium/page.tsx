import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitzee Aquarium",
};

export default function BitzeeAquarium() {
  return (
    <iframe
      src="/bitzee-aquarium/index.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}
