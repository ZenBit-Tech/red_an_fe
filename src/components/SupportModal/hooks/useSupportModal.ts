import { useCallback, useEffect, useRef, useState } from "react";
import {
  useForm,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import type { SupportFormValues } from "@/components/SupportModal/constants";

interface UseSupportModalReturn {
  register: UseFormRegister<SupportFormValues>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<SupportFormValues>;
  isSuccess: boolean;
  isButtonDisabled: boolean;
  attachment: File | null;
  selectedCategory: string;
  isDropdownOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleCategorySelect: (category: string) => void;
  toggleDropdown: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveFile: () => void;
  handleClose: () => void;
  handleExited: () => void;
}

export const useSupportModal = (onClose: () => void): UseSupportModalReturn => {
  const {
    register,
    handleSubmit: rhfHandleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<SupportFormValues>({
    defaultValues: { fullName: "", email: "", issueCategory: "", message: "" },
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [fullName, email, issueCategory, message] = watch([
    "fullName",
    "email",
    "issueCategory",
    "message",
  ]);

  const selectedCategory = issueCategory;
  const isButtonDisabled =
    !fullName.trim() &&
    !email.trim() &&
    !issueCategory &&
    !message.trim() &&
    !attachment;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCategorySelect = useCallback(
    (category: string) => {
      setValue("issueCategory", category, { shouldValidate: true });
      setIsDropdownOpen(false);
    },
    [setValue],
  );

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;
      setAttachment(file);
      e.target.value = "";
    },
    [],
  );

  const handleRemoveFile = useCallback(() => {
    setAttachment(null);
  }, []);

  // Only closes the dialog; state reset happens in handleExited after animation
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Called by Dialog's TransitionProps.onExited — runs after close animation finishes
  const handleExited = useCallback(() => {
    reset();
    setIsSuccess(false);
    setAttachment(null);
    setIsDropdownOpen(false);
  }, [reset]);

  const onSubmit = useCallback(() => {
    setIsSuccess(true);
  }, []);

  useEffect(() => {
    if (!isSuccess) return;
    const timer = setTimeout(handleClose, 5000);
    return () => clearTimeout(timer);
  }, [isSuccess, handleClose]);

  return {
    register,
    handleSubmit: rhfHandleSubmit(onSubmit),
    errors,
    isSuccess,
    isButtonDisabled,
    attachment,
    selectedCategory,
    isDropdownOpen,
    dropdownRef: dropdownRef as React.RefObject<HTMLDivElement>,
    handleCategorySelect,
    toggleDropdown,
    handleFileChange,
    handleRemoveFile,
    handleClose,
    handleExited,
  };
};
