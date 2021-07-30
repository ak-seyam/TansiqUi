import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const handleLoginClicked = () => {
    router.push("/login");
  };
  return (
    <div className={styles.container}>
      <Button onClick={handleLoginClicked}>Login</Button>
      Welcome to tansiq
    </div>
  );
}
