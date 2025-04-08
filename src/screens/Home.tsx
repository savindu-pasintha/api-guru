import { useState } from "react";
import SideBar from "../components/SideBar";
import {
  Grid,
  List,
} from "@mui/material";

import { useStore } from "../store/store";
import AccordionItem from "../components/AccordionItem";
import { StyledButton } from "../components/StyledComponents";

const Home = () => {
  const {
    providersData = [],
    getProviders,
  } = useStore();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const onClose = () => setSideBarOpen(false);
  const onClick = () => {
    if (providersData) {
      getProviders(() => {
        setSideBarOpen(true);
      });
    } else {
      setSideBarOpen(true);
    }
  };

  return (
    <Grid container 
    alignItems="center" 
    justifyContent={"center"} 
    bgcolor={"#154c79"} 
    height={'100vh'}
    >
      <Grid>
        <StyledButton onClick={onClick} title={"Explore Web APIs"} />
      </Grid>
      <Grid>
        <SideBar
          open={sideBarOpen}
          onClose={onClose}
          children={
            <>
              <Grid textAlign={'center'} style={{ backgroundColor: "#154c79", color:'white' }}>
                <h1> Select Provider</h1>
              </Grid>
              <Grid>
                <List
                  sx={{
                    width: 400,
                    maxWidth: 400,
                    bgcolor: "#154c79",
                  }}
                >
                  {
                    providersData.map((provider:any) => (<AccordionItem provider={provider} />))
                  }
                </List>
              </Grid>
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Home;
