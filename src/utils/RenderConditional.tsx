import React, { ReactNode } from 'react';

interface RenderConditionalProps {
  istrue?: boolean;
  children?: ReactNode;
}

const RenderConditional: React.FC<RenderConditionalProps> = ({ istrue, children }) => {
  return istrue ? children : null;
};

export default RenderConditional;
