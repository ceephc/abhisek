import React from "react";
import Skeleton from "./Skeleton";
import VideoCard from "./VideoCard";
import "./VideoMain.css";

export default function VideoMain({ videos }) {
  return (
    <main className="main-videos_section">
      <h2 className="heading">Recommended</h2>
      <Videos videos={videos} />
    </main>
  );
}

function Videos({ videos }) {
  let mainVideos = videos?.map((vidData, i) => {
    return vidData.id.videoId ? (
      <VideoCard data={vidData} key={vidData.id.videoId} />
    ) : (
      <React.Fragment key={i}></React.Fragment>
    );
  });

  return (
    <div className="main-videos_container">
      {videos?.length > 0 ? mainVideos : <CardSkeleton />}
    </div>
  );
}

function CardSkeleton() {
  let card = [];
  for (let i = 0; i <= 10; i++) {
    card.push(<Skeleton key={i} />);
  }
  return card;
}
