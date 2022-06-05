import { useQuery } from "react-query";

import { getChannelInfo } from "../../service/api/youtube";

export default function useYoutube(id: string) {
  return useQuery(["channel", id], () => getChannelInfo(id));
}
