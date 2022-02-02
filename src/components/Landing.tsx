import { AppBar, Container, Toolbar, Button, CardMedia } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import { Background, LandingCard } from "./Custom.styles";
import Login from "./Login";
import NoMatch from "./NoMatch";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <LandingCard>
        <AppBar
          position="static"
          sx={{ background: "white", padding: ".5rem 1rem" }}
          elevation={1}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <CardMedia
                component="img"
                sx={{ width: "55px", cursor: "pointer" }}
                image={require("../assets/crm-logo.png")}
                alt="CRM logo"
                onClick={() => navigate("/")}
              />
              <Button
                variant="custom"
                color="primary"
                href="/login"
                sx={{ marginBlock: ".5rem" }}
              >
                Log in
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LandingCard>
    </Background>
  );
};

export default Landing;
