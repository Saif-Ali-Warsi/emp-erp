import * as yup from "yup";

export const employeeSchema = yup.object({

 firstName: yup
        .string()
        .required("Name is required"),

    lastName: yup
        .string()
        .required("Last name is required")

})