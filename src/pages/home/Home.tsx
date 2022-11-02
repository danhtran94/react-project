import { css } from "@linaria/core";

export const Home = () => {
  return <div className={styles.base}>Home page</div>;
};

const styles = {
  base: css`
    @apply p-10;
  `,
};
