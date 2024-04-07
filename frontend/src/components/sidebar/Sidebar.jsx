import React from "react";
import "./Sidebar.css";
const Sidebar = ({sidebar}) => {
  return (
    // for hiding sidebar on clicking 
    // dynamic class name dene ka tareeka hai ye
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src="./src/assets/home.png" alt=""></img>
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/game_icon.png" alt=""></img>
          <p>Games</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/automobiles.png" alt=""></img>
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/sports.png" alt=""></img>
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/entertainment.png" alt=""></img>
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/tech.png" alt=""></img>
          <p>Tech</p>
        </div>

        <div className="side-link">
          <img src="./src/assets/music.png" alt=""></img>
          <p>Musics</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/blogs.png" alt=""></img>
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/news.png" alt=""></img>
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribe</h3>
        <div className="side-link ">
          <img src="./src/assets/jack.png" alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/simon.png" alt="" />
          <p>Mr.Beast</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/tom.png" alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/megan.png" alt="" />
          <p>Technical Guruji</p>
        </div>
        <div className="side-link">
          <img src="./src/assets/cameron.png" alt="" />
          <p>Carry Minati</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
