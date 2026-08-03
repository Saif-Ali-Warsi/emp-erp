import axios from "axios";
import type { EmployeeFormData } from "../types/employeeForm";

const BASE_URL = "https://dummyjson.com";

export async function getEmployees() {
  const response = await axios.get(`${BASE_URL}/users`);

  return response.data;
}

export async function deleteEmployee(id: number) {
  const response = await axios.delete(`${BASE_URL}/users/${id}`)

  return response.data;
}

export async function getEmployee(id: string) {
  const response = await axios.get(`${BASE_URL}/users/${id}`)

  return response.data;
}

export async function updateEmployee(
  id: string,
  data: EmployeeFormData
) {

  const response = await axios.put(`${BASE_URL}/users/${id}`, data)

  return response.data

}

