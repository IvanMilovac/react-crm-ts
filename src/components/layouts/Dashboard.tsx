import { Box } from "@mui/material";
import { theme } from "../../customTheme";
import TasksDashboard from "./TasksDashboard";
import { TasksContextProvider } from "../../contexts/TasksContext";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 2,
  gridTemplateRows: "auto",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateAreas: `"elem1" "elem2" "elem3"`,
  },
  gridTemplateAreas: `"elem1 elem2" "elem1 elem3"`,
  width: "100%",
  height: "100%",
};

const Dashboard = () => {
  return (
    <TasksContextProvider>
      <Box sx={gridStyle}>
        <Box sx={{ gridArea: "elem1" }}>
          <TasksDashboard />
        </Box>
        <Box sx={{ gridArea: "elem2", bgcolor: "red" }}>__</Box>
        <Box sx={{ gridArea: "elem3", bgcolor: "green" }}>__</Box>
      </Box>
    </TasksContextProvider>
  );
};

export default Dashboard;
