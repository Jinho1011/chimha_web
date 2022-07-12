import styled from '@emotion/styled';

export const MediaWrapper = styled.div`
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr;
`;

export const PlaylistContainer = styled.div``;

export const PlaylistThumb = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.2rem;
  box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.06);
  margin-bottom: 4px;
`;

export const PlaylistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PlaylistTitle = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
`;

export const PlaylistChannelName = styled.span`
  font-weight: 400;
  font-size: 10px;
  color: #9c9c9c;
`;
