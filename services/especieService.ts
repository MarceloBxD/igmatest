// services/especieService.ts
import { AxiosError } from "axios";
import { notify } from "@/components/notify";
import { api } from "@/config/axios";

// Criar uma nova espécie
export async function createEspecie(data: any) {
  try {
    const response = await api.post("/create-especie", data);

    if (response.status === 201) {
      notify("Espécie cadastrada com sucesso", "success");
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao cadastrar espécie", "error");
    }
  }
}

// Buscar espécies
export async function getEspecies() {
  try {
    const response = await api.get("/especies");

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      notify("Erro ao buscar espécies", "error");
    }
  }
}
