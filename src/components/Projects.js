import "../style.css";
import food from "../assets/Online-Food-Delivery.jpg";
import GMN from "../assets/games_guess_the_number.png";

const ProjectCard = ({ title, subtitle, description, link, image }) => {
  return (
    <div className="project-item">
      <div className="project-info">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <a href={link} target="blank">
          Project Link
        </a>
      </div>
      <div className="project-img">
        <img src={image} alt="project" />
      </div>
    </div>
  );
};

export const Projects = () => {
  const projectData = [
    {
      title: "Food Ordering App",
      subtitle: "Who doesn't love FOOD???",
      description: `"The app typically consists of a front-end user interface, 
          which is responsible for displaying the menu, managing the shopping cart, 
          and facilitating the checkout process."`,
      link: "https://github.com/bindu8601/Foodorderingapp",
      image: food,
    },
    {
      title: "Guess My Number Game",
      subtitle: "Games are fun",
      description: `"This game involves the computer generating a random number between a given range, 
          and the player attempting to guess the number by entering their guesses in an input field. 
          Player's Score will get reduced if they don't guess the correct number."`,
      link: "https://github.com/bindu8601/GuessMyNumber",
      image: GMN,
    },
  ];

  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">Personal projects</h1>
        </div>
        <div className="all-projects">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
