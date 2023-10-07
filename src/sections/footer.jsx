import { copyrightSign } from "../assets/icon";
import { footerLogo, headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-32 max-sm:gap-20 flex-wrap max-lg:flex-col pb-10">
        <div className="flec flex-col items-start">
          <a href="/">
            <img src={headerLogo} height={40} width={45} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Connect with me through various social media platforms such as
            Twitter, GitHub, and LinkedIn to stay updated and explore my
            professional journey and projects.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a href={icon.href} target="_blank">
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-20 gap-24 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <a href={link.link}>
                    <li
                      className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray"
                      key={link.name}
                    >
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All righ reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms and conditions</p>
      </div> */}



    </footer>
  );
};

export default Footer;
