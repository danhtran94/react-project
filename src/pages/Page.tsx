import clsx from "clsx";
import { FC } from "react";
import css from "styled-jsx/css";

export const Page: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className={clsx(className, "page")}>
      <div className="page-body">{children}</div>
      <div className="page-footer">Footer</div>
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  @import "utils.pcss";

  .page {
    @apply flex flex-col;
    @apply overflow-scroll; /* expand available height */

    @mixin scroll-invisible;

    & .page-body {
      @apply flex-grow; /* expand available height */
    }
  }
`;
