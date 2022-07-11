import type { NextPage } from 'next';
import Channel from '@components/Youtube/Channel';
import Media from '@components/Youtube/Media';

const Youtube: NextPage = () => {
  return (
    <>
      <Channel />
      <Media />
    </>
  );
};

export default Youtube;
