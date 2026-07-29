import { useState } from "react";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";

function Dashboard() {
  const [name, setName] = useState("");

  return (
    <>
      <h1>Dashboard Page</h1>

      <Input
        label="Employee Name"
        name="employeeName"
        placeholder="Enter employee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>

      <Button>SAVE</Button>
    </>
  );
}

export default Dashboard;
