import { useForm } from "react-hook-form";

export interface IContactInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: IContactInput) => {
    console.log("Дані форми:", data);
    // Тут API запит
    reset();
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
