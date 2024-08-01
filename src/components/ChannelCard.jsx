import "./ChannelCard.css";
export default function ChannelCard({ src }) {
  return (
    <div className="channel-card">
      <img src={src.url} />
    </div>
  );
}
