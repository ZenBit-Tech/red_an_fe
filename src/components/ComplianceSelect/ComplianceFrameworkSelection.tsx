import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useComplianceSelection } from "@/components/ComplianceSelect/useComplianceSelection";
import {
  CardFooter,
  CardFooterLabel,
  FrameworkCategory,
  FrameworkDescription,
  FrameworkTitle,
  SelectionCard,
  SelectionContainer,
  SelectionHeader,
  SelectionSubtitle,
  SelectionTitle,
  SelectionTitleHighlight,
  CardsWrapper,
  SelectedLine,
} from "@/components/ComplianceSelect/styles";

const handleSelectionCardKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  onToggle: () => void,
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onToggle();
  }
};

export const ComplianceFrameworkSelection: React.FC = () => {
  const { t, frameworks, selectedFramework, handleSelect } =
    useComplianceSelection();

  return (
    <SelectionContainer>
      <SelectionHeader>
        <SelectionTitle component="h1">
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
                    <CheckCircleOutlineIcon sx={{ fontSize: 18 }} />
                    <SelectedLine />
                  </CardFooterLabel>
                ) : (
                  <CardFooterLabel selected={false}>
                    {t("compliance.selection.selectProtocol")}
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
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
