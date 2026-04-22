import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/index";
import * as styles from "@/components/DashboardLayout/styles";
import { useDashboardLayout } from "@/components/DashboardLayout/hooks/useDashboardLayout";
import TopBar from "@/components/TopBar/index";

export const DashboardLayout = () => {
  const { activeNav, setActiveNav, userEmail } = useDashboardLayout();

  return (
    <Box sx={styles.layoutWrapper}>
      <Box sx={styles.bodyWrapper}>
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
        <Box sx={styles.rightContent}>
          <TopBar userEmail={userEmail} />
          <Box sx={styles.mainContent}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
