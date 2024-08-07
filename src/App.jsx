import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoutePaths from "./constants/RoutePaths";

// 네이버 맵 API를 불러오는 함수
function loadNaverMapAPI(callback) {

  const existingScript = document.querySelector(
    `script[src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_APP_NCP_KEY}"]`
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_APP_NCP_KEY}`;
    script.async = true;
    script.onload = callback;
    script.onerror = () => {
      console.error("Failed to load Naver Maps API");
    };
    document.head.appendChild(script);
  } else {
    callback();
  }
}

function App() {
  useEffect(() => {
    loadNaverMapAPI(() => {
      console.log("Naver Maps API loaded");
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(RoutePaths).map((key) => {
          const route = RoutePaths[key];
          return (
            <Route key={key} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;