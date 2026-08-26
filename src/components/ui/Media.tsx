import Image from "next/image";
import { IMG, type ImageKey } from "@/lib/images";

type Shape =
  | "squircle"
  | "leaf"
  | "leaf-alt"
  | "arch"
  | "arch-soft"
  | "blob"
  | "blob-alt"
  | "circle"
  | "petal"
  | "ticket"
  | "hex";

const SHAPE: Record<Shape, string> = {
  squircle: "shape-squircle",
  leaf: "shape-leaf",
  "leaf-alt": "shape-leaf-alt",
  arch: "shape-arch",
  "arch-soft": "shape-arch-soft",
  blob: "shape-blob",
  "blob-alt": "shape-blob-alt",
  circle: "rounded-full",
  petal: "shape-petal",
  ticket: "shape-ticket",
  hex: "shape-hex",
};

type Props = {
  src: ImageKey;
  alt: string;
  shape?: Shape;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** gradient hairline outline around the frame */
  ring?: boolean;
  /** warm colour wash over the photo, keeps the palette coherent */
  wash?: "none" | "warm" | "mint" | "rose" | "lilac";
  children?: React.ReactNode;
  quality?: number;
  /** `cover` makes the frame fill its nearest positioned ancestor */
  position?: "relative" | "cover";
};

const WASH: Record<NonNullable<Props["wash"]>, string> = {
  none: "",
  warm: "bg-[linear-gradient(150deg,rgba(255,168,120,.26),rgba(242,118,156,.16)_55%,transparent)]",
  mint: "bg-[linear-gradient(150deg,rgba(70,198,171,.26),rgba(98,170,242,.16)_55%,transparent)]",
  rose: "bg-[linear-gradient(150deg,rgba(242,118,156,.28),rgba(167,139,250,.16)_55%,transparent)]",
  lilac: "bg-[linear-gradient(150deg,rgba(167,139,250,.28),rgba(98,170,242,.14)_55%,transparent)]",
};

/**
 * Photo frame with a non-rectangular silhouette, gradient hairline,
 * layered warm shadow and an LQIP blur-up placeholder.
 */
export function MediaFrame({
  src,
  alt,
  shape = "squircle",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  ring = true,
  wash = "none",
  children,
  quality = 82,
  position = "relative",
}: Props) {
  const asset = IMG[src];
  const pos = position === "cover" ? "absolute inset-0" : "relative";

  return (
    <div className={`${pos} isolate overflow-hidden ${SHAPE[shape]} shadow-float ${className}`}>
      <Image
        src={asset.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        placeholder="blur"
        blurDataURL={asset.blur}
        className={`object-cover ${imgClassName}`}
      />
      {wash !== "none" && <span aria-hidden className={`absolute inset-0 ${WASH[wash]}`} />}
      {ring && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/60 ring-inset"
        />
      )}
      {children}
    </div>
  );
}

/** Fixed-ratio variant for grids where a `fill` parent is inconvenient. */
export function MediaBlock({
  ratio = "4/3",
  className = "",
  ...frame
}: Props & { ratio?: string }) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: ratio }}>
      <MediaFrame {...frame} position="cover" />
    </div>
  );
}

export default MediaFrame;
