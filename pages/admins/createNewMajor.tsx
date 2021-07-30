import CreateNewMajor from "../../components/create/create-new-major/create-new-major";

export default function createNewMajor() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
		height: "100vh"
      }}
    >
      <main>
        <CreateNewMajor
          majorsCreator={async (data) => {
            console.log(data);
          }}
        />
      </main>
    </div>
  );
}
