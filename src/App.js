import "./App.css";
import BasicGrid from "./Components/BasicGrid";
import BasicStack from "./Components/BasicStack";
import Material from "./Components/Material";
import { green, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButtons from "./Components/IconButtons";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "400px",
        }}
      >
         <Material />
         
        {/* <BasicGrid /> */}
        {/* <BasicStack /> */}
        {/* <IconButtons />  */}
      </div>
    </ThemeProvider>
  );
}

export default App;
