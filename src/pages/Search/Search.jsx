import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { useState, useEffect } from "react";
import VideoCardTop from "../../components/VideoTop";
import VideoMain from "../../components/VideoMain";

export default function Search() {
  const [data, setData] = useState([]);
  let { term } = useParams();

  useEffect(() => {
    setData([]);
    fetchFromApi(`search?q=${term}&maxResults=50&part=snippet`).then((res) =>
      setData(res.items)
    );
  }, [term]);
  return (
    <div>
      <VideoCardTop videos={data.slice(0, 6)} />
      <VideoMain videos={data.slice(6, 50)} />
    </div>
  );
}
