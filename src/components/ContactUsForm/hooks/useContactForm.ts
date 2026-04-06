import { useForm } from "react-hook-form";
import { apiClient, ApiError } from "@/common/api";
import { useTranslation } from "react-i18next";

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
    reset,
  } = useForm<IContactInput>();

  const onSubmit = async (data: IContactInput) => {
    // DELETE LOG!!!!!!!!!!
    console.log("Contact Form Data:", data);

    try {
      await apiClient.post<void, IContactInput>("/contact-us", data);

      alert(t("contactUs.messages.success"));
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "";

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

  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
