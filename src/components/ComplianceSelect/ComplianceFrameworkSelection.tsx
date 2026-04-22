import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useComplianceSelection } from "@/components/ComplianceSelect/useComplianceSelection";
import * as styles from "./styles";
import { handleSelectionCardKeyDown } from "@/components/ComplianceSelect/constants";
export const ComplianceFrameworkSelection: React.FC = () => {
  const { t, frameworks, selectedFramework, handleSelect } =
    useComplianceSelection();
  return (
    <styles.SelectionContainer>
      <styles.SelectionHeader>
        <styles.SelectionTitle component="h1">
          {t("compliance.selection.title")}{" "}
          <styles.SelectionTitleHighlight>
            {t("compliance.selection.titleHighlight")}
          </styles.SelectionTitleHighlight>
        </styles.SelectionTitle>
        <styles.SelectionSubtitle>
          {t("compliance.selection.subtitle")}
        </styles.SelectionSubtitle>
      </styles.SelectionHeader>

      <styles.CardsWrapper role="radiogroup">
        {frameworks.map((framework) => {
          const isSelected = selectedFramework === framework.id;
          const selectFramework = () => handleSelect(framework.id);
          const isDeveloper = framework.category
            ?.toLowerCase()
            .includes("developer");

          return (
            <styles.SelectionCard
              key={framework.id}
              selected={isSelected}
              elevation={0}
              onClick={selectFramework}
              onKeyDown={(event) =>
                handleSelectionCardKeyDown(event, selectFramework)
              }
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
            >
              <styles.FrameworkCategory
                selected={isSelected}
                isDeveloper={isDeveloper}
              >
                {framework.category}
              </styles.FrameworkCategory>

              <styles.FrameworkTitle>{framework.label}</styles.FrameworkTitle>

              <styles.FrameworkDescription>
                {framework.description}
              </styles.FrameworkDescription>

              <styles.CardFooter>
                {isSelected ? (
                  <styles.CardFooterLabel selected>
                    {t("compliance.selection.activeSelection")}
                    <CheckCircleOutlineIcon sx={styles.activeIcon} />
                    <styles.SelectedLine />
                  </styles.CardFooterLabel>
                ) : (
                  <styles.CardFooterLabel selected={false}>
                    {t("compliance.selection.selectProtocol")}
                    <ArrowForwardIcon sx={styles.inactiveIcon} />
                  </styles.CardFooterLabel>
                )}
              </styles.CardFooter>
            </styles.SelectionCard>
          );
        })}
      </styles.CardsWrapper>
    </styles.SelectionContainer>
  );
};
