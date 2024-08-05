'use client';

import { FC, useMemo } from 'react';
import { AxiosError } from 'axios';
import { ErrorComp } from '@/components/ErrorComp';

type TAxiosError = AxiosError<{
  message: string;
  statusCode: number;
  error: string;
}>;

interface ErrorFallbackProps {
  resetErrorBoundary: () => void;
  error: Error | TAxiosError;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const statusCode = useMemo(() => {
    if (!(error instanceof AxiosError)) {
      return 500;
    }
    return (error as TAxiosError).response?.data.statusCode;
  }, [error]);

  const errorMessage = useMemo(() => {
    if (!(error instanceof AxiosError)) {
      return error.message;
    }
    return (error as TAxiosError).response?.data.message;
  }, [error]);

  return (
    <ErrorComp
      statusCode={statusCode}
      errorMessage={errorMessage}
      variant={statusCode === 404 ? 'notFound' : 'serverError'}
      onClick={() => {
        resetErrorBoundary();
        window.location.reload();
      }}
    />
  );
};

export default ErrorFallback;
