import { ThemeProvider } from "@mui/material";
import API from "./screens/API";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { theme } from "./theme";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/api",
    element: <API />,
  },
];

const RenderRoutes = () => (
  <Router>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RenderRoutes />
    </ThemeProvider>
  );
}

export default App;
