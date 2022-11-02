import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { css } from "@linaria/core";
import { utils } from "@src/styles/utils";

export const Page: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <div className={clsx(styles.base, className)}>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

const styles = {
  base: clsx(
    css`
      @apply flex flex-col;
      /* expand available height */
      @apply overflow-scroll;
    `,
    utils.scrollInvisible
  ),
  body: css`
    /* expand available height */
    @apply flex-grow;
  `,
  footer: css``,
};
