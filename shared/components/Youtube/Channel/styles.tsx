import styled from "@emotion/styled";

const ChannelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem 1.2rem 1rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
`;

const ChannelThumb = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
`;

const ChannelTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChannelTitle = styled.h4`
  font-weight: 400;
  font-size: 1.2rem;
`;

const ChannelDesc = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #999999;
`;

export {
  ChannelWrapper,
  ChannelContainer,
  ChannelThumb,
  ChannelTitleContainer,
  ChannelTitle,
  ChannelDesc,
};
