import Link from "next/link";

export interface StylisedButtonProps {
  text: string;
  link: string;
}

export function StylisedButton(props: StylisedButtonProps) {
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