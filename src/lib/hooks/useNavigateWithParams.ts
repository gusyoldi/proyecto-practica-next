'use client';

import { useRouter } from 'next/navigation';
import { mutate } from 'swr';

const useNavigateWithParams = () => {
  const router = useRouter();

  const push = <T>(key: string[], path: string, data: T) => {
    mutate(key, data);
    router.push(path);
  };

  return {
    push,
  };
};

export default useNavigateWithParams;
