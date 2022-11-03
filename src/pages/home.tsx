import tw, { css, styled } from "twin.macro";

import { styles as stylesPage } from "@src/layouts/page";

export const Home = () => {
  return (
    <HomeBase className={styles.base}>
      <span>Home</span> page
    </HomeBase>
  );
};

const HomeBase = styled.div`
  @apply p-10;
`;

export const styles = {
  base: css`
    @apply p-10;

    .${stylesPage.body} & {
      @apply bg-red-200;
    }
  `,
};
