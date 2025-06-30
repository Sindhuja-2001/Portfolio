import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFileEarmarkArrowDown, BsFileEarmarkText } from "react-icons/bs";

const SocialMediaLinks = () => {
  const resumeURL = "/resume/ResumeSindhuja.pdf"; // This should be inside /public/resume

  const links = [
    {
      href: "https://www.linkedin.com/in/sindhuja08",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Sindhuja-2001",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: resumeURL,
      icon: <BsFileEarmarkText size={20} />,
      label: "View Resume",
    },
    {
      href: resumeURL,
      icon: <BsFileEarmarkArrowDown size={20} />,
      label: "Download Resume",
      download: true,
    },
  ];

  return (
    <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
      {links.map(({ href, icon, label, download }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
          className="text-yellow-400 hover:text-black bg-transparent border border-yellow-400 hover:bg-yellow-400 p-3 rounded-full transition duration-300"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
