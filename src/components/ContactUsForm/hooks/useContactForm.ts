import { useForm } from "react-hook-form";
import { apiClient, ApiError } from "@/common/api";
import { useTranslation } from "react-i18next";
import type { AxiosResponse } from "axios";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

iziToast.settings({
  timeout: 6000,
  resetOnHover: true,
  transitionIn: "flipInX",
  transitionOut: "fadeOut",
  position: "topRight",
  theme: "dark",
  backgroundColor: "#131b2e",
  messageColor: "#c3c6d4",
  titleColor: "#fff",
  progressBarColor: "#b0c6ff",
});

export interface IContactInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IContactInput>();

  const onSubmit = async (data: IContactInput) => {
    try {
      const response: AxiosResponse<void> = await apiClient.post<
        void,
        IContactInput
      >("/contact-form", data);

      if (response.status === 201 || response.status === 200) {
        iziToast.success({
          message: t("contactUs.messages.success"),
        });
        reset();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "ERR_UNKNOWN";

      let translationKey = "errors.unknown";

      if (message === ApiError.Network) {
        translationKey = "errors.network";
      } else if (message.includes(ApiError.Server)) {
        translationKey = "errors.server";
      }
      iziToast.error({
        message: t(translationKey),
        backgroundColor: "#5e1b1b",
      });
    }
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors, control };
};
