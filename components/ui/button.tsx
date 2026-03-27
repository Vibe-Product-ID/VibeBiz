import * as React from 'react';

import { cn } from '../../lib/utils';

// Vibe: modern-tradisional UMKM Indonesia
type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonSize = 'default' | 'sm' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    'bg-[#8B4513] text-white hover:bg-[#7A3D11] focus-visible:ring-[#8B4513]/40',
  outline:
    'border border-[#8B4513]/30 bg-white text-[#8B4513] hover:bg-[#8B4513]/5 focus-visible:ring-[#8B4513]/30',
  ghost: 'text-[#8B4513] hover:bg-[#8B4513]/10 focus-visible:ring-[#8B4513]/30',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-12 px-6 text-base',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
