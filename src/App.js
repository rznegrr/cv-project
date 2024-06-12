import { useState } from "react";
import Layout from "./component/layout";
import MobileMenu from "./component/mobile-menu/mobile-menu";

function App() {
  const [togglemenu, setToggleMenu] = useState(false);

  const openMobileMenuHandler = () => {
    setToggleMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div>
      {!togglemenu && <Layout onClick={openMobileMenuHandler} />}
      {togglemenu && <MobileMenu onClick={closeMobileMenuHandler} />}
    </div>
  );
}

export default App;
