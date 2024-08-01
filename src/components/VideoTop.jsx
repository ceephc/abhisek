import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import VideoCard from "./VideoCard";
import "./VideoTop.css";
import "swiper/css";
import "swiper/css/navigation";
import Skeleton from "./Skeleton";

function VideoCardTop({ videos }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let resizeId;

  useEffect(() => {
    window.addEventListener("resize", function () {
      this.clearTimeout(resizeId);
      resizeId = setTimeout(handleResize, 500);

      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
    });
  }, []);

  let slidesPerView;
  if (windowWidth > 760) {
    slidesPerView = 2.2;
  } else if (windowWidth > 560) {
    slidesPerView = 1.5;
  } else {
    slidesPerView = 1;
  }
  let topVideos = videos.map((vidData, i) => {
    return vidData.id.videoId ? (
      <SwiperSlide key={vidData.id.videoId}>
        <VideoCard data={vidData} key={vidData.id.videoId} />
      </SwiperSlide>
    ) : (
      <React.Fragment key={i}></React.Fragment>
    );
  });

  return (
    <div className="slidable-video_container">
      <h2 className="heading">Top</h2>
      {videos.length > 0 ? (
        <Swiper
          spaceBetween={windowWidth > 500 ? 50 : 20}
          slidesPerView={slidesPerView}
          modules={[Navigation]}
          navigation={true}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          className="mySwiper"
        >
          {topVideos}
        </Swiper>
      ) : (
        <CardSkeleton />
      )}
    </div>
  );
}

function CardSkeleton() {
  return (
    <>
      <Skeleton />
    </>
  );
}

export default VideoCardTop;
