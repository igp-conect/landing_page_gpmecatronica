const HeaderDropdown = ({ dropdownItems }: { dropdownItems: string[] }) => (
  <li className="dropdown">
    <a href="#">
      <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" />
    </a>
    <ul>
      {dropdownItems.map((dropdownItem) => (
        <li>
          <a href="#">{dropdownItem}</a>
        </li>
      ))}
    </ul>
  </li>
);

const NavItem = ({ navItemName }: { navItemName: string }) => (
  <li>
    <a href={navItemName.toLowerCase()}>{navItemName}</a>
  </li>
);

const NavMenu = () => (
  <nav id="navmenu" className="navmenu">
    <ul>
      {["Home", "About", "Services", "Portfolio", "Team"].map((sectionName) => (
        <NavItem navItemName={sectionName} />
      ))}
      <HeaderDropdown dropdownItems={["Deep down"]} />
      <NavItem navItemName="Contact" />
    </ul>
    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
  </nav>
);

export const PageHeader = () => (
  <header id="header" className="header fixed-top">
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="social-links d-none d-md-flex align-items-center">
          {["facebook", "instagram"].map((socialMediaIconName) => (
            <a href="#" className={socialMediaIconName}>
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
          <img src="assets/img/logo.png" alt="" />
          <h1 className="sitename">GPMecatrônica</h1>
          <span>.</span>
        </a>

        <NavMenu />
      </div>
    </div>
  </header>
);
