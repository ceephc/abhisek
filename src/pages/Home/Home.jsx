import VideoCardTop from "../../components/VideoTop";
import VideoMain from "../../components/VideoMain";
import { useState, useEffect } from "react";
import { fetchFromApi } from "../../utils/fetchFromApi";

export default function Home() {
  const [videoTerm, setVideoTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?q=${videoTerm}&maxResults=50&part=snippet`).then(
      (res) => setData(res.items)
    );
  }, [videoTerm]);

  return (
    <div>
      <VideoCardTop videos={data?.slice(0, 6)} />
      <VideoMain videos={data?.slice(6, 50)} />
    </div>
  );
}
