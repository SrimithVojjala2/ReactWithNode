/* eslint-disable react/prop-types */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

const BodyContainer = ({ submitForm }) => {
  const BoxStyle = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
  `;

  const FormComp = styled("form")`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    flex-direction: column;
  `;
  return (
    <>
      <Container maxWidth disableGutters>
        <FormComp onSubmit={(e) => submitForm(e)}>
          <Box>
            <Typography variant="h5">Add user</Typography>
          </Box>
          <Box style={{width:'100%'}}>
            <BoxStyle>
              <TextField label="Username" variant="outlined" style={{width:'50%'}} />
            </BoxStyle>
            <BoxStyle>
              <TextField label="Email" variant="outlined" style={{width:'50%'}} />
            </BoxStyle>
            <BoxStyle>
              <TextField label="Firstname" variant="outlined" style={{width:'50%'}} />
            </BoxStyle>
            <BoxStyle>
                <TextField label="Lastname" variant="outlined" style={{width:'50%'}} />
            </BoxStyle>
          </Box>
          <Box>
            <Button type="submit" variant="contained" style={{backgroundColor:'#090947'}}>
                Submit
            </Button>
          </Box>
        </FormComp>
      </Container>
    </>
  );
};

export default BodyContainer;
