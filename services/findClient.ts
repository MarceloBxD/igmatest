import { AxiosError } from "axios";
import { notify } from "@/components/notify";
import { api } from "@/config/axios";

export async function findClient(data: any) {
  try {
    console.log(data);
    const response = await api.post("/clients", data);

    if (response.status === 201) {
      notify("Cliente cadastrado com sucesso", "success");
    }
  } catch (err) {
    if (
      err instanceof AxiosError &&
      err?.response?.data.message === "Client already exists"
    ) {
      return notify("Cliente já cadastrado no sistema", "warning");
    }

    notify("Erro ao cadastrar cliente", "error");
  }
}
