import { APP_ID } from "../actionTypes";
import useFetch from "../api";

const Navbar = () => {
  const { configObj } = useFetch("configuration", APP_ID);

  return (
    <div
      className="w-full h-[55px]"
      style={{
        background: `${
          Object.keys(configObj).length > 0 ? configObj.mainColor : "#272e71"
        }`,
      }}
    ></div>
  );
};

export default Navbar;
