import { Box, Card, Typography } from "@mui/material";
import Avatar from "react-avatar";
import { theme } from "../../customTheme";

interface ITaskProps {
  data: ITask;
}

const Task = ({ data }: ITaskProps) => {
  const {
    title,
    due: { label },
    responsible,
    type,
    status,
  } = data;
  return (
    <Card
      sx={{ width: "100%", p: "0.75rem", [theme.breakpoints.down("sm")]: {} }}
      elevation={2}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography sx={{ color: "gray" }}>{type.label}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          marginBlock: "1rem solid",
        }}
      >
        <Typography sx={{ color: "gray" }}>Due date: </Typography>
        <Typography>{label}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Box sx={{ display: "flex", gap: ".5rem" }}>
          <Avatar size="25" round={true} name={responsible} />
          <Typography>{responsible}</Typography>
        </Box>
        <Box
          sx={{
            padding: "0.25rem 0.5rem",
            background: status.label === "Completed" ? "#32D97A" : "#F25C5C",
          }}
        >
          {status.label}
        </Box>
      </Box>
    </Card>
  );
};

export default Task;
