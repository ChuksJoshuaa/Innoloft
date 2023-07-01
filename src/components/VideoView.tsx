import { useState, useEffect } from "react";
import { VideoProps } from "../interface";

const VideoView = ({ video, type }: VideoProps) => {
  const [id, setId] = useState<null | string>(null);
  const [videoLink, setVideoLink] = useState("");
  useEffect(() => {
    setVideoLink(video);
    if (video) {
      const searchParams = new URLSearchParams(new URL(video).search);
      const videoId = searchParams.get("v");
      setId(videoId as string | null);
    }
  }, [video]);

  return (
    <div className="py-2 px-3">
      <h3 className="capitalize text-[16px] leading-[24px] font-semibold pt-2">
        video
      </h3>
      {type === "edit" ? (
        <div className="py-3">
          <input
            type="url"
            className="w-full border border-gray-400 px-3 py-1 outline-none rounded-md"
            placeholder="Add a youtube or vimeo link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </div>
      ) : (
        <div className="h-[444px] pt-[4em] px-[1em] md:px-[3em]">
          {id !== null ? (
            <>
              <iframe
                className="w-full"
                height="330"
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
              ></iframe>
            </>
          ) : (
            <video
              src={video}
              className="w-full h-full object-cover"
              controls
            ></video>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoView;
