import { MediaWrapper } from './styles';
import { media_ids } from '@constants/youtube';
import Section from '@components/Common/Section';
import Title from '@components/Common/Title';
import Item from './Playlist';

const Media = () => {
  return (
    <Section>
      <Title title='Media' subtitle='침착맨 외부 방송' />
      <MediaWrapper>
        {media_ids.map((media) => (
          <Item id={media.id} key={media.id} />
        ))}
      </MediaWrapper>
    </Section>
  );
};

export default Media;
