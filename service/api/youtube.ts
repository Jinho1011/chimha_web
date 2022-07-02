import axios from 'axios';
import { FetchYoutubeChannelResponse } from '../../shared/interfaces/youtube.interface';
import { YOUTUBE_KEY } from './api.key';

export const getChannelInfo = async (
  id: string
): Promise<FetchYoutubeChannelResponse> => {
  const url = `https://www.googleapis.com/youtube/v3/channels?id=${id}&part=id,snippet,statistics&key=${YOUTUBE_KEY}`;
  const response = await axios(url);
  return response.data;
};
