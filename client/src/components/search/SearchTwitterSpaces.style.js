import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(()=>({
  search: {
    marginTop: "35vh",
  },
  labelSize: {
    fontSize: "0.93rem",

  },
  searchBoxSize: {
    width: "35vw",
    "@media (max-width: 900px)" : {
        width: "50vw",
    },
    "@media (max-width: 400px)" : {
        width: "65vw",
    }
  }
}));
