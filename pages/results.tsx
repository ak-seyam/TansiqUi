import {
  AppBar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Toolbar,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { fetchResults } from "../controller/fetch";
export default function Results() {
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const _fetcher = async () => {
      const _res = await fetchResults();
      setResults(_res);
    };
    _fetcher();
  }, []);
  return (
    <div
      style={{
        padding: "24px",
        marginTop: "75px",
      }}
    >
      <AppBar position="fixed">
        <Toolbar
        >
          <Button
            onClick={(e) => {
              router.push("/");
            }}
          >
            <ArrowBack style={{ color: "white" }} color="inherit" />
          </Button>
          <Typography variant="h6">Results</Typography>
        </Toolbar>
      </AppBar>
      {results.length ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Major Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((elem, idx) => {
                return (
                  <TableRow key={elem.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{elem.student.name}</TableCell>
                    <TableCell>{elem.major.name}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h3>Sorry, Results are not ready yet</h3>
      )}
    </div>
  );
}
