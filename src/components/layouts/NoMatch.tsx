import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: "1.25rem",
        marginTop: ".75rem",
      }}
    >
      <Typography sx={{ marginRight: ".5rem" }}>Invalid route.</Typography>
      <Link to="/">Go to home page...</Link>
    </Box>
  );
};

export default NoMatch;
