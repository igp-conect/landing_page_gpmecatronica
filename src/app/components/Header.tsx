// const HeaderDropdown = ({
//   dropdownTitle,
//   dropdownItems,
// }: {
//   dropdownTitle: string;
//   dropdownItems: string[];
// }) => (
//   <li className="dropdown">
//     <a href="#">
//       <span>{dropdownTitle}</span>{" "}
//       <i className="bi bi-chevron-down toggle-dropdown" />
//     </a>
//     <ul>
//       {dropdownItems.map((dropdownItem) => (
//         <li key={dropdownItem}>
//           <a href="#">{dropdownItem}</a>
//         </li>
//       ))}
//     </ul>
//   </li>
// );

import Image from "next/image";
import logoImage from "@assets/img/logo.png";
import simplelogoImage from "@assets/img/logosmall.png";
import { CONFIG } from "../configuration";

const NavItem = ({
  navItemName,
  href,
}: {
  navItemName: string;
  href?: string;
  url?: string;
}) => (
  <li>
    <a href={href}>{navItemName}</a>
  </li>
);

const NavMenu = () => (
  <nav id="navmenu" className="navmenu">
    <ul>
      {[
        ["Início", "#hero"],
        ["Sobre", "#about"],
        ["Serviços", "#services"],
        ["Portfólio", "#portfolio"],
        ["Contate-nos", "#contact"],
      ].map(([sectionName, href]) => (
        <NavItem
          key={sectionName.toLowerCase()}
          href={href}
          navItemName={sectionName}
        />
      ))}
    </ul>
    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
  </nav>
);

export const PageHeader = () => (
  <header id="header" className="header fixed-top">
    <div className="topbar d-none d-md-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</a>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          {[
            {
              socialMedia: "facebook",
              href: "https://www.facebook.com/gpmecatronica",
            },
            {
              socialMedia: "instagram",
              href: "https://www.instagram.com/gpmecatronica/",
            },
          ].map(({ socialMedia, href }) => (
            <a key={socialMedia} href={href} className={socialMedia}>
              <i className={`bi bi-${socialMedia}`} />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* End Top Bar */}
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <div className="tw:p-0.5 tw:rounded-sm">
          <Image
            src={logoImage}
            alt="Logo do GPMecatrônica"
            width={196}
            className="tw:hidden tw:md:block"
          />
          <Image
            src={simplelogoImage}
            alt="Logo do GPMecatrônica Simples"
            width={48}
            className="tw:block tw:md:hidden"
          />
        </div>

        <NavMenu />
      </div>
    </div>
  </header>
);
