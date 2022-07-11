import { usePlaylist } from '@hooks/useYoutube';
import {
  PlaylistChannelName,
  PlaylistContainer,
  PlaylistInfoContainer,
  PlaylistThumb,
  PlaylistTitle,
} from './styles';

interface MediaProps {
  id: string;
}

const Item = ({ id }: MediaProps) => {
  const playlistQuery = usePlaylist(id, {
    retry: false,
  });

  if (playlistQuery.isLoading || playlistQuery.isIdle) {
    return <PlaylistContainer>loading..</PlaylistContainer>;
  }

  if (playlistQuery.isError) {
    return <PlaylistContainer>error..</PlaylistContainer>;
  }

  const data = playlistQuery.data.items[0].snippet;

  return (
    <PlaylistContainer>
      <PlaylistThumb src={data.thumbnails.medium.url} />
      <PlaylistInfoContainer>
        <PlaylistTitle>{data.title}</PlaylistTitle>
        <PlaylistChannelName>{data.channelTitle}</PlaylistChannelName>
      </PlaylistInfoContainer>
    </PlaylistContainer>
  );
};

export default Item;
