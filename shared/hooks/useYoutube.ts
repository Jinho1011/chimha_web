import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { getChannelInfo } from "../../service/api/youtube";
import { FetchYoutubeChannelResponse } from "../interfaces/youtube.interface";

export const useChannel = (
  channelId: string,
  queryOptions?: UseQueryOptions<
    FetchYoutubeChannelResponse,
    unknown,
    AxiosError,
    ["channel", string]
  >
) => {
  return useQuery(
    ["channel", channelId],
    () => getChannelInfo(channelId),
    queryOptions
  );
};
