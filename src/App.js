import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import drizzleWeatherImage from "./assets/drizzle-weather.png";

// MATERIAL UI COMPONENTS
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Fab } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const theme = createTheme({
  typography: {
    fontFamily: ["Tajawal"],
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          {/* CONTENT CONTAINER */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* CARD */}
            <div
              dir="rtl"
              style={{
                width: "100%",
                background: "rgb(28 52 91 / 36%)",
                color: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* CITY & TIME */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  dir="rtl"
                >
                  <Typography
                    variant="h2"
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    جنين
                  </Typography>

                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    الأحد 1-10-2023
                  </Typography>
                </div>
                {/* == CITY & TIME == */}

                <hr />

                {/* CONTAINER OF DEGREE + CLOUD ICON */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {/* DEGREE & DESCRIPTION */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* TEMP */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        13
                      </Typography>

                      {/* TODO: TEMP IMAGE */}
                    </div>
                    {/*== TEMP ==*/}

                    <Typography variant="h6">غائم جزئي</Typography>

                    {/* MIN & MAX */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "270px",
                        marginTop: "10px",
                      }}
                    >
                      <Fab variant="extended">
                        <CloudIcon sx={{ m: 1 }} />
                        الصغرى : 10
                      </Fab>

                      <Fab variant="extended">
                        <WbSunnyIcon sx={{ m: 1 }} />
                        الكبرى : 13
                      </Fab>
                    </div>
                  </div>
                  {/*== DEGREE & DESCRIPTION ==*/}

                  <img
                    dir="rtl"
                    width="500px"
                    style={{ paddingRight: "240px" }}
                    src={drizzleWeatherImage}
                    alt="Drizzle Weather"
                  />
                </div>
                {/*= CONTAINER OF DEGREE + CLOUD ICON ==*/}
              </div>

              {/* == CONTENT == */}
            </div>

            {/* TRANSLIATION BUTTON */}
            <div
              dir="rtl"
              style={{
                width: "100%",
                marginTop: "20px",
                display: "flex",
              }}
            >
              <Button variant="contained">إنجليزي</Button>
            </div>
            {/*== CARD ==*/}
          </div>
          {/*== CONTENT CONTAINER ==*/}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
