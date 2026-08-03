import { useState } from "react";
import { useEffect } from "react";
import type { Employee } from "@/features/employees/types/employee";
import { getEmployee } from "@/features/employees/services/employeeService";



function useEmployee(id: string | undefined) {

    const [employee, setEmployee] = useState<Employee | null>(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    useEffect(() => {
        if (id) {
            loadEmployee();
        }
    }, [id]);


    async function loadEmployee() {
        if (!id) return;

        try {
            setLoading(true);
            setError("");

            const response = await getEmployee(id);

            setEmployee(response);
        } catch (error) {
            setError("Failed to load employee");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        employee,
        loading,
        error
    };
}


export default useEmployee




