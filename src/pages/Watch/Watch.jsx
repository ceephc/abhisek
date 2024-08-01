import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";
import VideoCard from "../../components/VideoCard";
import ReactPlayer from "react-player";
import "./Watch.css";

export default function Watch() {
  const [videoDetails, setVideoDetails] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { videoId } = useParams();

  useEffect(() => {
    setVideoDetails([]);
    setRelatedVideo([]);

    fetchFromApi(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    ).then((res) => setVideoDetails(res.items[0]));

    fetchFromApi(
      `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
    ).then((res) => setRelatedVideo(res.items));
  }, [videoId]);

  return (
    <section className="section-watch_container">
      <div className="player-section">
        <VideoPlayer videoId={videoId} />
        <VideoDetails videoDetails={videoDetails} />
      </div>
      <div className="suggestion-section">
        <RelatedVideos relatedVideos={relatedVideo} />
      </div>
    </section>
  );
}

function VideoPlayer({ videoId }) {
  return (
    <div className="player-container">
      <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={"100%"}
      />
    </div>
  );
}

function VideoDetails({ videoDetails }) {
  return (
    <div className="video-detail">
      <div className="title">
        <p>{videoDetails?.snippet?.title}</p>
      </div>
      <div className="video-info">
        <h3 className="channel-name">
          <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
            {videoDetails?.snippet?.channelTitle}
          </Link>
        </h3>
        <div className="vid-stats">
          <p>{videoDetails?.statistics?.viewCount} views</p>
          <p>{videoDetails?.statistics?.likeCount} likes</p>
        </div>
      </div>
    </div>
  );
}

function RelatedVideos({ relatedVideos }) {
  let mainVideos = relatedVideos?.map((vidData, i) => {
    return vidData.id.videoId ? (
      <VideoCard data={vidData} key={vidData.id.videoId} />
    ) : (
      <React.Fragment key={i}></React.Fragment>
    );
  });

  return relatedVideos?.length > 0 ? (
    <>
      <h2 className="heading">Recommended</h2>
      {mainVideos}
    </>
  ) : (
    <CardSkeleton />
  );
}

function CardSkeleton() {
  let card = [];
  for (let i = 0; i <= 10; i++) {
    card.push(<Skeleton key={i} />);
  }
  return card;
}
