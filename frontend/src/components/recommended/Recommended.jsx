import React, { useEffect, useState } from "react";
import { API_KEY, value_convertor } from "../../data";
import "./Recommended.css";
import { Link } from "react-router-dom";
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const related_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&chart=mostPopular&regionCode=US&key=${API_KEY}`;
    await fetch(related_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="recommended">
      {apiData?.map((data, index) => {
        return (
          <Link to={`/video/&{data.snippet.categoryId}/${data.id}`} className="side-video-list" key={index}>
            <img src={data.snippet.thumbnails.medium.url}></img>
            <div className="vid-info">
              <h4>{data.snippet.title}</h4>
              <p>{data.snippet.channelTitle}</p>
              <p>{value_convertor(data.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
