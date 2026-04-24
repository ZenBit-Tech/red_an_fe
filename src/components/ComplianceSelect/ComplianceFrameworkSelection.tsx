import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useComplianceSelection } from "@/components/ComplianceSelect/useComplianceSelection";
import { handleSelectionCardKeyDown } from "@/components/ComplianceSelect/constants";
import {
  CardsWrapper,
  CardFooter,
  CardFooterLabel,
  FrameworkCategory,
  FrameworkDescription,
  FrameworkTitle,
  SelectedLine,
  SelectionCard,
  SelectionContainer,
  SelectionHeader,
  SelectionSubtitle,
  SelectionTitle,
  SelectionTitleHighlight,
} from "@/components/ComplianceSelect/styles";

export const ComplianceFrameworkSelection: React.FC = () => {
  const { t, frameworks, selectedFramework, handleSelect } =
    useComplianceSelection();

  return (
    <SelectionContainer>
      <SelectionHeader>
        <SelectionTitle>
          {t("compliance.selection.title")}{" "}
          <SelectionTitleHighlight>
            {t("compliance.selection.titleHighlight")}
          </SelectionTitleHighlight>
        </SelectionTitle>
        <SelectionSubtitle>
          {t("compliance.selection.subtitle")}
        </SelectionSubtitle>
      </SelectionHeader>

      <CardsWrapper role="radiogroup">
        {frameworks.map((framework) => {
          const isSelected = selectedFramework === framework.id;
          const selectFramework = () => handleSelect(framework.id);
          const isDeveloper = framework.category
            ?.toLowerCase()
            .includes("developer");

          return (
            <SelectionCard
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
              <FrameworkCategory
                selected={isSelected}
                isDeveloper={isDeveloper}
              >
                {framework.category}
              </FrameworkCategory>

              <FrameworkTitle>{framework.label}</FrameworkTitle>

              <FrameworkDescription>
                {framework.description}
              </FrameworkDescription>

              <CardFooter>
                {isSelected ? (
                  <CardFooterLabel selected>
                    {t("compliance.selection.activeSelection")}
                    <CheckCircleOutlineIcon />
                    <SelectedLine />
                  </CardFooterLabel>
                ) : (
                  <CardFooterLabel selected={false}>
                    {t("compliance.selection.selectProtocol")}
                    <ArrowForwardIcon />
                  </CardFooterLabel>
                )}
              </CardFooter>
            </SelectionCard>
          );
        })}
      </CardsWrapper>
    </SelectionContainer>
  );
};
