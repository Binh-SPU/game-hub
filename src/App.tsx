import { Box, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg={"coral"}>
        Navigation
      </GridItem>
      <Box display={{ base: "none", lg: "block" }}>
        <GridItem area="aside" bg={"gold"}>
          Aside
        </GridItem>
      </Box>
      <GridItem area="main" bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
