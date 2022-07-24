import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    fontFamily: "cursive",
    fontSize: "3rem",
    color: "#3ac2ff",
    marginBottom: "1rem",
  },
  search: {
    marginTop: "2vh",
  },
  labelSize: {
    fontSize: "0.93rem",
  },
  searchBoxSize: {
    width: "35vw",
    "@media (max-width: 900px)": {
      width: "50vw",
    },
    "@media (max-width: 400px)": {
      width: "65vw",
    },
  },
});

export default useStyles;
