import React, { Fragment } from "react";
import {
  Container,
  Grid,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Profile from "./components/Profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#333996",
  //     light: '#3c44b126'
  //   },
  //   secondary: {
  //     main: "#f83245",
  //     light: '#f8324526'
  //   },
  //   background: {
  //     default: "#f4f5fd"
  //   },
  // },
  // overrides:{
  //   MuiAppBar:{
  //     root:{
  //       transform:'translateZ(0)'
  //     }
  //   }
  // },
  // props:{
  //   MuiIconButton:{
  //     disableRipple:true
  //   }
  // }
});

const cssGlobalVariables = {
  mainColor: "#ffc500",
};

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    marginTop: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={{ ...theme, ...cssGlobalVariables }}>
      <CssBaseline />
      <Container className={classes.containerRoot}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main_content container_shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/">
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
