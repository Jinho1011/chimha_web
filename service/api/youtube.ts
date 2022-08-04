import axios from 'axios';
import { FetchYoutubeChannelResponse } from '@interfaces/channel.interface';
import { FetchYoutubePlayListResponse } from '@interfaces/playlist.interface';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getChannelInfo = async (
  id: string
): Promise<FetchYoutubeChannelResponse> => {
  const url =
    BASE_URL +
    `/channels?id=${id}&part=id,snippet,statistics&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`;
  const response = await axios(url);
  return response.data;
};

export const getPlaylistInfo = async (
  id: string
): Promise<FetchYoutubePlayListResponse> => {
  const url =
    BASE_URL +
    `/playlists?id=${id}&part=id,snippet,status&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`;
  const response = await axios(url);
  return response.data;
};
