import type { NextPage } from 'next';
import { ChannelWrapper } from '../shared/components/Youtube/Channel/styles';
import { channel_ids } from '../shared/constants/youtube';

import Title from '../shared/components/Common/Title';
import Channel from '../shared/components/Youtube/Channel';

const Youtube: NextPage = () => {
  return (
    <>
      <Title title='Youtube' subtitle='침투부 채널' />
      <ChannelWrapper>
        {channel_ids.map((channel) => {
          return <Channel id={channel.id} key={channel.id} />;
        })}
      </ChannelWrapper>
    </>
  );
};

export default Youtube;
