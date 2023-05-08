import "../style.css";
export const Header = () => {
  return (
    <section id="header">
      <div class="header container">
        <div class="navbar">
          <div class="brand">
            <a href="#main">
              <h1>
                <span>B</span>indu <span>E</span>ppalapalle
              </h1>
            </a>
          </div>
          <div class="nav-list">
            <ul>
              <li>
                <a href="#main" data-after="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" data-after="Skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" data-after="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" data-after="Contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
