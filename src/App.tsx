import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Suspense, lazy } from "react";

const ReservaPage = lazy(() => import("./Pages/ReservarPage/ReservaPage.tsx"));
function App() {
  console.log("App renderizado");
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center w-[36px] h-[36px] rounded-xl border-l-[#430000] animate-spin" >Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservas" element={<ReservaPage/>}></Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
