import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="bg-footer text-background h-32 w-full flex justify-center">
            <div className="flex flex-row h-full w-full justify-around items-center max-w-[512px] p-2">
                <div className="flex flex-col items-center gap-0 max-w-[250px]">
                    <p className="text-lg font-bold">Kara Preston</p>
                    <p className="text-sm text-background/70">
                        Hello! I am an experienced UK-based Software Engineer with 3 years of professional experience.
                    </p>
                </div>
                <div className = "flex flex-col items-center gap-1">
                    <p className="text-lg font-bold">Find me at</p>
                    <div className="flex flex-row gap-2">
                        <a href="https://www.linkedin.com/in/kara-preston-3351b91ba/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className = "w-8 h-8" />
                        </a>
                        <a href = "https://github.com/kindred008" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className = "w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
