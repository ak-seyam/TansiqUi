import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import LoginCard from "../components/login/login-card";
import login from "../controller/login";
import useAccountRedirect from "../hooks/use-account-redirect";

export default function LoginPage() {
  const router = useRouter();
  useAccountRedirect();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#dddddd",
      }}
    >
      <LoginCard login={login} />
    </div>
  );
}
