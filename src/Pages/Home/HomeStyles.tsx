import styled, { keyframes } from "styled-components";

const fade = keyframes`
to {
    opacity: 1;
}
from {
    opacity: 0;
}
`;

export const Image = styled.img`
  animation: 1s ${fade} ease-in;
  animation-fill-mode: forward;
`;
