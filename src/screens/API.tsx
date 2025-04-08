import { Box, Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const API = () => {
  const locationData = useLocation();
  const navigate = useNavigate();
  
  const providerInfo = locationData?.state;

  return (
    <Grid
      container
      direction="column"
      bgcolor={"#154c79"}
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={{ width: "90%", mb: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          textAlign="center"
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              backgroundColor: providerInfo?.info["x-logo"].backgroundColor,
              mr: 2,
            }}
          >
            <img
              src={providerInfo?.info["x-logo"].url}
              alt=""
              width={100}
              height={100}
            />
          </Box>
          <Box>
            <h1 style={{ color: "white", margin: 0 }} onClick={()=> navigate('/')}>
              {providerInfo?.info?.title}
            </h1>
          </Box>
        </Box>
      </Grid>

      <Grid item sx={{ width: "50%" }}>
        <Grid container spacing={4} color="white">
          <Grid item xs={12}>
            <Box>
              <h2>Description</h2>
              <p>{providerInfo?.info?.description}</p>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <h2>Swagger</h2>
              <p>{providerInfo?.swaggerUrl}</p>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <h2>Contact</h2>
              <p>Email: {providerInfo?.info?.contact?.email}</p>
              <p>Name: {providerInfo?.info?.contact?.name}</p>
              <p>Url: {providerInfo?.info?.contact?.url}</p>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default API;
