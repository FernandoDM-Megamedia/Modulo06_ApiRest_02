import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const data = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


export const episodeList = css `
list-style: none;
padding: 0;
display: flex;
flex-direction: row;
align-content: flex-start;
justify-content: flex-start;
flex-wrap: wrap;
`;

export const episodeItem = css `
  list-style: none;
  padding: 0 0.5rem;
`;