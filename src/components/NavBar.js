import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Responsive styles object
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "1rem 2rem" : "0.5rem 3rem",
      backgroundColor: "#f7f9fc",
      borderBottom: "1px solid #D3D3D3",
      position: "relative",
      zIndex: 1000,
    },

    logoImage: {
      height: isMobile 
        ? (window.innerWidth <= 480 ? "65px" : "70px")
        : "130px",
      width: isMobile 
        ? (window.innerWidth <= 480 ? "65px" : "70px") 
        : "auto",
      borderRadius: "50%",
      objectFit: "cover",
      maxWidth: "100%",
      transition: "height 0.3s ease, width 0.3s ease",
    },

    desktopNav: {
      display: isMobile ? "none" : "flex",
      gap: window.innerWidth <= 1024 ? "12px" : "15px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },

    navLink: (isActive) => ({
      color: isActive ? "#001F3F" : "#333333",
      fontWeight: isActive ? "bold" : "normal",
      fontSize: window.innerWidth <= 1024 ? "15px" : "16px",
      backgroundColor: isActive ? "#9CAF88" : "transparent",
      padding: window.innerWidth <= 1024 ? "6px 10px" : "8px 12px",
      borderRadius: "6px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
    }),

    mobileMenuButton: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "30px",
      height: "30px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
      zIndex: 1001,
    },

    hamburgerLine: (index) => ({
      width: "100%",
      height: "3px",
      backgroundColor: "#333333",
      transition: "all 0.3s ease",
      transformOrigin: "center",
      transform: isMobileMenuOpen 
        ? index === 0 
          ? "rotate(45deg) translate(7px, 7px)"
          : index === 1
          ? "scaleX(0)"
          : "rotate(-45deg) translate(7px, -7px)"
        : "none",
      opacity: isMobileMenuOpen && index === 1 ? 0 : 1,
    }),

    mobileNav: {
      position: "fixed",
      top: 0,
      right: isMobileMenuOpen ? 0 : "-100%",
      width: window.innerWidth <= 480 ? "250px" : "280px",
      height: "100vh",
      backgroundColor: "#ffffff",
      boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
      transition: "right 0.3s ease",
      zIndex: 999,
      paddingTop: window.innerHeight <= 500 ? "20px" : "80px",
      display: isMobile ? "block" : "none",
    },

    mobileNavLinks: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      width: "100%",
    },

    mobileNavItem: {
      width: "100%",
      borderBottom: "1px solid #f0f0f0",
    },

    mobileNavLink: (isActive) => ({
      display: "block",
      width: "100%",
      color: isActive ? "#001F3F" : "#333333",
      fontSize: window.innerWidth <= 480 || window.innerHeight <= 500 ? "16px" : "18px",
      fontWeight: isActive ? "bold" : "normal",
      padding: window.innerWidth <= 480 
        ? "18px 20px" 
        : window.innerHeight <= 500 
        ? "12px 25px" 
        : "20px 25px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      backgroundColor: isActive ? "#9CAF88" : "transparent",
    }),

    mobileMenuOverlay: {
      display: isMobileMenuOpen && isMobile ? "block" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 998,
    },
  };

  // Add hover effects through event handlers
  const handleNavLinkHover = (e, isEntering) => {
    if (!isMobile && isEntering) {
      e.target.style.backgroundColor = "#e8f4f8";
      e.target.style.color = "#001F3F";
    } else if (!isMobile && !isEntering) {
      const isActive = e.target.classList.contains('active');
      e.target.style.backgroundColor = isActive ? "#9CAF88" : "transparent";
      e.target.style.color = isActive ? "#001F3F" : "#333333";
    }
  };

  const handleMobileNavLinkHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.backgroundColor = "#f7f9fc";
      e.target.style.color = "#001F3F";
    } else {
      const isActive = e.target.getAttribute('data-active') === 'true';
      e.target.style.backgroundColor = isActive ? "#9CAF88" : "transparent";
      e.target.style.color = isActive ? "#001F3F" : "#333333";
    }
  };

  const navigationItems = [
    { to: "/about-us", label: "Who We Are" },
    { to: "/our-services", label: "Our Services" },
    { to: "/our-clients", label: "Our Clients" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <nav style={styles.navbar}>
        {/* Logo Section */}
        <div>
          <a href="/">
            <img
              src="/icons/Non-Marketing LOGO.webp"
              alt="Company Logo"
              style={styles.logoImage}
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul style={styles.desktopNav}>
          {navigationItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                style={({ isActive }) => styles.navLink(isActive)}
                onMouseEnter={(e) => handleNavLinkHover(e, true)}
                onMouseLeave={(e) => handleNavLinkHover(e, false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span style={styles.hamburgerLine(0)}></span>
          <span style={styles.hamburgerLine(1)}></span>
          <span style={styles.hamburgerLine(2)}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div style={styles.mobileNav}>
          <ul style={styles.mobileNavLinks}>
            {navigationItems.map(({ to, label }) => (
              <li key={to} style={styles.mobileNavItem}>
                <NavLink
                  to={to}
                  style={({ isActive }) => styles.mobileNavLink(isActive)}
                  data-active={window.location.pathname === to}
                  onClick={closeMobileMenu}
                  onMouseEnter={(e) => handleMobileNavLinkHover(e, true)}
                  onMouseLeave={(e) => handleMobileNavLinkHover(e, false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        <div style={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;