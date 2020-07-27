/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Playlist = ({ children }) => {
  const playlistStyle = css`
    padding: 0;
    margin: 20px;
    list-style: none;
    display: grid;
    grid-template-columns: 308px;
    column-gap: 20px;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    @media screen and (min-width: 448px) {
      grid-template-columns: 385px;
    }
    @media screen and (min-width: 780px) {
      grid-template-columns: 308px 308px;
    }
    @media screen and (min-width: 870px) {
      grid-template-columns: 385px;
    }
    @media screen and (min-width: 1120px) {
      grid-template-columns: 308px 308px;
    }
    @media screen and (min-width: 1280px) {
      grid-template-columns: 385px 385px;
    }
    @media screen and (min-width: 1770px) {
      grid-template-columns: 385px 385px 385px;
    }
    @media screen and (min-width: 2190px) {
      grid-template-columns: 385px 385px 385px 385px;
    }
  `;

  return (
    <ul css={playlistStyle}>
      {children}
    </ul>
  );
};

export default Playlist;
