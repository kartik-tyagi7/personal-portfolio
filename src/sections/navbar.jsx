import { useEffect } from "react";
import { hamburger } from "../assets/icon";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("nav");
    const sticky = 500;
    console.log(top);
    function stickynavbar() {
      if (window.scrollY >= sticky) {
        navbar.classList.add("stickyy");
      } else {
        navbar.classList.remove("stickyy");
      }
    }
    window.addEventListener("scroll", stickynavbar);
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("drop-down-nav");
    const hamburger = document.getElementById("hamburger-icon");
    const navbarSection = document.getElementById("nav");

    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("visible");
      navbarSection.classList.toggle("dark-bg");
    });
  }, []);

  return (
    <header
      id="nav"
      className="padding-x py-4 absolute w-full z-10 bg-slate-200"
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          {/* <img src={headerLogo} alt="logo" height={40} width={40} /> */}
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiMwMDMwNDkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTUsNGMtMC41NTIyNiwwLjAwMDA2IC0wLjk5OTk0LDAuNDQ3NzQgLTEsMXY0MGMwLjAwMDA2LDAuNTUyMjYgMC40NDc3NCwwLjk5OTk0IDEsMWg0MGMwLjU1MjI2LC0wLjAwMDA2IDAuOTk5OTQsLTAuNDQ3NzQgMSwtMXYtMTguODMyMDNjMC4wMTc4NSwtMC4xMDc5OSAwLjAxNzg1LC0wLjIxODE4IDAsLTAuMzI2MTd2LTIwLjg0MThjLTAuMDAwMDYsLTAuNTUyMjYgLTAuNDQ3NzQsLTAuOTk5OTQgLTEsLTF6TTExLjUsMTAuNWg2djExLjVjLTAuMDAwMTMsMC4xOTg4MyAwLjExNzU1LDAuMzc4ODUgMC4yOTk3MywwLjQ1ODVjMC4xODIxOCwwLjA3OTY1IDAuMzk0MjQsMC4wNDM4IDAuNTQwMTEsLTAuMDkxMzFsMTIuODU1NDcsLTExLjg2NzE5aDguNTYwNTVjLTUuNzY2Niw1LjQ5Mjg2IC0xMi41NjA5MSwxMi4wNDc5NyAtMTMuODc1LDEzLjMxMDU1Yy0wLjE5MzQyLDAuMTg1NCAtMC4yMDYzMywwLjQ5MDMxIC0wLjAyOTMsMC42OTE0MWwwLjQzNzUsMC40OTgwNWgtMTQuNzg5MDZ6TTYsMjdoNC41djE0YzAuMDAwMDMsMC4yNzYxMyAwLjIyMzg3LDAuNDk5OTcgMC41LDAuNWg3YzAuMjc2MTMsLTAuMDAwMDMgMC40OTk5NywtMC4yMjM4NyAwLjUsLTAuNXYtOC43ODcxMWwyLjUxMzY3LC0yLjQxMjExbDkuNjAxNTYsMTEuNTE5NTNjMC4wOTUxOSwwLjExNDA4IDAuMjM2MTgsMC4xNzk5MyAwLjM4NDc3LDAuMTc5NjloMTBjMC4xOTYyNiwtMC4wMDAyNiAwLjM3NDIzLC0wLjExNTMyIDAuNDU1MDMsLTAuMjk0MThjMC4wODA4LC0wLjE3ODg2IDAuMDQ5NSwtMC4zODg0NSAtMC4wODAwMywtMC41MzU5bC0xMS45OTgwNSwtMTMuNjY5OTJoMTQuNjIzMDV2MTdoLTM4eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
          />
        </a>
        <ul className="flex flex-1 justify-end gap-16 max-lg:gap-6 max-md:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="nav-links-items">
              <a href={link.href} className="font-semibold font-montserrat">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-md:block" id="hamburger-icon">
          <img src={hamburger} alt="Hamburger" height={25} width={25} />
        </div>
      </nav>

      <div id="drop-down-nav" className="drop-down-nav">
        <ul className="flex gap-10 justify-center flex-wrap py-8">
          {navLinks.map((link) => (
            <li key={link.label} className="nav-links-items">
              <a href={link.href} className="font-semibold font-montserrat">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
