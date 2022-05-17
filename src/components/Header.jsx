import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const onThemeSwitchChange = () => {
    setIsChecked(!isChecked);
    setTheme();
  };

  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  return (
    <header className="header">
      <p className="title">Where in the world?</p>

      {!isChecked ? (
        <div className="mode-switcher">
          <BsMoonFill onClick={onThemeSwitchChange} />
          <p>Dark Mode</p>
        </div>
      ) : (
        <div className="mode-switcher">
          <BsMoon onClick={onThemeSwitchChange} />
          <p>Light Mode</p>
        </div>
      )}
    </header>
  );
}
export default Header;
