import React from "react";
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((res) => {
        console.log(res.data.content);
        setData(res.data.content);
      });
  }, []);

  return (
    <div>
      <div className="sidebar">
        <a className="active" href="#home">
          Fake News
        </a>
        <a href="#news">Business</a>
        <a href="#news">Politics</a>
        <a href="#contact">Entertainment</a>
        <a href="#about">Science</a>
        <a href="#about">Sports</a>
        <a href="#about">Education</a>
        <a href="#about">Crisis</a>
        <a href="#about">Health</a>
      </div>

      <div className="content">
        {data.map((el, i) => {
          return (
            <div key={i} className="content-items">
              <img
                src={el.coverImageUrl}
                height="200"
                width="300"
                alt="coverimage"
              />
              <p className="para" > {el.title} </p>
              <p className="para" > {el.summary} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
