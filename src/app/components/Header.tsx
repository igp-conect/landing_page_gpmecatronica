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
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">{CONFIG.contactEmail}</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>{CONFIG.phoneNumber}</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          {["facebook", "instagram"].map((socialMediaIconName) => (
            <a
              key={socialMediaIconName}
              href="#"
              className={socialMediaIconName}
            >
              <i className={`bi bi-${socialMediaIconName}`} />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* End Top Bar */}
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <Image src="assets/img/logo.png" alt="" />
          <h1 className="sitename">GPMecatrônica</h1>
          <span>.</span>
        </a>

        <NavMenu />
      </div>
    </div>
  </header>
);
