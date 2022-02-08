import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import Task from "./Task";
import { fakeTasks } from "../../fakeData";

const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "inprogress",
    label: "In progress",
  },
];

const TasksDashboard = () => {
  const { state } = useContext(TasksContext);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([] as ITask[]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    setFilteredTasks(state);
  }, []);

  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");
    const tasks = !!tasksStorage ? JSON.parse(tasksStorage) : fakeTasks;
    setFilteredTasks(
      status === "all"
        ? tasks
        : tasks.filter((task: ITask) => task.status.value === status)
    );
  }, [status]);

  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 2,
        "@media only screen and (max-width: 750px)": { p: 0.5, pt: 2, pb: 2 },
      }}
    >
      <Typography
        sx={{
          "@media only screen and (max-width: 750px)": { textAlign: "center" },
        }}
      >
        {
          state.filter((task: ITask) => task.status.value === "completed")
            .length
        }{" "}
        task completed out of {state.length}
      </Typography>
      <TextField
        id="outlined-select-currency"
        select
        label="Filter"
        value={status}
        onChange={handleChange}
        sx={{ marginBlock: "1rem", minWidth: "150px" }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box
        sx={{
          paddingBlock: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {filteredTasks.map((task, index) => (
          <Task key={task.title + index} data={task} />
        ))}
      </Box>
    </Box>
  );
};

export default TasksDashboard;
