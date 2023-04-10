/* eslint-disable import/prefer-default-export */
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 920px) {
      ${props} !important;
    }
  `;
};