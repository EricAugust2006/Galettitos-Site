import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Suspense, lazy } from "react";

const ReservaPage = lazy(() => import("./Pages/ReservarPage/ReservaPage.tsx"));
function App() {
  console.log("App renderizado");
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen bg-white">
            <div className="text-center w-[36px] h-[36px] rounded-xl border-l-[#430000]">
              <div className="loading-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5E2612"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reservas" element={<ReservaPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
