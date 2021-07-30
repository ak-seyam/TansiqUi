import LoginCard from "../components/login/login-card";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
		height: "100vh",
		backgroundColor: "#dddddd"
      }}
    >
      <LoginCard />
    </div>
  );
}
