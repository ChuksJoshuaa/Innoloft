import { Sidebar, Main } from "../components";
import { useAppSelector } from "../redux/hooks";

const MainPage = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.product);

  return (
    <div style={{ maxWidth: "1700px", margin: "0 auto", width: "90%" }}>
      <div>
        {isSidebarOpen ? (
          <div className="w-72">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0">
            <Sidebar />
          </div>
        )}
        <div
          className={`mt-[-12em] min-h-screen ${
            isSidebarOpen ? "ml-72" : "flex-2"
          }`}
        >
          <div
            className="h-screen"
            style={{ maxWidth: "1490px", margin: "0 auto", width: "100%" }}
          >
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
