import { useState, useEffect } from 'react';
import { getApps } from '@api/endpoints/apps/api'; // adjust import based on your structure
import type { GetUsersSuccessResponse } from '../../types';

export type UseAppsState = {
  data: GetUsersSuccessResponse| null;
  loading: boolean;
  error: string | null;
};

export const useApps = (appName: string, category: string, pageNumber: number, pageSize: number): UseAppsState => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApps = async (): Promise<void> => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await getApps({appName, category, pageNumber, pageSize});
        setData(response); 
      } catch (err) {
        setError(err?.message || 'Something went wrong'); 
      } finally {
        setLoading(false); 
      }
    };

    fetchApps();
  }, [appName, category, pageNumber, pageSize]); 

  return { data, loading, error };
};