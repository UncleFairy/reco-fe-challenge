import { apiClient } from '../../client';
import type { GetUsersSuccessResponse, GetUsersErrorResponse } from '../../../types';

export type GetUsersResponse =
  | GetUsersSuccessResponse
  | GetUsersErrorResponse;

export const getApps = async (
  payload: {
    appName: string;
    category: string;
    pageNumber: number;
    pageSize: number;
  },
): Promise<GetUsersResponse> => {
  const response = await apiClient.put<GetUsersResponse>(
    '/api/v1/app-service/get-apps',
    payload,
  );

  return response.data;
};
