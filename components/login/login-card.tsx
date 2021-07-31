import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { FC, useState } from "react";
import { USER_ROlE_LOCAL_STORAGE_NAME } from "../../models/CONSTANTS";
import useLoginStyles from "./hooks/classes";

interface LoginCardProps {
  login: (email: string, password: string) => Promise<any>;
}

const LoginCard: FC<LoginCardProps> = ({ login }) => {
  const classes = useLoginStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()
  const loginHandler = async (e: React.SyntheticEvent) => {
    setError("");
    e.preventDefault();
    const [err, _] = await login(email, password);
    if (err) setError(err);
	if(localStorage.getItem(USER_ROlE_LOCAL_STORAGE_NAME) === "ROLE_ADMIN") {
		// redirect to admin CP
		router.push("/admins")
	}
	else if (localStorage.getItem(USER_ROlE_LOCAL_STORAGE_NAME) === "ROLE_STUDENT") {
		// redirect to student CP
	}
  };
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title}>Login</Typography>
        <form className={classes.form} onSubmit={loginHandler}>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="email"
            className={classes.ff}
          />
          <TextField
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="password"
            className={classes.ff}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={classes.ff}
          >
            Login
          </Button>
        </form>
        {error}
      </CardContent>
    </Card>
  );
};
export default LoginCard;
