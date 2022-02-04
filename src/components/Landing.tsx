import { AppBar, Container, Toolbar, Button, CardMedia } from "@mui/material";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Banner from "./layouts/Banner";
import { Background, LandingCard } from "../Custom.styles";
import Login from "./layouts/Login";
import NoMatch from "./layouts/NoMatch";

const Landing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Background>
      <LandingCard sx={{ display: "flex", flexDirection: "column" }}>
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
              {location.pathname !== "/login" && (
                <Button
                  variant="custom"
                  color="primary"
                  href="/login"
                  sx={{ marginBlock: ".5rem" }}
                >
                  Log in
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LandingCard>
    </Background>
  );
};

export default Landing;
