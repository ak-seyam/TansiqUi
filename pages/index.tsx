import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import useAccountRedirect from "../hooks/use-account-redirect";
import styles from "../styles/Home.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

export default function Home() {
  useAccountRedirect();
  const router = useRouter();
  const handleLoginClicked = () => {
    router.push("/login");
  };
  const handleResults = () => {
    router.push("/results");
  };
  return (
    <div className={styles.container}>
      <h1>Welcome to Tansiq 👋</h1>
      <p>
        Tansiq is a simple web application that matches students to their
        desired majors
      </p>
      you can either
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{ margin: "16px" }}
          variant="contained"
          onClick={handleLoginClicked}
        >
          <AccountCircleIcon color="primary" />
          Login
        </Button>{" "}
        or
        <Button
          style={{ margin: "16px" }}
          variant="contained"
          onClick={handleResults}
        >
          <FormatListNumberedIcon color="secondary" />
          See results
        </Button>
      </div>
    </div>
  );
}
