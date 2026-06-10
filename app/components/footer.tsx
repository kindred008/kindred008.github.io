import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="bg-footer text-background min-h-32 w-full flex justify-center">
            <div className="flex flex-row w-full justify-around items-center p-2 max-w-[512px] max-[380px]:flex-col max-[380px]:gap-2">

                {/*Details*/}
                <div className="flex flex-col items-center gap-0 max-w-[250px]">
                    <p className="text-lg font-bold">Kara Preston</p>
                    <p className="text-sm text-background/70">
                        Hello! I am an experienced UK-based Software Engineer with 3 years of professional experience.
                    </p>
                </div>

                {/*Important links*/}
                <div className = "flex flex-col items-center gap-1">
                    <p className="text-lg font-bold">Find me at</p>
                    <div className="flex flex-row gap-2">
                        <a href="https://www.linkedin.com/in/kara-preston-3351b91ba/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon size="2x" icon={faLinkedin} />
                        </a>
                        <a href = "https://github.com/kindred008" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon size="2x" icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
