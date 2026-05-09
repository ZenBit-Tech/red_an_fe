import React from "react";
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { modalStyles } from "./styles";
import { useTranslation } from "react-i18next";

interface SendStatusModalProps {
  status: "idle" | "loading" | "success" | "error";
  onClose: () => void;
}

export const SendStatusModal: React.FC<SendStatusModalProps> = ({
  status,
  onClose,
}) => {
  const theme = useTheme();
  const styles = modalStyles(theme, status);
  const { t } = useTranslation();
  const isOpen = status === "success" || status === "error";

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: styles.backdrop,
        },
      }}
    >
      <Box sx={styles.container}>
        <Box sx={styles.outerCircle}>
          <Box sx={styles.innerCircle}>
            {status === "success" ? (
              <CheckIcon sx={styles.checkIcon} />
            ) : (
              <CloseIcon sx={styles.checkIcon} />
            )}
          </Box>
        </Box>

        <Typography sx={styles.title}>
          {status === "success"
            ? t("contactUs:contactUs.messages.success")
            : t("contactUs:contactUs.messages.error")}
        </Typography>

        <Typography sx={styles.subTitle}>
          {status === "success"
            ? t("contactUs:contactUs.messages.successSub")
            : t("contactUs:contactUs.messages.errorSub")}
        </Typography>

        <Button onClick={onClose} sx={styles.closeButton}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};
