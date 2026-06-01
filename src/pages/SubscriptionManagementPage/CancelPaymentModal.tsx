import React from "react";
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { modalStyles } from "./styles";
import { useTranslation } from "react-i18next";

interface CancelPaymentModalProps {
  status: "idle" | "loading" | "success" | "error";
  onClose: () => void;
}

export const CancelPaymentModal: React.FC<CancelPaymentModalProps> = ({
  status,
  onClose,
}) => {
  const theme = useTheme();
  const styles = modalStyles(theme, status);
  const { t } = useTranslation("subscriptionManagement");
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

        <Typography sx={styles.title}>{t("cancelInfoModal.title")}</Typography>

        <Typography sx={styles.subTitle}>
          {t("cancelInfoModal.description")}
        </Typography>

        <Button onClick={onClose} sx={styles.closeButton}>
          {t("cancelInfoModal.button")}
        </Button>
      </Box>
    </Modal>
  );
};
