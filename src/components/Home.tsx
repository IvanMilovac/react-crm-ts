import { Box } from "@mui/material";
import MiniDrawer from "./layouts/Drawer";
import Dashboard from "./layouts/Dashboard";
import Contact from "./layouts/Contact";
import Tasks from "./layouts/Tasks";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import { useEffect } from "react";

const paths = ["/dashboard", "/tasks", "/contacts", "/login"];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!paths.includes(location.pathname)) {
      navigate("/dashboard");
    }
  }, [location.pathname, navigate]);

  return (
    <Box>
      <MiniDrawer>
        <Routes>
          <Route
            path={paths[0]}
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path={paths[1]}
            element={
              <ProtectedRoutes>
                <Tasks />
              </ProtectedRoutes>
            }
          />
          <Route
            path={paths[2]}
            element={
              <ProtectedRoutes>
                <Contact />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </MiniDrawer>
    </Box>
  );
};

export default Home;
