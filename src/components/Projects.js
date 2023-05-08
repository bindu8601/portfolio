import "../style.css";
import food from "../assets/Online-Food-Delivery.jpg";
import GMN from "../assets/games_guess_the_number.png";
export const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div class="projects-header">
          <h1 class="section-title">Recent projects</h1>
        </div>
        <div class="all-projects">
          <div class="project-item">
            <div class="project-info">
              <h1>Food Ordering App</h1>
              <h2>Who don't love FOOD???</h2>
              <p>
                "The app typically consists of a front-end user interface, which
                is responsible for displaying the menu, managing the shopping
                cart, and facilitating the checkout process."
              </p>
              <a href="https://github.com/bindu8601/Foodorderingapp">
                Project Link
              </a>
            </div>
            <div class="project-img">
              <img src={food} alt="project" />
            </div>
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Guess My Number Game </h1>
              <h2>Games are fun</h2>
              <p>
                "This game involves the computer generating a random number
                between a given range, and the player attempting to guess the
                number by entering their guesses in an input field. Player's
                Score will get reduce if he doesn't guess the correct number"
              </p>
              <a href="https://github.com/bindu8601/GuessMyNumber">
                Project Link
              </a>
            </div>
            <div class="project-img">
              <img src={GMN} alt="project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
