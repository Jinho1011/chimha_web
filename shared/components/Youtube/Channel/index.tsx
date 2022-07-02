import { useChannel } from '../../../hooks/useYoutube';
import {
  ChannelContainer,
  ChannelDesc,
  ChannelThumb,
  ChannelTitle,
  ChannelTitleContainer,
} from './Channel.style';

interface ChannelProps {
  id: string;
}

const Channel = ({ id }: ChannelProps) => {
  const channelQuery = useChannel(id, {
    retry: false,
  });

  if (channelQuery.isLoading || channelQuery.isIdle) {
    return <ChannelContainer>loading..</ChannelContainer>;
  }

  if (channelQuery.isError) {
    return <ChannelContainer>error..</ChannelContainer>;
  }

  const data = channelQuery.data.items[0].snippet;

  return (
    <ChannelContainer>
      <ChannelThumb src={data.thumbnails.default.url} />
      <ChannelTitleContainer>
        <ChannelTitle>{data.title}</ChannelTitle>
        <ChannelDesc>{data.description}</ChannelDesc>
      </ChannelTitleContainer>
    </ChannelContainer>
  );
};

export default Channel;
