import { cva } from 'class-variance-authority';
export const button = cva(['py-2', 'px-4', 'rounded'], {
  variants: {
    theme: {
      material: ['bg-red-500', 'text-white', 'hover:bg-blue-600'],
      bootstrap: ['bg-primary', 'text-white', 'hover:bg-primary-dark'],
      paper: ['bg-gray-200', 'text-gray-800', 'hover:bg-gray-300'],
    },
  },
  defaultVariants: {
    theme: 'material',
  },
});
