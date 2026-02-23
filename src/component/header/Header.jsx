import "./Header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";

const Header = ({ currentStep = 1 }) => {
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

  // نحسب النسبة
  const progress =
    currentStep === 1 ? 0 :
    currentStep === 2 ? 50 :
    100;

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
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="steps">
          <span className={`step ${currentStep === 1 ? "active" : ""}`}>
            البيانات
          </span>

          <span className={`step ${currentStep === 2 ? "active" : ""}`}>
            الأسئلة
          </span>

          <span className={`step ${currentStep === 3 ? "active" : ""}`}>
            شكراً
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;