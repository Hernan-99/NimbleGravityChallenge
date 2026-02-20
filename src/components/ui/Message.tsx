import type React from "react";

interface MessageProps {
  loading: boolean;
  loadingText?: string;
  error: string | null;
  children: React.ReactNode;
}

export const Message = ({
  loading,
  loadingText,
  error,
  children,
}: MessageProps) => {
  if (loading) return <p>{loadingText}</p>;
  if (loading) return <p style={{ color: "red" }}>{error}</p>;
  return <>{children}</>;
};
