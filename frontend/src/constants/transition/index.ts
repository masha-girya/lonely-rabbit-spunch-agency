export const DURATION = 150;

export const DEFAULT_STYLE = {
  transition: `all ${DURATION}ms linear`,
  transform: "translateX(0)",
};

export const DEFAULT_STYLE_TEXT = {
  transition: `all ${DURATION}ms ease-in-out`,
  transform: "scale(1)",
};

export const TRANS_STYLES_TEXT: any = {
  entering: { transform: "scale(0)" },
  entered: { transform: "scale(1)" },
  exiting: { transform: "scale(0)" },
  exited: { transform: "scale(0)" },
};
