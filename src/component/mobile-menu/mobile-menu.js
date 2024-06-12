import Navbar from "../navbar";
import logo from "../../assets/images/logo.svg";
import Exit from "../../assets/icons/exit";

export default function MobileMenu(props) {
  return (
    <div>
        <div className="bg-gray900/10 h-screen flex flex-row-reverse z-50">
          <div className="w-[320px] bg-default shadow-2xl h-screen">
            <div className="flex justify-between border-b border-gray100 p-4">
              <img src={logo} alt="site-logo"/>
              <Exit onClick={props.onClick} />
            </div>
            <div>
              <Navbar />
            </div>
            <div className="flex justify-center px-4 pt-4">
              <button className="dn-btn">Download CV</button>
            </div>
          </div>
        </div>
    </div>
  );
}
