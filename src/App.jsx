import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h={"100vh"}
      gap={"1"}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem
        area={"nav"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Main />
      </GridItem>
      <GridItem area={"footer"} textAlign={"center"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default App;
