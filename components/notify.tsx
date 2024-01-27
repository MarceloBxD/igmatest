import { toast } from "react-toastify";

export const notify = (
  message: string,
  type: "success" | "warning" | "error" | "info"
) => {
  const toastFunction =
    {
      success: toast.success,
      error: toast.error,
      warning: toast.warning,
      info: toast.info,
    }[type] || toast;

  toastFunction(message);
};
