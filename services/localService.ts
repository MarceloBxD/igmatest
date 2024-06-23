// services/localService.ts
import { AxiosError } from "axios";
import { notify } from "@/components/notify";
import { api } from "@/config/axios";

// Criar um novo local
export async function createLocal(data: any) {
  try {
    const response = await api.post("/create-local", data);

    if (response.status === 201) {
      notify("Local cadastrado com sucesso", "success");
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao cadastrar local", "error");
    }
  }
}

// Buscar locais
export async function getLocais() {
  try {
    const response = await api.get("/locais");

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao buscar locais", "error");
    }
  }
}
