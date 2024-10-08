import { navLinks } from "./constants/myIndex";
import sunLight from "./assets/icons/sun-light.png";
import sunDark from "./assets/icons/sun-dark.png";
import moonLight from "./assets/icons/moon-light.png";
import moonDark from "./assets/icons/moon-dark.png";
import portfolioLogo from "./assets/images/portfolio-logo.png";
import hamburger from "./assets/icons/hamburger-menu.png";
import { useEffect } from "react";

function Nav() {
  /* for Animation */
  useEffect(() => {
    const observer2 = new IntersectionObserver((entries2) => {
      entries2.forEach((entry2) => {
        console.log(entry2);
        if (entry2.isIntersecting) {
          entry2.target.classList.add("showNav");
        } else {
          entry2.target.classList.remove("showNav");
        }
      });
    });
    const hiddenElements2 = document.querySelectorAll(".hideNav");
    hiddenElements2.forEach((el2) => observer2.observe(el2));
  });

  return (
    <header className="hideNav px-8 py-4 top-0 z-10 w-full bg-background sm:px-14">
      <nav className="flex justify-between items-center w-full">
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" />
        </div>

        <div className="max-lg:ml-16">
          <img src={portfolioLogo} alt="My Logo" />
        </div>

        <ul className="flex-1 flex justify-center items-center gap-16 mr-28 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-center font-josefin leading-normal text-lg text-headline transition hover:text-button
                    transform hover:scale-110 duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="buttonContact max-lg:hidden">Contact Me</button>

        <input className="ml-4" type="checkbox" id="darkmode-toggle" />

        <label
          className=" transform hover:scale-110 transition duration-300"
          htmlFor="darkmode-toggle"
        >
          <img className="sunlight" src={sunLight} alt="sun image" />
          <img className="sundark" src={sunDark} alt="sun image" />
          <img className="moonlight" src={moonLight} alt="sun image" />
          <img className="moondark" src={moonDark} alt="sun image" />
        </label>
      </nav>
    </header>
  );
}

export default Nav;
