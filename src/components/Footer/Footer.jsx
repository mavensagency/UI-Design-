import React from "react";
import { NavLink } from "react-router-dom";
import SubscribeCard from "./subCard";
import Divider from "./divider";
const Footer = () => {
  return (
    <footer className="bg-color-sky-blue text-white py-8 px-4">
      <div className="grid-container mx-auto">
        <div className="flex justify-between md:flex-row flex-col gap-10">
          <div className="flex justify-around md:justify-between md:w-[36%] w-full">
          <div className="information flex flex-col gap-5">
            <div><h2 className="text-white font-medium text-xl">Information</h2></div>
            <ul className="flex flex-col gap-3 text-center md:text-left">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `  text-customText-accent fill-customText-accent underline-offset-8 font-light text-sm`
                  }
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` text-customText-accent fill-customText-accent underline-offset-8 font-light text-sm `
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` text-customText-accent fill-customText-accent underline-offset-8 font-light text-sm `
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="information flex flex-col gap-5">
            <div><h2 className="text-white font-medium text-xl">Company</h2></div>
            <ul className="flex flex-col gap-3 text-center md:text-left">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `  text-customText-accent fill-customText-accent underline-offset-8 font-light text-height-f-18 `
                  }
                >
                 About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` text-customText-accent fill-customText-accent underline-offset-8 font-light text-sm `
                  }
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` text-customText-accent fill-customText-accent underline-offset-8 font-light text-sm `
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` text-customText-accent fill-customText-accent underline-offset-8 font-light text-sm `
                  }
                >
                  Lift Media
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
          <SubscribeCard/>
        </div>
      </div>
      <Divider classname={"py-1.1 bg-color-border-color grid-container mx-auto my-3"}/>
      <div className="flex justify-between grid-container mx-auto md:flex-row flex-col items-center gap-10">
        <div className="logo">
          <img src="./public/Icons/carbology-footer.svg" alt="" />
        </div>
        <ul className="flex  gap-3 text-center md:text-left">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `  text-customText-accent fill-customText-accent font-bold text-sm`
                  }
                >
                  Term
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `  text-customText-accent fill-customText-accent font-bold text-sm `
                  }
                >
                  Privacy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` text-customText-accent fill-customText-accent font-bold text-sm `
                  }
                >
                  Cookies
                </NavLink>
              </li>
        </ul>
        <div className="flex justify-between gap-3">
          <img src="./public/Icons/LinkedIn.svg" alt="LinkedIn" />
          <img src="./public/Icons/fb.svg" alt="Facebook" />
          <img src="./public/Icons/twitter.svg" alt="Twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
