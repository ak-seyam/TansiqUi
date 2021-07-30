import { makeStyles } from "@material-ui/core";

const useLoginStyles = makeStyles({
  root: {
    width: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
	paddingRight: "24px"
  },
  title: { display: "flex", justifyContent: "center" },
  content: {
    width: "100%",
  },
  form: {
    width: "100%",
  },
  ff: {
	  margin: "12px"
  }
});

export default useLoginStyles;
