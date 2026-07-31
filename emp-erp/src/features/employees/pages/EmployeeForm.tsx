import { useState } from "react";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";

function EmployeeForm() {

  const [name, setName] = useState("");

  return (
    <>
      <h1>Employee Form</h1>
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

export default EmployeeForm;
