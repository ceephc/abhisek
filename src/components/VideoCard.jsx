import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";

export default function VideoCard({ slidable, data }) {
  return (
    <Link to={`/watch/${data.id.videoId}`}>
      <div className={`video-card ${slidable ? "slidable-card" : ""}`}>
        <img draggable="false" src={data?.snippet?.thumbnails?.high?.url} />
        <div className="video-data">
          <p>{data?.snippet.title?.slice(0, 60)}</p>
          <Link to={`/channel/${data?.snippet?.channelId}`}>
            <span>{data?.snippet.channelTitle}</span>
          </Link>
        </div>
      </div>
    </Link>
  );
}
