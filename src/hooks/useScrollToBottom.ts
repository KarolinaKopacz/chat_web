import React, { useEffect } from "react";

interface Props {
  // action: object | [];
  element: React.RefObject<HTMLDivElement>;
}

export const useScrollToBottom = (props: Props) => {
  const { element } = props;

  useEffect(() => {
    element.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "nearest",
    });
    //for now scroll once, later on some actions like add new messages
  });
};
