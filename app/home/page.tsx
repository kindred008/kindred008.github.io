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
          <StylisedButton text="About Me" link="#aboutme" />
          <StylisedButton text="Projects" link="#projects" />
        </div>

      </div>

    </div>
  );
}

interface StylisedButtonProps {
  text: string;
  link: string;
}

function StylisedButton(props: StylisedButtonProps) {
  const {text, link} = props;

  return (
    <Link 
      href={link} 
      className="bg-white text-black font-black uppercase italic px-8 py-3 text-sm tracking-widest hover:bg-red-600 hover:text-white transition-colors duration-150"
      style={{clipPath:"polygon(5% 0%, 100% 0, 95% 100%, 0% 100%)"}}
    >
      {text}
    </Link>
  )
}
