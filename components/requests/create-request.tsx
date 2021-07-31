import { Button, Card, CardContent, Icon } from "@material-ui/core";
import { useState, useEffect, Fragment as div } from "react";
import { FC } from "react";
import MajorData from "../../models/MajorData";
import MajorsRanks from "../../models/MajorsRanks";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";

interface CreateRequestProps {
  majorsFetcher: () => Promise<MajorData[]>;
  requestCreate: (studentId: string, majorsRank: MajorsRanks[]) => Promise<any>;
  studentId: string;
}

const CreateRequest: FC<CreateRequestProps> = ({
  majorsFetcher,
  requestCreate,
  studentId,
}) => {
  const [majors, setMajors] = useState<MajorData[]>([]);
  useEffect(() => {
    const fetcher = async () => {
      const m = await majorsFetcher();
      console.log(m);
      setMajors(m);
    };
    fetcher();
  }, []);

  const handleSubmit = () => {
    requestCreate(
      studentId,
      majors.map((m, idx) => {
        return { majorId: m.id, rank: idx + 1 };
      })
    );
  };

  const swap = (arr: any[], idx1: number, idx2: number) => {
    const tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
  };
  const upHandler = (index: number) => {
    return () => {
      if (index > 0) {
        // create a clone of majors
        const majorsClone = [...majors];
        // swap the index with above if index != 0
        swap(majorsClone, index, index - 1);
        console.log(majorsClone);
        setMajors(majorsClone);
      }
    };
  };
  const downHandler = (index: number) => {
    return () => {
      if (index < majors.length - 1) {
        // create a clone of majors
        const majorsClone = [...majors];
        // swap the index with above if index != 0
        swap(majorsClone, index, index + 1);
        setMajors(majorsClone);
      }
    };
  };
  return (
    <>
      <div>
        {majors.map((major, idx) => {
          return (
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
              key={major.id}
            >
              <Card key={major.id} style={{ margin: "8px", width: "100%" }}>
                <CardContent>{major.name}</CardContent>
              </Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Button onClick={upHandler(idx)}>
                  <ArrowUpward />
                </Button>
                <Button onClick={downHandler(idx)}>
                  <ArrowDownward />
                </Button>
              </div>
            </div>
          );
        })}
        <Button
          onClick={handleSubmit}
          style={{ margin: "8px" }}
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default CreateRequest;
