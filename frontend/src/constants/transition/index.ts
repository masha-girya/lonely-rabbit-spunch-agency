export const DURATION = 300;

export const DEFAULT_STYLE = {
  transition: `all ${DURATION}ms linear`,
  transform: "translateX(0)",
};

export const TRANS_STYLES_RIGHT: any = {
  entering: { transform: "translateX(50%)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(-100%)" },
  exited: { transform: "translateX(-100%)" },
};

export const TRANS_STYLES_LEFT: any = {
  entering: { transform: "translateX(50%)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(100%)" },
  exited: { transform: "translateX(100%)" },
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

export const DEFAULT_STYLE_BANNER = {
  transition: `all ${300}ms linear`,
  transform: "translateX(0)",
};

export const TRANS_STYLES_BANNER: any = {
  entering: { transform: "translateX(0)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(100%)" },
  exited: { transform: "translateX(100%)" },
};
