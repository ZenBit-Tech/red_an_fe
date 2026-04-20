import { useForm } from "react-hook-form";
import type {
  Control,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { DEFAULT_DEIDENTIFY_SETTINGS } from "./constants";
import type { DeidentifySettingsFormData } from "./constants";

interface UseDeidentifySettingsProps {
  onAnalyze: (settings: DeidentifySettingsFormData) => Promise<void>;
  initialValues?: Partial<DeidentifySettingsFormData>;
}

interface UseDeidentifySettingsReturn {
  control: Control<DeidentifySettingsFormData>;
  handleSubmit: UseFormHandleSubmit<DeidentifySettingsFormData>;
  formState: FormState<DeidentifySettingsFormData>;
  isLoading: boolean;
  onSubmit: SubmitHandler<DeidentifySettingsFormData>;
}

export const useDeidentifySettings = ({
  onAnalyze,
  initialValues,
}: UseDeidentifySettingsProps): UseDeidentifySettingsReturn => {
  const defaultValues = { ...DEFAULT_DEIDENTIFY_SETTINGS, ...initialValues };

  const form = useForm<DeidentifySettingsFormData>({
    defaultValues,
    mode: "onChange",
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<DeidentifySettingsFormData> = async (data) => {
    try {
      await onAnalyze(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error("Failed to analyze de-identification settings");
    }
  };

  return {
    control: form.control,
    handleSubmit: form.handleSubmit,
    formState: form.formState,
    isLoading,
    onSubmit,
  };
};
