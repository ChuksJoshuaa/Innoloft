import { IIProps } from "../interface";
import technologySvg from "../assets/technology.svg";
import trlSvg from "../assets/trl.svg";
import businessSvg from "../assets/business.svg";
import costSvg from "../assets/costs.svg";
import useFetch from "../api";
import { useRef } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setTrl } from "../redux/features/products/productSlice";

const OfferDetails = ({ data, type }: { data: IIProps; type: string }) => {
  const { trlData } = useFetch("trl", "");
  const dispatch = useAppDispatch();
  const trlRef = useRef<HTMLSelectElement>(null);

  if (Object.keys(data).length === 0) {
    return;
  }

  const handleTrl = () => {
    if (trlRef.current) {
      let value = trlRef.current.value;
      if (!value) {
        dispatch(setTrl(data?.trl?.id));
      } else {
        dispatch(setTrl(value));
      }
    }
  };

  return (
    <div className="py-2 px-3">
      <h3 className="text-[16px] leading-[24px] font-semibold pt-2">
        Offer details
      </h3>

      {type === "edit" ? (
        <>
          <h3 className="font-bold leading-[24px] text-[16px] text-[#6B7280] uppercase mt-3 mb-1">
            Trl
          </h3>
          <select
            className="mb-3 block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleTrl}
            ref={trlRef}
          >
            {trlData.map((option, index) => (
              <option key={index} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        <div className="h-auto w-full pt-[2em]">
          <div className="offer-container">
            <div className="w-full md:w-1/2 flex flex-col pb-5">
              <div className="flex items-center justify-start">
                <img
                  src={technologySvg}
                  alt="technology"
                  className="w-[24px] h-[24px]"
                />
                <div className="flex flex-col mx-3">
                  <h3 className="font-normal leading-[24px] text-[16px] text-[#6B7280]">
                    Technology
                  </h3>

                  <div className="flex flex-wrap items-center mt-1">
                    {data?.categories.map((val) => (
                      <div
                        key={val?.id}
                        className="rounded-[20px] my-1 py-[5px] px-[14px] gap-[5px] flex items-center bg-[#E5E7EB] mx-2"
                      >
                        <h3 className="text-[12px] leading-[14px] font-normal text-[#6B7280]">
                          {val?.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-5">
                <img src={trlSvg} alt="trl" className="w-[24px] h-[24px]" />
                <div className="flex flex-col mx-3">
                  <h3 className="font-normal leading-[24px] text-[16px] text-[#6B7280] uppercase">
                    Trl
                  </h3>

                  <div className="flex flex-wrap items-center mt-1">
                    <div className="rounded-[20px] py-[5px] px-[14px] gap-[5px] flex items-center bg-[#E5E7EB]">
                      <h3 className="text-[12px] leading-[14px] font-normal text-[#6B7280]">
                        {data?.trl?.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col pb-3">
              <div className="flex items-center justify-start">
                <img
                  src={businessSvg}
                  alt="business"
                  className="w-[24px] h-[24px]"
                />
                <div className="flex flex-col mx-3">
                  <h3 className="font-normal leading-[24px] text-[16px] text-[#6B7280]">
                    Business Model
                  </h3>

                  <div className="flex flex-wrap items-center mt-1">
                    {data?.businessModels.map((val) => (
                      <div
                        key={val?.id}
                        className="rounded-[20px] my-1 py-[5px] px-[14px] gap-[5px] flex items-center bg-[#E5E7EB] mx-2"
                      >
                        <h3 className="text-[12px] leading-[14px] font-normal text-[#6B7280]">
                          {val?.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-5">
                <img src={costSvg} alt="costs" className="w-[24px] h-[24px]" />
                <div className="flex flex-col mx-3">
                  <h3 className="font-normal leading-[24px] text-[16px] text-[#6B7280]">
                    Costs
                  </h3>

                  <div className="flex items-center mt-1">
                    <div className="rounded-[20px] py-[5px] px-[14px] gap-[5px] flex items-center bg-[#E5E7EB]">
                      <h3 className="text-[12px] leading-[14px] font-normal text-[#6B7280]">
                        {data?.investmentEffort}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDetails;
