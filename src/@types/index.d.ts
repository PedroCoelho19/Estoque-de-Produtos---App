import { ReactNode } from "react";

interface IAnimationOptionsSingIn {
  loop?: boolean;
  autoplay?: boolean;
  animationData: LottieProps;
  rendererSettings?: {
    preserveAspectRatio: string;
  };
}
interface IAnimationState {
  isStopped?: boolean;
  isPaused?: boolean;
}

interface IAnimationBar {
  text?: string;
  active?: boolean;
  alert?: boolean;
  children?: any;
  icon?: any;
  expanded?: boolean;
  title?: string;
  action?: Function;
  toggle?: boolean
}

