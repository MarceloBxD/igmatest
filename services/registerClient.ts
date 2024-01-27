import axios from "axios";
import { AxiosError } from "axios";
import { notify } from "@/components/notify";

axios.defaults.baseURL = "http://localhost:3000/api";

export async function registerClient(data: any) {
  try {
    console.log(data);
    const response = await axios.post("/create-client", data);

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
