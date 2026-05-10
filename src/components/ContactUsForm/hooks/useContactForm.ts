import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const [sendingStatus, setSendingStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<IContactInput>();

  const handleCloseModal = () => setSendingStatus("idle");

  const MAX_CHARS = 3000;
  const messageValue = watch("message") || "";

  const onSubmit = async (data: IContactInput) => {
    setSendingStatus("loading");
    try {
      const response: AxiosResponse<void> = await apiClient.post<
        void,
        IContactInput
      >("/contact-form", data);

      if (response.status === 201 || response.status === 200) {
        setSendingStatus("success");
        reset();
      }
    } catch (err) {
      setSendingStatus("error");
      const message = err instanceof Error ? err.message : "ERR_UNKNOWN";

      let translationKey = "errors.unknown";

      if (message === ApiError.Network) {
        translationKey = "errors.network";
      } else if (message.includes(ApiError.Server)) {
        translationKey = "errors.server";
      }
      console.error(t(translationKey));
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    control,
    sendingStatus,
    handleCloseModal,
    messageLength: messageValue.length,
    MAX_CHARS,
  };
};
