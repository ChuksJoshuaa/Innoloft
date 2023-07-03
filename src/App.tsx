import { useAppDispatch } from "./redux/hooks";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader, Navbar } from "./components";
import { ToastContainer } from "react-toastify";
import { MainPage, SinglePage, EditPage, Error } from "./pages";
import { openSidebar } from "./redux/features/products/productSlice";

function App() {
  const dispatch = useAppDispatch();
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const [isLoader, setIsLoader] = useState(true);

  const checkWidth = () => {
    let yes = null;
    if (typeof window !== "undefined") {
      yes = window?.innerWidth;
      setScreenSize(yes);
    }

    if (yes) {
      if (yes <= 950) {
        dispatch(openSidebar(false));
      }

      if (yes >= 950) {
        dispatch(openSidebar(true));
      }
      return yes;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  });

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [screenSize]);

  return (
    <>
      {isLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<SinglePage />} />
            <Route path="/product/edit/:id" element={<EditPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
