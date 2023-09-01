export const DURATION = 200;

export const DEFAULT_STYLE = {
  transition: `all ${DURATION}ms linear`,
  transform: "translateX(0)",
};

export const TRANS_STYLES_RIGHT: any = {
  entering: { transform: "translateX(0)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(-50%)" },
  exited: { transform: "translateX(-50%)" },
};

export const TRANS_STYLES_LEFT: any = {
  entering: { transform: "translateX(0)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(50%)" },
  exited: { transform: "translateX(50%)" },
};
