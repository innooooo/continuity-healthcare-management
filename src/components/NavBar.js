import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const NavBar = () => {
  return (
    <body>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f7f9fc",
          borderBottom: "1px solid #D3D3D3"
        }}
      >
        {/* Logo Section */}
        <section>
          <a href="/">
            <img
              src="/icons/Non-Marketing LOGO.webp"
              alt="Company Logo"
              style={{ height: "150px", width: "auto" ,borderRadius:"100%"}}
            />
          </a>
        </section>

        {/* Navigation Links */}
        <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { to: "/about-us", label: "Who We Are" },
            { to: "/our-services", label: "Our Services" },
            { to: "/our-clients", label: "Our Clients" },
            { to: "/contact-us", label: "Contact Us" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                style={({ isActive }) => ({
                  color: isActive ? "#001F3F" : "#333333", // Navy vs Charcoal
                  fontWeight: isActive ? "bold" : "normal",
                  fontSize:"17px",
                  backgroundColor: isActive ? "#9CAF88" : "transparent", // Sage Green active bg
                  padding: "6px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </body>
  );
};

export default NavBar;
