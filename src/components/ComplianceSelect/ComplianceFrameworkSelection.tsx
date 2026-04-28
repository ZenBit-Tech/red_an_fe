import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useComplianceSelection } from "@/components/ComplianceSelect/useComplianceSelection";
import { handleSelectionCardKeyDown } from "@/components/ComplianceSelect/constants";
import * as S from "./styles";

export const ComplianceFrameworkSelection: React.FC = () => {
  const { t, frameworks, selectedFramework, handleSelect } =
    useComplianceSelection();

  return (
    <S.SelectionContainer>
      <S.SelectionHeader>
        <S.SelectionTitle>
          {t("compliance.selection.title")}{" "}
          <S.SelectionTitleHighlight>
            {t("compliance.selection.titleHighlight")}
          </S.SelectionTitleHighlight>
        </S.SelectionTitle>
        <S.SelectionSubtitle>
          {t("compliance.selection.subtitle")}
        </S.SelectionSubtitle>
      </S.SelectionHeader>

      <S.CardsWrapper role="radiogroup">
        {frameworks.map((framework) => {
          const isSelected = selectedFramework === framework.id;
          const selectFramework = () => handleSelect(framework.id);
          const isDeveloper = framework.category
            ?.toLowerCase()
            .includes("developer");

          return (
            <S.SelectionCard
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
              <S.FrameworkCategory
                selected={isSelected}
                isDeveloper={isDeveloper}
              >
                {framework.category}
              </S.FrameworkCategory>

              <S.FrameworkTitle>{framework.label}</S.FrameworkTitle>

              <S.FrameworkDescription>
                {framework.description}
              </S.FrameworkDescription>

              <S.CardFooter>
                {isSelected ? (
                  <S.CardFooterLabel selected>
                    {t("compliance.selection.activeSelection")}
                    <CheckCircleOutlineIcon />
                    <S.SelectedLine />
                  </S.CardFooterLabel>
                ) : (
                  <S.CardFooterLabel selected={false}>
                    {t("compliance.selection.selectProtocol")}
                    <ArrowForwardIcon />
                  </S.CardFooterLabel>
                )}
              </S.CardFooter>
            </S.SelectionCard>
          );
        })}
      </S.CardsWrapper>
    </S.SelectionContainer>
  );
};
