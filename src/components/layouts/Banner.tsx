import { Button, Grid, Typography } from "@mui/material";
import LandingImg from "../../assets/landing-img.svg";
import { ImageCustom } from "../../Custom.styles";

const Banner = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: "1rem",
        margin: "0",
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ImageCustom src={LandingImg} alt="CRM illustration" />
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.5rem",
          textAlign: "center",
        }}
      >
        <Typography sx={{ paddingBlock: "1rem", fontSize: "1.5rem" }}>
          Your CRM #1
        </Typography>
        <Typography sx={{ paddingBlock: "1rem" }}>
          Meet the small business CRM that just works. Get started in under 30
          minutes and build customer relationships for life.
        </Typography>
        <Button
          variant="custom"
          color="primary"
          href="/login"
          sx={{ margin: "1rem" }}
        >
          Log in
        </Button>
      </Grid>
    </Grid>
  );
};

export default Banner;
