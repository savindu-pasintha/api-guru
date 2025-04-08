import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import { useStore } from "../store/store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const AccordionItem = ({ provider = "" }) => {
  const { getProvider, loadingProviderData } = useStore();
  const navigate = useNavigate();

  const [providerInfo, setProviderInfo] = useState<any>();
  const [bg, setBg] = useState(false);

  const onClickDetail = (e:any) => {
    e.preventDefault();
    navigate("/api"+"?title="+providerInfo?.info?.title, { state: providerInfo });
  };

  return (
    <ListItem key={provider} disableGutters>
      <Accordion
        onChange={(_event:any, expanded) => {
          if (expanded) {
            getProvider(provider, (data) => {
              setProviderInfo(data);
              setBg(true);
            });
          } else {
            setBg(false);
          }
        }}
        style={{
          backgroundColor: bg ? "black" : "#154c79",
          width: "400px",
          margin: "0 10px 0 10px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p style={{ color: "white" }}>{provider}</p>
        </AccordionSummary>
        <AccordionDetails>
          {!loadingProviderData && (
            <Box display={"flex"} onClick={(e)=>onClickDetail(e)}>
              <Box
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: providerInfo?.info["x-logo"].backgroundColor,
                }}
              >
                <img
                  src={providerInfo?.info["x-logo"].url}
                  alt=""
                  width={50}
                  height={50}
                />
              </Box>
              <Box>
                <p style={{ color: "white", marginLeft: "10px" }}>
                  {providerInfo?.info?.title}
                </p>
              </Box>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
};

export default AccordionItem;
