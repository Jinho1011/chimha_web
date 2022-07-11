import type { NextPage } from 'next';
import { ChannelWrapper } from '@components/Youtube/Channel/styles';
import { channel_ids } from '@constants/youtube';

import Title from '@components/Common/Title';
import Section from '@components/Common/Section';
import Item from './Item';

const Youtube: NextPage = () => {
  return (
    <Section>
      <Title title='Youtube' subtitle='침투부 채널' />
      <ChannelWrapper>
        {channel_ids.map((channel) => {
          return <Item id={channel.id} key={channel.id} />;
        })}
      </ChannelWrapper>
    </Section>
  );
};

export default Youtube;
