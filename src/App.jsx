//? MUI COMPONENTS
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

//? COMPONENTS
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

//* MAIN FUNCTION
function App() {
  //* MAIN RETURN
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      {/* <PlaceDetails /> */}
    </>
  );
}

export default App;
