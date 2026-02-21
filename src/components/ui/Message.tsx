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
  if (loading)
    return (
      <div className="w-full flex justify-center mt-10">
        <p className="text-gray-500">{loadingText}</p>
      </div>
    );
  if (error)
    return (
      <div className="w-full flex justify-center mt-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  return <>{children}</>;
};
