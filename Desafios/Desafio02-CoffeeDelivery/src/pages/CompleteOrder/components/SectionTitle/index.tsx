import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  );
}
