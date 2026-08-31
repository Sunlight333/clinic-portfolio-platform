import Link from "next/link";
import type { ReactNode } from "react";
import { Glyph, type GlyphName } from "@/components/icons/Glyph";

type Variant = "primary" | "ghost" | "outline" | "invert" | "soft";
type Size = "md" | "lg" | "xl";

const SIZE: Record<Size, string> = {
  md: "h-12 px-6 text-[1.02rem]",
  lg: "h-14 px-8 text-[1.08rem]",
  xl: "h-16 px-10 text-[1.14rem]",
};

const ICON: Record<Size, number> = { md: 17, lg: 19, xl: 21 };

const VARIANT: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_10px_26px_-10px_rgba(228,86,47,.85)] hover:shadow-[0_18px_40px_-12px_rgba(228,86,47,.9)] bg-[linear-gradient(120deg,#ff9060_0%,#f9704a_44%,#f2769c_100%)] hover:brightness-[1.04]",
  soft: "bg-white/80 text-ink border border-white shadow-soft hover:bg-white hover:shadow-lift backdrop-blur-md",
  outline:
    "border-[1.6px] border-ink/15 text-ink hover:border-coral-400 hover:text-coral-600 bg-white/50 backdrop-blur-md hover:bg-white",
  ghost: "text-ink hover:text-coral-600",
  invert:
    "bg-white/16 text-white border border-white/45 backdrop-blur-xl hover:bg-white/26 shadow-[0_10px_30px_-12px_rgba(0,0,0,.35)]",
};

type Props = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: GlyphName;
  iconLeft?: GlyphName;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  icon = "arrowRight",
  iconLeft,
  className = "",
  type = "button",
  onClick,
  disabled,
  ...rest
}: Props) {
  const cls = `group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-display font-extrabold tracking-[-0.02em] transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)] active:scale-[.97] disabled:opacity-50 ${SIZE[size]} ${VARIANT[variant]} ${className}`;

  const inner = (
    <>
      {/* travelling shine */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent_20%,rgba(255,255,255,.55)_50%,transparent_80%)] transition-transform duration-[900ms] ease-out group-hover/btn:translate-x-full"
      />
      {iconLeft && (
        <Glyph name={iconLeft} style={{ width: ICON[size], height: ICON[size] }} strokeWidth={3} className="relative" />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <Glyph
          name={icon}
          strokeWidth={3}
          style={{ width: ICON[size], height: ICON[size] }}
          className="relative transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} {...rest}>
      {inner}
    </button>
  );
}

export default Button;
