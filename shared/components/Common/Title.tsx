import styled from "@emotion/styled";

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <SubtitleText>{subtitle}</SubtitleText>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div``;

const TitleText = styled.h2``;

const SubtitleText = styled.h3``;
