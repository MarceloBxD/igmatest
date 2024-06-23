// services/ufService.ts
import { AxiosError } from "axios";
import { notify } from "@/components/notify";
import { api } from "@/config/axios";

// Criar uma nova UF
export async function createUf(data: any) {
  try {
    const response = await api.post("/create-uf", data);

    if (response.status === 201) {
      notify("UF cadastrada com sucesso", "success");
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao cadastrar UF", "error");
    }
  }
}

// Buscar UFs
export async function getUfs() {
  try {
    const response = await api.get("/ufs");

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao buscar UFs", "error");
    }
  }
}
