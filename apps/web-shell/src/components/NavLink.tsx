import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

export default function NavLink(props: LinkProps) {
  const loc = useLocation();
  const active = loc.pathname === props.to;
  return (
    <Link {...props} style={{ fontWeight: active ? 700 : 400 }} />
  );
}
