import Link from "next/link";

export default function HomePage() {
  return (
    <div>
        <HeroSection />
        <div className = "bg-page h-80" />
    </div>
  );
}

function HeroSection() {
    return (
        <div className="flex h-[100vh] w-full bg-blue-200 items-center justify-center">
          <div className="flex flex-col items-center min-w-[512px]">
            <h1>Kara Preston</h1>
            <h2>Experienced Software Engineer and Game Programmer</h2>
            <div className="w-full border-t border-gray-400 my-4"></div>
            <div className="flex flex-row gap-4">
              <Link href="">About Me</Link>
              <Link href="">Projects</Link>
            </div>
          </div>
        </div>
    )
}
