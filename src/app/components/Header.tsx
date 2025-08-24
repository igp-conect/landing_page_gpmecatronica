// const HeaderDropdown = ({
//   dropdownTitle,
//   dropdownItems,
// }: {
//   dropdownTitle: string;
//   dropdownItems: string[];
// }) => (
//   <li className="relative">
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
    <i className="mobile-nav-toggle xl:hidden bi bi-list" />
  </nav>
);

export const PageHeader = () => (
  <header id="header" className="header top-0">
    <div className="topbar flex items-center">
      <div className="container mx-auto sm:px-4 flex justify-center md:justify-between">
        <div className="contact-info flex items-center">
          <i className="bi bi-envelope flex items-center">
            <a href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</a>
          </i>
          <i className="bi bi-phone flex items-center ms-4">
            <span>{CONFIG.phoneNumber}</span>
          </i>
        </div>
        <div className="social-links hidden md:flex items-center">
          {["facebook", "instagram"].map((socialMediaIconName) => (
            <a
              key={socialMediaIconName}
              href="/#"
              className={socialMediaIconName}
            >
              <i className={`bi bi-${socialMediaIconName}`} />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* End Top Bar */}
    <div className="branding flex items-center">
      <div className="container mx-auto sm:px-4 relative flex items-center justify-between">
        <a href="/" className="logo flex items-center">
          <Image src={logoImage} alt="" width={32} />
          <h1 className="sitename">GPMecatrônica</h1>
          <span>.</span>
        </a>

        <NavMenu />
      </div>
    </div>
  </header>
);
