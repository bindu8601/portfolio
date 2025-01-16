import "../style.css";
import myimage from '../assets/IMG_20241213_105923.jpg'
export const About = () => {
  return (
    <section id="about">
      <div class="about container">
        <div class="col-left">
          <div class="about-img">
            <img src={myimage} alt="me" />
          </div>
        </div>
        <div class="col-right">
          <h1 class="section-tite">About Me</h1>
          <h2>Software Development Engineer</h2>
          <p>
          Currently, I work as a Software Development Engineer at HealthWorksAI, where I contribute to building innovative and high-quality user experiences. I specialize in creating visually appealing and responsive web pages using React and JavaScript, with a strong proficiency in Tailwind CSS. I also have a foundational understanding of Node.js, Express, and SQL, which complements my front-end skills and broadens my development capabilities. My attention to detail and logical thinking enable me to produce clean, organized, and maintainable code. I have a good grasp of UX/UI principles, ensuring the interfaces I create are user-friendly and meet the needs of end-users. Additionally, I am adept at working in fast-paced environments, quickly adapting to changing priorities, and collaborating effectively using version control systems like Git. As a self-motivated and creative developer, I am passionate about crafting visually stunning and user-centric web solutions.
          </p>
          <a
            class="cta"
            href="https://drive.google.com/file/d/1GHIEWuFb_qB13--ZuebAu1SunjqXlp1W/view?usp=sharing"
            target="blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};
