import "../style.css";
import myimage from "../assets/IMG_20230505_103945.jpg";
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
          <h2>Front End Developer</h2>
          <p>
            Currently Working as a Front-End-Developer at TEG-Analytics. I am
            excited to join a team that values innovation and high-quality user
            experiences. I have experience in creating visually appealing and
            responsive web pages using HTML, CSS, and JavaScript. My attention
            to detail and logical thinking skills enable me to create clean and
            organized code that is easy to maintain and troubleshoot. I have
            experience with popular front-end framework such as React as well as
            Tailwind CSS. In addition, I have a good understanding of UX/UI
            principles and best practices, which allows me to create
            user-friendly interfaces that meet the needs of end-users. My
            ability to work in a fast-paced environment and adapt to changing
            priorities has been an asset in my previous work experiences. I am
            also comfortable with version control systems like Git. Overall, I
            am a self-motivated and creative front-end developer with a passion
            for creating visually stunning and user-friendly web pages.
          </p>
          <a
            class="cta"
            href="https://drive.google.com/file/d/1n-4sx4iKr3KMap25EWsKXBc-i74Cy62t/view?usp=sharing"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};
