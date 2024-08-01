import { useEffect, useState } from "react";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import "./Channel.css";
import VideoMain from "../../components/VideoMain";

export default function Channel() {
  const [channelData, setChannelData] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { channelId } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet%2Cstatistics&id=${channelId}`).then(
      (res) => setChannelData(res.items[0])
    );
    fetchFromApi(
      `search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((res) => setChannelVideos(res.items));
  }, [channelId]);

  return (
    <>
      <ChannelDetails channelData={channelData} />
      <ChannelVideos channelVideos={channelVideos} />
    </>
  );
}

function ChannelDetails({ channelData }) {
  return (
    <div className="channel-details_container">
      <div className="channel-banner">
        <img src={channelData?.brandingSettings.image?.bannerExternalUrl} />
      </div>

      <div className="channel-details">
        <img
          className="channel-picture"
          src={channelData?.snippet?.thumbnails?.medium?.url}
        />
        <span className="channel-name">{channelData?.snippet?.title} </span>
      </div>
    </div>
  );
}

function ChannelVideos({ channelVideos }) {
  return (
    <div className="channel-videos">
      <VideoMain videos={channelVideos} />
    </div>
  );
}
