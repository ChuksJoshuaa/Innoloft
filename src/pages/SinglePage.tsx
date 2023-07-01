import { Sidebar, Main } from "../components";
import { useAppSelector } from "../redux/hooks";

const SinglePage = () => {
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
          className={`${isSidebarOpen ? "ml-72 mt-[-12em]" : "flex-2 mt-5"}`}
        >
          <div
            className="h-screen"
            style={{ maxWidth: "1490px", margin: "0 auto", width: "100%" }}
          >
            <Main type="single" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
