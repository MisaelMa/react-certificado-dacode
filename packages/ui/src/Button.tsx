"use client";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from 'react';

import { button } from "@ui/cva/src";
interface AppToolbarProps {
  children: ReactNode;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
export const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...props
}) => {
  return (
    <div>
      <button className={button({ theme })}>{children}</button>
    </div>
  );
};