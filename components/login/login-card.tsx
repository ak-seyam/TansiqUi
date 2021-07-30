import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { FC } from "react";
import useLoginStyles from "./hooks/classes";

const LoginCard: FC = () => {
  const classes = useLoginStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title}>Login</Typography>
        <form className={classes.form}>
          <TextField fullWidth label="email" className={classes.ff} />
          <TextField fullWidth label="password" className={classes.ff} />
          <Button variant="contained" fullWidth className={classes.ff} >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
export default LoginCard;
