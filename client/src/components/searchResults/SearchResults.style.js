import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  displaySpaces: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem",
  },

  dimensionsCard: {
    height: "20%",
    margin: "0px 13px 13px 13px",
    width: "28%",
    "@media (max-width: 1017px)": {
      width: "44%",
    },
    "@media (max-width: 533px)": {
      width: "84%",
    },
  },

  designCard: {
    backgroundColor: "#3ac2ff",
    borderRadius: "10px",
  },

  designTitleCard: {
    color: "white",
    textShadow: "1px 1px black",
  },

  designDetailsCard: {
    color: "black",
  },
});
export default useStyles;
