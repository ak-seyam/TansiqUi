import { Button, Card, TextField } from "@material-ui/core";
import { FC, SyntheticEvent, useState } from "react";
import { apiInstance } from "../../../services/api-instance";
import { AxiosError } from "axios";

const CreateBulkStudents: FC = () => {
  const [nameCol, setNameCol] = useState("");
  const [emailCol, setEmailCol] = useState("");
  const [passwordCol, setPasswordCol] = useState("");
  const [marksCol, setMarksCol] = useState("");
  const [file, setFile] = useState<any>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: SyntheticEvent) => {
    setSuccess(false);
    setError("");
    e.preventDefault();
    const formData = new FormData();
    formData.append("studentNameColumnName", nameCol);
    formData.append("studentMarkColumnName", marksCol);
    formData.append("studentEmailColumnName", emailCol);
    formData.append("studentPasswordColumnName", passwordCol);
    if (file !== null) {
      formData.append("file", file);
    } else {
      alert("file is required");
    }
    try {
      const data = await apiInstance
        .post("/core/studentFiles", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
      if (data != null) setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (e) {
      setError(e.response.message || e.message);
      // todo display it in a nicer way
    }
  };
  return (
    <Card style={{ width: "450px", margin: "24px 0px", padding: "24px" }}>
      <form onSubmit={handleSubmit} method="post">
        <TextField
          label="students names col name"
          fullWidth
          required
          value={nameCol}
          onChange={(e) => setNameCol(e.target.value)}
          name="studentNameColumnName"
        />
        <TextField
          label="student emails col name"
          fullWidth
          required
          value={emailCol}
          onChange={(e) => setEmailCol(e.target.value)}
          name="studentEmailColumnName"
        />
        <TextField
          label="student passwords col name"
          fullWidth
          required
          value={passwordCol}
          onChange={(e) => setPasswordCol(e.target.value)}
          name="studentPasswordColumnName"
        />
        <TextField
          label="student marks col name"
          fullWidth
          required
          value={marksCol}
          onChange={(e) => setMarksCol(e.target.value)}
          name="studentMarkColumnName"
        />
        <input
          style={{
            margin: "12px 0px",
          }}
          onChange={(e) => {
            if (e.target.files !== null) setFile(e.target.files[0]);
          }}
          required
          type="file"
          name="file"
          id="file"
          accept=".csv"
        />{" "}
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        {error}
        {success ? "Success" : ""}
      </form>
    </Card>
  );
};

export default CreateBulkStudents;
