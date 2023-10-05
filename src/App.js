import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import drizzleWeatherImage from "./assets/drizzle-weather.png";

// MATERIAL UI COMPONENTS
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Fab } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// REACT
import { useEffect, useState } from "react";

// EXTERNAL LIBRARIES
import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

moment.locale("ar");

const theme = createTheme({
  typography: {
    fontFamily: ["Tajawal"],
  },
});

let cancelAxios = null;
function App() {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState("ar");
  function handleLangugeChange() {
    if (locale == "en") {
      setLocale("ar");
      i18n.changeLanguage("ar");
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
    }
  }

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, []);

  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });

  const [dateAndTime, setDateAndTime] = useState("");
  useEffect(() => {
    const dateAndTime = moment().format("MMMM - Do - YYYY");
    setDateAndTime(dateAndTime);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=32.462068&lon=35.302535&appid=173629f86fd0b98403cdc9f22c9b127b",
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        console.log("🚀 ~ file: App.js:44 ~ response:", response);
        const responseTemp = Math.round(response.data.main.temp - 273.15);
        const min = Math.round(response.data.main.temp_min - 273.15);
        const max = Math.round(response.data.main.temp_max - 273.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;

        setTemp({
          number: responseTemp,
          description: description,
          min: min,
          max: max,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {
      cancelAxios();
    };
  }, []);

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
                    {t("Jenin")}
                  </Typography>

                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    {dateAndTime}
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
                        {temp.number}
                      </Typography>

                      <img src={temp.icon} alt="Weather icon" />
                      {/* TODO: TEMP IMAGE */}
                    </div>
                    {/*== TEMP ==*/}

                    <Typography variant="h6">{temp.description}</Typography>

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
                        الصغرى : {temp.min}
                      </Fab>

                      <Fab variant="extended">
                        <WbSunnyIcon sx={{ m: 1 }} />
                        الكبرى : {temp.max}
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
              <Button variant="contained" onClick={handleLangugeChange}>
                {locale == "en" ? "Arabic" : "انجليزي"}
              </Button>
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
