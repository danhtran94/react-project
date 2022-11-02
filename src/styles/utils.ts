import { css } from "@linaria/core";

export const utils = {
  scrollInvisible: css`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
