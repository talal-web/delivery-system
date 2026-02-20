import type { AxiosError } from "axios";

export const getAxiosErrorMessage = (error: unknown) => {
  if (!error || typeof error !== "object") return null;

  // Axios error type guard
  if ("isAxiosError" in error && error.isAxiosError) {
    return (
      (error as AxiosError<{ message: string }>)?.response?.data?.message ||
      (error as AxiosError)?.message ||
      null
    );
  }

  return (error as any)?.message || null;
};
