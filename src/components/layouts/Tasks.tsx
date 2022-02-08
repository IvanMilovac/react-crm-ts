import { useEffect, useState, useContext, useCallback } from "react";
import BasicTable from "../elements/BasicTable";
import { TasksContext } from "../../contexts/TasksContext";
import ModalComponent from "../elements/Modal";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTasks } from "../../reducers/TaskReducer";
import { dateToForm } from "../../utils/formatters";

const columns = ["Title", "Due", "Responsible", "Type", "Status"];

const initialState = {
  title: "",
  due: { value: "", label: "" },
  responsible: "",
  type: { value: "", label: "" },
  status: { value: "", label: "" },
};

const optionsStatus = [
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "inprogress",
    label: "In progress",
  },
];

const optionsType = [
  {
    value: "remainder",
    label: "Remainder",
  },
  {
    value: "call",
    label: "Call",
  },
  {
    value: "event",
    label: "Event",
  },
];

const Tasks = () => {
  const { state, dispatch } = useContext(TasksContext);
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState(state as ITask[]);
  const [taskState, taskDispatch] = useTasks(initialState);

  const memoizedDispatch = useCallback((args) => dispatch(args), [dispatch]);
  const memoizedTaskDispatch = useCallback(
    (args) => taskDispatch(args),
    [taskDispatch]
  );

  useEffect(() => {
    const storageData = localStorage.getItem("tasks");
    !!storageData ? setTasks(JSON.parse(storageData)) : setTasks(state);
  }, [state]);

  useEffect(() => {
    memoizedTaskDispatch({ type: "RESET_FORM", payload: initialState });
  }, [memoizedTaskDispatch, openModal]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    memoizedDispatch({ type: "ADD_TASKS", payload: tasks });
  }, [tasks, memoizedDispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let value;
    switch (e.target.name) {
      case "due":
        value = {
          value: e.target.value,
          label: dateToForm(e.target.value),
        };
        break;
      case "type":
        value = {
          value: e.target.value,
          label: optionsType.filter((opt) => opt.value === e.target.value)[0]
            ?.label,
        };
        break;
      case "status":
        value = {
          value: e.target.value,
          label: optionsStatus.filter((opt) => opt.value === e.target.value)[0]
            ?.label,
        };
        break;
      default:
        value = e.target.value;
    }
    taskDispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: e.target.name,
        value: value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, taskState]);
    taskDispatch({ type: "RESET_FORM", payload: initialState });
    setOpenModal(false);
  };

  return (
    <>
      <ModalComponent handleClose={() => setOpenModal(false)} open={openModal}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Typography variant="h6">Add new task</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              fullWidth
              required
              value={taskState.title}
              onChange={handleChange}
              sx={{ marginBottom: ".75rem" }}
            />
            <input
              type="date"
              name="due"
              required
              style={{
                width: "100%",
                marginBottom: ".75rem",
                border: "1px solid gray",
                borderRadius: "3px",
                padding: ".75rem",
                fontSize: "1.125rem",
                fontWeight: "normal",
                color: "gray",
              }}
              onChange={handleChange}
              value={taskState.due.value}
            />
            <TextField
              id="outlined-basic"
              label="Responsible"
              variant="outlined"
              name="responsible"
              required
              fullWidth
              value={taskState.responsible}
              onChange={handleChange}
              sx={{ marginBottom: ".75rem" }}
            />
            <TextField
              id="outlined-select-type"
              select
              label="Type"
              name="type"
              required
              fullWidth
              value={taskState.type.value}
              onChange={handleChange}
              sx={{ marginBottom: ".75rem" }}
            >
              {optionsType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-status"
              select
              label="Status"
              name="status"
              fullWidth
              required
              value={taskState.status.value}
              onChange={handleChange}
              sx={{ marginBottom: ".75rem" }}
            >
              {optionsStatus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ color: "white" }}
              >
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </ModalComponent>
      <BasicTable
        columnNames={columns}
        data={tasks.map((task) => ({
          ...task,
          due: task.due.label,
          type:
            optionsType.filter((opt) => opt.value === task.type.value)[0]
              ?.label || task.type,
          status:
            optionsStatus.filter((opt) => opt.value === task.status.value)[0]
              ?.label || task.status,
        }))}
      />
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          sx={{ color: "white" }}
          onClick={() => setOpenModal(true)}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default Tasks;
