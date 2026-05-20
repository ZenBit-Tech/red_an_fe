import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckIcon from "@mui/icons-material/Check";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

import { ISSUE_CATEGORIES } from "@/components/SupportModal/constants";
import { useSupportModal } from "@/components/SupportModal/hooks/useSupportModal";
import * as S from "@/components/SupportModal/styles";

interface SupportModalProps {
  open: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  open,
  onClose,
}) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    errors,
    isSuccess,
    isButtonDisabled,
    attachment,
    selectedCategory,
    isDropdownOpen,
    dropdownRef,
    handleCategorySelect,
    toggleDropdown,
    handleFileChange,
    handleRemoveFile,
    handleClose,
    handleExited,
  } = useSupportModal(onClose);

  const { ref: messageRef, ...messageRest } = register("message", {
    required: t("supportModal.validation.messageRequired"),
  });

  return (
    <S.StyledDialog
      open={open}
      onClose={handleClose}
      disablePortal={false}
      isSuccess={isSuccess}
      TransitionProps={{ onExited: handleExited }}
    >
      {!isSuccess && (
        <S.ModalHeader>
          <S.ModalTitle>{t("supportModal.title")}</S.ModalTitle>
          <S.CloseButton onClick={handleClose} size="small">
            <CloseIcon />
          </S.CloseButton>
        </S.ModalHeader>
      )}

      {isSuccess ? (
        <S.SuccessContainer>
          <S.SuccessIconCircle>
            <CheckIcon />
          </S.SuccessIconCircle>
          <S.SuccessTitle>{t("supportModal.thankYouTitle")}</S.SuccessTitle>
          <S.SuccessSubtitle>
            {t("supportModal.thankYouSubtitle")}
          </S.SuccessSubtitle>
        </S.SuccessContainer>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <S.FormBody>
            {/* Full Name */}
            <S.FieldWrapper>
              <S.FieldLabel>{t("supportModal.fullName")}</S.FieldLabel>
              <S.StyledInputBase
                placeholder={t("supportModal.fullNamePlaceholder")}
                data-error={!!errors.fullName}
                {...register("fullName", {
                  required: t("supportModal.validation.required"),
                })}
              />
              {errors.fullName && (
                <S.FieldError>{errors.fullName.message}</S.FieldError>
              )}
            </S.FieldWrapper>

            {/* Email */}
            <S.FieldWrapper>
              <S.FieldLabel>{t("supportModal.email")}</S.FieldLabel>
              <S.StyledInputBase
                type="email"
                placeholder={t("supportModal.emailPlaceholder")}
                data-error={!!errors.email}
                {...register("email", {
                  required: t("supportModal.validation.required"),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t("supportModal.validation.invalidEmail"),
                  },
                })}
              />
              {errors.email && (
                <S.FieldError>{errors.email.message}</S.FieldError>
              )}
            </S.FieldWrapper>

            {/* Issue Category */}
            <S.FieldWrapper>
              <S.FieldLabel>{t("supportModal.issueCategory")}</S.FieldLabel>
              <input
                type="hidden"
                {...register("issueCategory", {
                  required: t("supportModal.validation.categoryRequired"),
                })}
              />
              <S.DropdownWrapper ref={dropdownRef}>
                <S.DropdownTrigger
                  onClick={toggleDropdown}
                  isOpen={isDropdownOpen}
                  hasError={!!errors.issueCategory}
                >
                  <S.DropdownTriggerText hasValue={!!selectedCategory}>
                    {selectedCategory ||
                      t("supportModal.issueCategoryPlaceholder")}
                  </S.DropdownTriggerText>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "textColors.200",
                      fontSize: 20,
                      transform: isDropdownOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </S.DropdownTrigger>
                {isDropdownOpen && (
                  <S.DropdownList>
                    {ISSUE_CATEGORIES.map((category) => (
                      <S.DropdownItem
                        key={category}
                        isSelected={selectedCategory === category}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </S.DropdownItem>
                    ))}
                  </S.DropdownList>
                )}
              </S.DropdownWrapper>
              {errors.issueCategory && (
                <S.FieldError>{errors.issueCategory.message}</S.FieldError>
              )}
            </S.FieldWrapper>

            {/* Message */}
            <S.FieldWrapper>
              <S.FieldLabel>{t("supportModal.message")}</S.FieldLabel>
              <S.TextAreaWrapper>
                <S.StyledTextArea
                  placeholder={t("supportModal.messagePlaceholder")}
                  hasError={!!errors.message}
                  ref={messageRef}
                  {...messageRest}
                />
                {attachment && (
                  <S.AttachmentChip>
                    <S.AttachmentFileIcon>
                      <InsertDriveFileOutlinedIcon />
                    </S.AttachmentFileIcon>
                    <S.AttachmentFileName>
                      {attachment.name}
                    </S.AttachmentFileName>
                    <S.RemoveFileButton size="small" onClick={handleRemoveFile}>
                      <CloseRoundedIcon />
                    </S.RemoveFileButton>
                  </S.AttachmentChip>
                )}
                <S.PaperclipButton
                  size="small"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <AttachFileIcon fontSize="small" />
                </S.PaperclipButton>
              </S.TextAreaWrapper>
              {errors.message && (
                <S.FieldError>{errors.message.message}</S.FieldError>
              )}
            </S.FieldWrapper>

            <S.HiddenFileInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </S.FormBody>

          <S.SendButton type="submit" disabled={isButtonDisabled}>
            {t("supportModal.sendRequest")}
          </S.SendButton>
        </form>
      )}
    </S.StyledDialog>
  );
};

export default SupportModal;
