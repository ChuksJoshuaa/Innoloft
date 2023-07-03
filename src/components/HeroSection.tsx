import { HeroProps, TrlProps } from "../interface";
import patentSvg from "../assets/patent.svg";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import arrowCheck from "../assets/arrowCheck.svg";
import { Toast, Toaster } from "../utils/Toast";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";
import { LIVE_BASE_URL, PRODUCT_ID } from "../actionTypes";
import { saveToLocalStorage } from "../utils/localStorage";

const HeroSection = ({ data, type }: HeroProps) => {
  if (Object.keys(data).length === 0) {
    return;
  }

  const [title, setTitle] = useState(data?.name);
  const [description, setDescription] = useState(data?.description);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trlId, videoUrl, storedTrl } = useAppSelector(
    (state) => state.product
  );

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  const handleSubmit = async () => {
    if (!title || !description) {
      Toaster("Please fill in all required fields");
      return;
    }

    const trlCheckId = !trlId ? data?.trl?.id : trlId;
    const videoCheckUrl = !videoUrl ? data?.video : videoUrl;

    let findTrl = storedTrl.find(
      (val: TrlProps) => val.id === trlCheckId.toString()
    );

    const payload = {
      trl: findTrl,
      video: videoCheckUrl,
      name: title,
      description: description,
    };

    let dataPayload = {
      ...data,
      trl: findTrl as TrlProps,
      video: videoCheckUrl,
      name: title,
      description: description,
    };

    try {
      setIsSubmitting(true);
      const response = await axios.put(
        `${LIVE_BASE_URL}/product/${PRODUCT_ID}`,
        payload
      );
      console.log(response);
      Toast("Update successful");
      window.location.href = "/";
    } catch (error) {
      saveToLocalStorage(dataPayload);
      Toast("Update successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
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

        {type === "edit" ? (
          <>
            <div className="flex justify-end items-end pb-3">
              <div
                className="text-md font-medium text-gray-600"
                onClick={() =>
                  (window.location.href = `/product/${PRODUCT_ID}`)
                }
              >
                Cancel
              </div>
              <div
                className={`py-[5px] px-[10px] gap-[5px] flex items-center rounded-[6px] mx-3`}
                style={{
                  background: `${
                    isSubmitting
                      ? "rgba(39, 46, 113, 0.50)"
                      : "rgb(39, 46, 113)"
                  }`,
                }}
                onClick={handleSubmit}
              >
                <img
                  src={arrowCheck}
                  alt="arrow-check"
                  className="w-[13px] h-[13px]"
                />
                <h3 className="text-gray-50 text-[12px] px-2">
                  {isSubmitting ? "saving" : "save"}
                </h3>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSection;
