import React from "react";
import "./Sidebar.css";
const Sidebar = ({sidebar,categary,setCategary}) => {
  return (
    // for hiding sidebar on clicking 
    // dynamic class name dene ka tareeka hai ye
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${categary==0?"active":""}`} onClick={()=>setCategary(0)}>
          <img src="./src/assets/home.png" alt=""></img>
          <p>Home</p>
        </div>
        <div className={`side-link ${categary==20?"active":""}`} onClick={()=>setCategary(20)}>
          <img src="./src/assets/game_icon.png" alt=""></img>
          <p>Games</p>
        </div>
        <div className={`side-link ${categary==2?"active":""}`} onClick={()=>setCategary(2)}>
          <img src="./src/assets/automobiles.png" alt=""></img>
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${categary==17?"active":""}`} onClick={()=>setCategary(17)}>
          <img src="./src/assets/sports.png" alt=""></img>
          <p>Sports</p>
        </div>
        <div className={`side-link ${categary==24?"active":""}`} onClick={()=>setCategary(24)}>
          <img src="./src/assets/entertainment.png" alt=""></img>
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${categary==28?"active":""}`} onClick={()=>setCategary(28)}>
          <img src="./src/assets/tech.png" alt=""></img>
          <p>Tech</p>
        </div>

        <div className={`side-link ${categary==10?"active":""}`} onClick={()=>setCategary(10)}>
          <img src="./src/assets/music.png" alt=""></img>
          <p>Musics</p>
        </div>
        <div className={`side-link ${categary==22?"active":""}`} onClick={()=>setCategary(22)}>
          <img src="./src/assets/blogs.png" alt=""></img>
          <p>Blogs</p>
        </div>
        <div className={`side-link ${categary==25?"active":""}`} onClick={()=>setCategary(25)}>
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
