import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />

            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/biki.dey.125"
                className="text-blue-400 hover:text-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Biki721"
                className="text-blue-400 hover:text-blue-500"
              >
                <span className="sr-only">Github</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/vicky_dey/profilecard/?igsh=d2w2azVxaWp0NDJ2"
                className="text-blue-400 hover:text-blue-500"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bikidey721/"
                className="text-blue-400 hover:text-blue-500"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    "Features",
                    "Pricing",
                    "Affiliate Program",
                    "Press Kit",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        className="text-base text-blue-500 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Account", "Help", "Contact Us", "Customer Support"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          to="/"
                          className="text-base text-blue-500 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Legals
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          to="/"
                          className="text-base text-blue-500 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-200 pt-8">
          <p className="text-base text-blue-400 xl:text-center">
            &copy; {new Date().getFullYear()} BIKI DEY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
