import React, { useEffect, useState } from "react";
import "./Feed.css";
import moment from 'moment';




import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { value_convertor } from "../../data";
const Feed = ({ categary }) => 
{
  const [data,setData] = useState([]);
  const fetchData = async () => 
  {
   
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${categary}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json()).then((data) => setData(data.items))
      console.log(data);
  };
  useEffect(() => 
  {
    fetchData()
  }, [categary]);
// here medium describes the quality of images
  return (
   
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
            <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail"></img>
           
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_convertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
