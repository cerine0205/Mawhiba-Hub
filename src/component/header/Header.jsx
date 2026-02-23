import "./Header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg"; // عدّلي المسار إذا مختلف

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("theme-light");
    } else {
      document.body.classList.remove("theme-light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header">
      <div className="header-top">

        <div className="club-info">
          <h2>نادي موهبة</h2>
          <span>لجنة التصميم</span>
        </div>

        <div className="header-right">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>
        </div>

      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="steps">
          <span className="step active">البيانات</span>
          <span className="step">الأسئلة</span>
          <span className="step">شكراً</span>
        </div>
      </div>
    </header>
  );
};

export default Header;