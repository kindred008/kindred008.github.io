import Link from "next/link";

export default function HomePage() {
  return (
    <div>
        <HeroSection />
        <div className = "bg-page h-80" />
    </div>
  );
}

function HeroSectionBasic() {
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
    );
}

function HeroSection() {
  return (
    <div className="relative flex h-[100vh] bg-black overflow-hidden items-center justify-center">

      {/*Diagonal Red Background Polygon*/}
      <div
        className="absolute left-0 top-0 w-[55%] h-full bg-red-700"
        style={{clipPath: "polygon(0 0, 100% 0, 78% 100%, 0% 100%)"}}
      />

      {/*Content*/}
      <div className="relative flex flex-col items-start w-full max-w-4xl px-12">

        {/*Eyebrow title*/}
        <div className="flex flex-row items-center gap-2">
          <span className="w-6 h-0.5 bg-white/70" />
          <p className="text-white/60 text-base font-bold italic uppercase tracking-wider">Portfolio</p>
        </div>

        {/*Title*/}
        <h1 className="text-[5.5rem] font-black italic uppercase text-white leading-[1] tracking-tight [text-shadow:6px_6px_0_rgba(0,0,0,0.4)]">
          Kara<br />Preston
        </h1>

        {/*Stylish indents*/}
        <div className="flex items-center gap-2 my-5">
            <div className="w-10 h-0.5 bg-white/70" />
            <div className="w-3 h-0.5 bg-white/50" />
            <div className="w-1.5 h-0.5 bg-white/30" />
        </div>

        {/*Professional Title*/}
        <h2 className="text-white/80 text-base font-bold italic uppercase tracking-tight">
          Software Engineer &amp; Game Programmer
        </h2>

        {/*Stylish indent*/}
        <div className="w-72 h-[1px] bg-white/70 my-5" />

        {/*Navigation Buttons*/}
        <div className="flex flex-row gap-2">
          <Link 
            href="" 
            className="bg-white text-black font-black uppercase italic px-8 py-3 text-sm tracking-widest hover:bg-red-600 hover:text-white transition-colors duration-150"
            style={{clipPath:"polygon(5% 0%, 100% 0, 95% 100%, 0% 100%)"}}
          >
            About Me
          </Link>
          <Link 
            href="" 
            className="bg-white text-black font-black uppercase italic px-8 py-3 text-sm tracking-widest hover:bg-red-600 hover:text-white transition-colors duration-150"
            style={{clipPath:"polygon(5% 0%, 100% 0, 95% 100%, 0% 100%)"}}
          >
            Projects
          </Link>
        </div>

      </div>

    </div>
  );
}
