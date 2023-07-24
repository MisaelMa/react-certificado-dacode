"use client";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from 'react';

import { header } from "@ui/cva/src";
interface AppToolbarProps {
  children: ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof header> {}
 const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <header className={header()}>
      {children}
    </header>
  );
};
export default Button