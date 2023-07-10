import React, { useState, useEffect } from "react";
import "../style.css";
import paint1 from "../assets/IMG_20230624_161147.jpg";
import paint2 from "../assets/Snapchat-1205523476.jpg";
import paint3 from "../assets/Snapchat-1928086197.jpg";
import paint4 from "../assets/Snapchat-2115593192.jpg";
import dance1 from "../assets/VID_20230701130044.mp4";

export const Painting = () => {
  const paintings = [paint1, paint2, paint3, paint4]; // Array of painting images
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % paintings.length);
    }, 3000);

    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts
    };
  }, []);

  return (
    <section id="skills">
      <div className="skills container">
        <div className="skills-top">
          <h1 className="section-title">Interests</h1>
          <p>
            Personally, I have a great passion for paintings. Exploring
            different art forms and studying various techniques fascinates me. I
            find joy and inspiration in the colors, textures, and stories that
            paintings convey. It's a beautiful way to express emotions and
            capture moments in time.
          </p>
        </div>
        <div id="projects">
          <div className="projects container">
            <div className="all-projects">
              <div className="project-item">
                <div className="project-info">
                  <p>
                    Here is a small slideshow which shows my latest Paintings.
                  </p>
                </div>
                <div className="project-img">
                  <img src={paintings[currentSlide]} alt="project" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
