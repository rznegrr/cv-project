import Hero from "../component/hero/hero";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import Work from "./Work/work";
import ContactMe from "./contact me/contact-me";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout(props) {
  return (
    <div>
      <Header onClick={props.onClick}/>
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
