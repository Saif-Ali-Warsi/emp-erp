import api from "@/services/api"
import type { EmployeeFormData } from "../types/employeeForm";

export async function getEmployees() {
  const response = await api.get(`/users`);

  return response.data;
}

export async function deleteEmployee(id: number) {
  const response = await api.delete(`/users/${id}`)

  return response.data;
}

export async function getEmployee(id: string) {
  const response = await api.get(`/users/${id}`)

  return response.data;
}

export async function updateEmployee(
  id: string,
  data: EmployeeFormData
) {

  const response = await api.put(`/users/${id}`, data)

  return response.data

}

export async function createEmployee(data: EmployeeFormData) {
  const response = await api.post(`/users/add`, data)

  return response.data
}
