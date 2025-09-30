import React from "react";
import { useAuth } from "../auth/useAuth";

export default function Protected({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    // Aquí podrías redirigir a /login. Para demo, dejamos pasar siempre:
    // return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
