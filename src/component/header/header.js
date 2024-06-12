import Hug from "../../assets/icons/hug";
import logo from "../../assets/images/logo.svg";
import Navbar from "../navbar";

export default function Header(props) {
  return (
    <div className="flex justify-between h-[68px] items-center p-4">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="lg:hidden">
        <Hug onClick={props.onClick} />
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <Navbar />
        <div className="flex justify-center px-4 pt-4">
          <button className="dn-btn">Download CV</button>
        </div>
      </div>
    </div>
  );
}
