import * as React from "react"
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-md",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-gray-200",
        outline: "border border-white text-white hover:bg-white hover:text-black"
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size }) + " " + className}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button }
