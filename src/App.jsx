import { Box, Container } from "@mui/material";
import HeaderComp from "./Components/headerComp";
import BodyContainer from "./Components/bodyContainer";
import { useState } from "react";
import DisplayData from "./Components/displayData";

const App = () => {
    const [toogle, setToogle] = useState(true);
    const toogleComp = ()   => {
        setToogle(prev => !prev);
    }
    const submitForm = (e) => {
        e.preventDefault();
        toogleComp();
    };
  return (
    <>
      <Container maxWidth disableGutters>
        <Box>
          <HeaderComp />
        </Box>
        <Box>
            {toogle && <BodyContainer  submitForm={submitForm} />}
            {!toogle && <DisplayData  toogleComp={toogleComp}/> }
        </Box>
      </Container>
    </>
  );
};

export default  App;
