import { useQuery } from 'react-query';
import { getChannelInfo, getPlaylistInfo } from '@api/youtube';

export const useChannel = (channelId: string, queryOptions?: any) => {
  return useQuery(['channel', channelId], () => getChannelInfo(channelId), {
    ...queryOptions,
  });
};

export const usePlaylist = (playlistId: string, queryOptions?: any) => {
  return useQuery(['playlist', playlistId], () => getPlaylistInfo(playlistId), {
    ...queryOptions,
  });
};
