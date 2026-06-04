
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
        <div className="h-[100vh] w-full bg-blue-400"></div>
    )
}
