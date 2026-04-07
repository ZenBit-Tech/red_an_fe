import { useForm } from "react-hook-form";
import { apiClient, ApiError } from "@/common/api";
import { useTranslation } from "react-i18next";
import type { AxiosResponse } from "axios";

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
      >("/contact-us", data);

      if (response.status === 201 || response.status === 200) {
        alert(t("contactUs.messages.success"));
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

      // алерт з перекладом
      alert(t(translationKey));
    }
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors, control };
};
