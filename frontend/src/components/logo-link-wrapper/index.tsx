import { useRouter } from "next/router";
import React from "react";

interface LogoLinkWrapperProps {
  children: React.ReactNode;
}

export const LogoLinkWrapper: React.FC<LogoLinkWrapperProps> = (props) => {
  const router = useRouter();

  return router.asPath === "/" ? (
    <div>{props.children}</div>
  ) : (
    <a href="/">{props.children}</a>
  );
};
