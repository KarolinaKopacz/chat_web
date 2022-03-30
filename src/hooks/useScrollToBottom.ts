import React, { useEffect } from "react";

interface Props {
  action: any;
  element: React.RefObject<HTMLDivElement>;
}

export const useScrollToBottom = (props: Props) => {
  const { element, action } = props;

  useEffect(() => {
    element.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "nearest",
    });
  }, [action]);
};
