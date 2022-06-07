import {
  ChannelContainer,
  ChannelDesc,
  ChannelThunb,
  ChannelTitle,
  ChannelTitleContainer,
} from "./Channel.style";

interface ChannelProps {
  id: string;
}

const Channel = ({ id }: ChannelProps) => {
  return (
    <ChannelContainer>
      <ChannelThunb />
      <ChannelTitleContainer>
        <ChannelTitle></ChannelTitle>
        <ChannelDesc></ChannelDesc>
      </ChannelTitleContainer>
    </ChannelContainer>
  );
};

export default Channel;
