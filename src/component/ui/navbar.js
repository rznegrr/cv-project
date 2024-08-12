import { Link } from "react-scroll";
import "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <ul className="lg:flex">
        <Link to="hero-section" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills-section" smooth={true} duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="experience-section" smooth={true} duration={500}>
          <li>Experience</li>
        </Link>
        <Link to="work-section" smooth={true} duration={500}>
          <li>Work</li>
        </Link>
        <Link to="contact-section" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
