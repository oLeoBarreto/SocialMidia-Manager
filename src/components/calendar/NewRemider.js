import * as React from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../Theme";
import Api from "../../api";

const CustomInput = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#647B96",
    borderWidth: 2,
  },
  "& .MuiOutlinedInput-root": {
    input: {
      color: "#FBF5F3",
      fontFamily: ["Poppins"],
    },
    "&:hover fieldset": {
      borderColor: "#647B96",
    },
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important",
    borderColor: "#A9B4DE",
  },
});

function CreateReminder(title, description, date) {
  Api.post("/reminder/newReminder", {
    title,
    description,
    date,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default function NewRemiderCard() {
  
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState(null);
  const [description, setDescription] = React.useState("");

  return (
    <>
      <ThemeProvider theme={Theme()}>
        <Card
          component="form"
          sx={{
            height: "35 0px",
            width: "100%",
            maxWidth: "300px",
            backgroundColor: "primary.second",
            margin: "10px",
          }}
          autoComplete="off"
          onSubmit={() => {
            CreateReminder(title, description, date);
          }}
        >
          <CardContent sx={{ marginTop: "15px" }}>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                flexDirection: "column",
                borderRadius: "15px",
              }}
            >
              <Grid item>
                <Typography component="h1" variant="h5" color="primary.light">
                  New Reminder
                </Typography>
              </Grid>
              <Grid item>
                <CustomInput
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(event) => {
                    const value = event.target.value;
                    setTitle(value);
                  }}
                />
              </Grid>

              <Grid item>
                <Typography
                  component="h1"
                  variant="h6"
                  color="primary.light"
                  sx={{ marginTop: "10px" }}
                >
                  Description
                </Typography>
              </Grid>
              <Grid item>
                <CustomInput
                  fullWidth
                  id="outlined-multiline-static"
                  onChange={(event) => {
                    const value = event.target.value;
                    setDescription(value);
                  }}
                />
              </Grid>

              <Grid item>
                <Typography
                  component="h1"
                  variant="h6"
                  color="primary.light"
                  sx={{ marginTop: "10px" }}
                >
                  Date and Hour
                </Typography>
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <CustomInput {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Button
                variant="contained"
                disableElevation
                fullWidth
                type="submit"
                sx={{ marginTop: "10px" }}
              >
                Criar Lembrete
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
}
