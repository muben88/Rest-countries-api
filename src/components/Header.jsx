import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";

function Header() {
  const [isDark, setIsDark] = useState(false);

  const modeSwitch = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="header">
      <p className="title">Where in the world?</p>

      {!isDark ? (
        <div className="mode-switcher">
          <BsMoon onClick={modeSwitch} />
          <p>Dark Mode</p>
        </div>
      ) : (
        <div className="mode-switcher">
          <BsMoonFill onClick={modeSwitch} />
          <p>Light Mode</p>
        </div>
      )}
    </header>
  );
}
export default Header;
