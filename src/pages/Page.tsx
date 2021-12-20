import clsx from "clsx";
import { FC } from "react";
import { css } from "@linaria/core";
import { clScrollInvisible } from "@src/styles/utils";

export const Page: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className={clsx(clPage, className)}>
      <div className={clPageBody}>{children}</div>
      <div className="page-footer">Footer</div>
    </div>
  );
};

var clPage = clsx(
  css`
    @apply flex flex-col;
    /* expand available height */
    @apply overflow-scroll;
  `,
  clScrollInvisible
);

/* clPage & */
var clPageBody = css`
  /* expand available height */
  @apply flex-grow;
`;
