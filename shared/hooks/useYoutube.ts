import { useQuery } from 'react-query';
import { getChannelInfo } from '../../service/api/youtube';

export const useChannel = (channelId: string, queryOptions?: any) => {
  return useQuery(['channel', channelId], () => getChannelInfo(channelId), {
    ...queryOptions,
  });
};
