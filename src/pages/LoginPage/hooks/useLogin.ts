import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { apiClient } from "@/common/api/apiClient";
import { APP_ROUTES, STORAGE_KEYS, API_ENDPOINTS } from "@/constants/index";

export const LOGIN_STEPS = {
  FORM: "FORM",
  CHECK_INBOX: "CHECK_INBOX",
} as const;

type LoginStep = (typeof LOGIN_STEPS)[keyof typeof LOGIN_STEPS];

export interface LoginFormValues {
  email: string;
}

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("login.validation.invalidEmail")
      .required("login.validation.requiredEmail"),
  })
  .required();

export const useLogin = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<LoginStep>(LOGIN_STEPS.FORM);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastErrorKey, setToastErrorKey] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "" },
  });

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
      navigate(APP_ROUTES.DASHBOARD);
    }
  }, [navigate]);

  const onSubmit = async (data: LoginFormValues) => {
    setToastErrorKey(null);
    setIsLoading(true);
    try {
      await apiClient.post(API_ENDPOINTS.MAGIC_LINK, { email: data.email });
      setSubmittedEmail(data.email);
      setStep(LOGIN_STEPS.CHECK_INBOX);
    } catch (error) {
      console.error("Error sending email:", error);
      setToastErrorKey("login.errorSending");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = () => onSubmit({ email: submittedEmail });
  const handleBackToSignIn = () => setStep(LOGIN_STEPS.FORM);
  const handleBack = () => navigate(-1);
  const handleCloseToast = () => setToastErrorKey(null);

  return {
    step,
    submittedEmail,
    isLoading,
    toastErrorKey,
    control,
    handleSubmit,
    isValid,
    onSubmit,
    handleResend,
    handleBackToSignIn,
    handleBack,
    handleCloseToast,
  };
};
