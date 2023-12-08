import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <ul className="footer__links">
          {footerLinks.map((item) => (
            <li className="footer__link" key={item.title}>
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-3 mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023&nbsp;CarHub. All rights reserved</p>
        <div className="footer__copyrights-link text-gray-500">
          <Link className="whitespace-nowrap" href="/">
            Privacy & Policy
          </Link>
          <Link className="whitespace-nowrap" href="/">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
