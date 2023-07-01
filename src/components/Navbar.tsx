import { NavProfile } from ".";
import { APP_ID } from "../actionTypes";
import useFetch from "../api";
import innosoftSvg from "../assets/innosoft.svg";
import searchSvg from "../assets/search.svg";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const { configObj } = useFetch("configuration", APP_ID);
  const { isSidebarOpen } = useAppSelector((state) => state.product);

  return (
    <div
      className="w-full h-[55px] relative"
      style={{
        background: `${
          Object.keys(configObj)?.length > 0 ? configObj?.mainColor : "#272e71"
        }`,
        fontFamily: "Open Sans",
      }}
    >
      <div
        className="flex flex-row justify-start items-center"
        style={{ maxWidth: "1700px", margin: "0 auto", width: "90%" }}
      >
        <div className="w-72 h-[55px]">
          <img
            src={innosoftSvg}
            alt="innoloft-logo"
            className={`${isSidebarOpen ? "ml-5" : "ml-1"} min-w-[140px] mt-3`}
          />
        </div>
        <div
          className={`ml-20 md:ml-30 flex justify-between items-center w-full ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative">
            <input
              placeholder="Enter interest, keyword, company name, etc."
              className="w-[250px] md:w-[500px] h-[27px] rounded-[4px] bg-white outline-none px-3"
            />
            <div className="absolute top-[50%] right-[10px] translate-y-[-50%]">
              <img
                src={searchSvg}
                alt="search"
                className=" h-4 w-4 text-[#222]"
              />
            </div>
          </div>
          <div>
            <NavProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
