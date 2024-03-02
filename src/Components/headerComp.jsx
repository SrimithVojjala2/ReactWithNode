import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const HeaderComp = () => {
  return (
    <>
      <AppBar style={{ backgroundColor: "#090947" }} position="relative">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography variant="h5">Node App</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderComp;
