/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

const DisplayData = ({toogleComp}) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users");
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
    return () => fetchUserData();
  }, []);
  return (
    <>
        <Container maxWidth disableGutters>
            <Box>
                <Button variant="contained" onClick={toogleComp}>
                    Add user
                </Button>
            </Box>
            <Box>
                <pre>{JSON.stringify(userData,null,2)}</pre>
            </Box>
        </Container>
    </>
  );
};

export default DisplayData;
