// src/components/Icon.tsx
import * as Icons from "../assets/icons";

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const SvgIcon = Icons[name];
  if (!SvgIcon) {
    console.warn(`Icono no encontrado: ${name}`);
    return null;
  }
  return <SvgIcon className={className} />;
}