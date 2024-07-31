import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoutePaths from "./constants/RoutePaths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(RoutePaths).map(key => {
          const route = RoutePaths[key];
          return (
            <Route
              key={key}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;