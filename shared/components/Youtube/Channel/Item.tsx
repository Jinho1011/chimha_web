import { useChannel } from '@hooks/useYoutube';
import {
  ChannelContainer,
  ChannelDesc,
  ChannelThumb,
  ChannelTitle,
  ChannelTitleContainer,
} from './styles';

interface ChannelProps {
  id: string;
}

const Channel = ({ id }: ChannelProps) => {
  const channelQuery = useChannel(id, {
    retry: false,
  });

  const navigateToChannel = (link:string) => {
    window.location.assign(`https://www.youtube.com/user/${link}`)
  }

  if (channelQuery.isLoading || channelQuery.isIdle) {
    return <ChannelContainer>loading..</ChannelContainer>;
  }

  if (channelQuery.isError) {
    return <ChannelContainer>error..</ChannelContainer>;
  }

  const data = channelQuery.data.items[0].snippet;

  console.log(channelQuery.data.items[0])

  return (
    <ChannelContainer onClick={() => navigateToChannel("")}>
      <ChannelThumb src={data.thumbnails.default.url} />
      <ChannelTitleContainer>
        <ChannelTitle>{data.title}</ChannelTitle>
        <ChannelDesc>{data.description}</ChannelDesc>
      </ChannelTitleContainer>
    </ChannelContainer>
  );
};

export default Channel;
