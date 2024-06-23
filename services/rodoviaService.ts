// services/rodoviaService.ts
import { AxiosError } from "axios";
import { notify } from "@/components/notify";
import { api } from "@/config/axios";

// Criar uma nova rodovia
export async function createRodovia(data: any) {
  try {
    const response = await api.post("/create-rodovia", data);

    if (response.status === 201) {
      notify("Rodovia cadastrada com sucesso", "success");
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao cadastrar rodovia", "error");
    }
  }
}

// Buscar rodovias
export async function getRodovias() {
  try {
    const response = await api.get("/rodovias");

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao buscar rodovias", "error");
    }
  }
}
