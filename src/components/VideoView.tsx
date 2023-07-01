import { useState, useEffect } from "react";

const VideoView = ({ video }: { video: string }) => {
  const [id, setId] = useState<null | string>(null);
  useEffect(() => {
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
      <div className="h-[444px] pt-[4em] px-[3em]">
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
    </div>
  );
};

export default VideoView;
