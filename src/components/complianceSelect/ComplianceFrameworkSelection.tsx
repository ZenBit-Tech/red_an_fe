import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useComplianceSelection } from "@/components/complianceSelect/useComplianceSelection";
import {
  CardHeader,
  FrameworkChip,
  FrameworkDescription,
  FrameworkEntityCount,
  SelectionCard,
  SelectionContainer,
  SelectionListHeader,
  SelectionListSubtitle,
  SelectedIconWrapper,
  SelectionSubtitle,
  SelectionTitle,
} from "@/components/complianceSelect/styles";

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
      <SelectionTitle gutterBottom>
        {t("compliance.selection.title")}
      </SelectionTitle>
      <SelectionSubtitle>
        {t("compliance.selection.subtitle")}
      </SelectionSubtitle>

      <SelectionListHeader>
        {t("compliance.selection.listHeader")}
      </SelectionListHeader>
      <SelectionListSubtitle>
        {t("compliance.selection.listSubtitle")}
      </SelectionListSubtitle>

      <Grid
        container
        columnSpacing={{ xs: 0, sm: 2 }}
        rowSpacing={{ xs: 1.5, sm: 2.5 }}
        role="radiogroup"
      >
        {frameworks.map((framework) => {
          const isSelected = selectedFramework === framework.id;
          const selectFramework = () => handleSelect(framework.id);

          return (
            <Grid key={framework.id} size={{ xs: 12, sm: 6 }}>
              <SelectionCard
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
                <CardHeader>
                  <FrameworkChip
                    frameworkId={framework.id}
                    label={framework.label}
                    size="small"
                  />
                  {isSelected && (
                    <SelectedIconWrapper>
                      <CheckIcon fontSize="inherit" />
                    </SelectedIconWrapper>
                  )}
                </CardHeader>

                <FrameworkDescription>
                  {framework.description}
                </FrameworkDescription>

                {framework.entityCount !== undefined && (
                  <FrameworkEntityCount>
                    {framework.entityCount}{" "}
                    {t("compliance.selection.entityTypes")}
                  </FrameworkEntityCount>
                )}
              </SelectionCard>
            </Grid>
          );
        })}
      </Grid>
    </SelectionContainer>
  );
};
