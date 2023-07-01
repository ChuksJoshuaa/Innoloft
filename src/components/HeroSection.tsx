import { HeroProps } from "../interface";
import patentSvg from "../assets/patent.svg";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const HeroSection = ({ data, type }: HeroProps) => {
  if (Object.keys(data).length === 0) {
    return;
  }

  const [title, setTitle] = useState(data?.name);
  const [description, setDescription] = useState(data?.description);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  return (
    <div className="w-full md:w-2/3">
      <div className="flex flex-col relative">
        <div
          className="bg-no-repeat h-[300px] z-[2] o"
          style={{ backgroundImage: `url(${data?.picture})` }}
        >
          <div className="absolute top-0 left-0">
            <div
              style={{ backgroundImage: `url(${patentSvg})` }}
              className="w-[200px] h-[40px] bg-no-repeat"
            />
          </div>
        </div>
        <div className="p-3">
          {type === "edit" ? (
            <>
              <input
                type="url"
                className="w-full border border-gray-400 px-3 py-1 outline-none rounded-md mb-4"
                // placeholder="Enter title..."
                value={title}
                onChange={handleTitle}
              />
              <ReactQuill value={description} onChange={handleDescription} />
            </>
          ) : (
            <>
              <h3 className="font-semibold text-[16px] text-[#374151] leading-[24px]">
                {data?.name}
              </h3>
              <div
                className="text-[14px] font-normal leading-[24px] text-[#6B7280]"
                dangerouslySetInnerHTML={{ __html: `${data?.description}` }}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
