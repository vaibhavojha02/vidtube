import React, { useState, useEffect } from "react";
import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import { API_KEY } from "../../data";
import { value_convertor } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";
const Playvideo = () => {
  const {videoId} = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const fetchVideoData = async () => {
    const videourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videourl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);
  const fetchOtherData = async () => {
    const channelDataurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDataurl)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    //fetching comments
    const commentDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentDataUrl)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "LOADING..."}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? value_convertor(apiData.statistics.viewCount)
            : "LOADING.."}{" "}
          &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "error"}
        </p>
        <div>
          <span>
            <img src="/src/assets/like.png"></img>
            {apiData ? value_convertor(apiData.statistics.likeCount) : ""}
          </span>
          <span>
            <img src="/src/assets/dislike.png"></img>2
          </span>
          <span>
            <img src="/src/assets/share.png"></img>Share
          </span>
          <span>
            <img src="/src/assets/save.png"></img>Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
        ></img>
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_convertor(channelData.statistics.subscriberCount)
              : "1M"}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0,250) : "Description here"}</p>
        <hr />
        <h4>
          {apiData ? value_convertor(apiData?.statistics.commentCount) : 0}
        </h4>
        {commentData?.map((data, index) => {
          return (
            <div key={index} className="comment">
              <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}></img>
              <div>
                <h3>
                 {data.snippet.topLevelComment.snippet.authorDisplayName}<span> 1 Day ago</span>
                </h3>
                <p>
                  {data.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="comment-action">
                  <img src="/src/assets/like.png"></img>
                  <span>{value_convertor(data?.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src="/src/assets/dislike.png"></img>
                  <span>2</span>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default Playvideo;
