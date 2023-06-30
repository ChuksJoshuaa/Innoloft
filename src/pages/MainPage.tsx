import { Sidebar, Main } from "../components";
import { useAppSelector } from "../redux/hooks";

const MainPage = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.product);

  return (
    <div>
      <div>
        {isSidebarOpen ? (
          <div className="w-72 fixed bg-white border-2 border-gray-100 h-screen">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 fixed border-2 border-gray-100 h-screen">
            <Sidebar />
          </div>
        )}
        <div
          className={`bg-main-bg min-h-screen ${
            isSidebarOpen ? "ml-72" : "flex-2"
          }`}
        >
          <div className="fixed h-screen bg-main-bg dark:bg-main-dark-bg w-full">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
