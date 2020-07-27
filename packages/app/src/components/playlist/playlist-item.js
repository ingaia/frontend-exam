/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useTheme } from '@witcher-page/ui';

const PlaylistItem = ({data, clickFn}) => {
  const theme = useTheme();

  const cardSmall = css`
    width: 308px;
    height: 231px;
    img {
      height: 231px;
    }
  `;

  const cardBig = css`
    width: 385px;
    height: 289px;
    img {
      height: 289px;
    }
  `;

  const cardStyle = css`
    width: 308px;
    height: 231px;
    border: 1px solid ${theme.card.borderColor};
    overflow: hidden;
    &:hover {
      border: 1px solid ${theme.card.borderColorHover};
    }
    a, a:visited {
      display: block;
      color: #fff;
      position: relative;
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: 231px;
    }
    span {
      padding-left: 0.5rem;
      display: block;
      background-color: rgba(0, 0, 0, .7);
      height: 39px;
      line-height: 39px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      white-space: nowrap;
    }
    @media screen and (min-width: 448px) {
      ${cardBig};
    }
    @media screen and (min-width: 780px) {
      ${cardSmall};
    }
    @media screen and (min-width: 870px) {
      ${cardBig};
    }
    @media screen and (min-width: 1120px) {
      ${cardSmall};
    }
    @media screen and (min-width: 1280px) {
      ${cardBig};
    }
  `;

  const { title, thumbnails, resourceId, playlistId } = data.snippet;

  const load = clickFn(resourceId.videoId);

  return (
    <li css={cardStyle}>
      <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}&list=${playlistId}`} onClick={load}>
        <img src={thumbnails.high.url} width={thumbnails.high.width} height={thumbnails.high.height} alt={title} />
        <span>{title}</span>
      </a>
    </li>
  );
};

export default PlaylistItem;
