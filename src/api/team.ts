// Team API endpoints
import apiClient from './config';
import { TeamMember, ApiResponse } from '@/types';

export const teamApi = {
  // Get all team members
  getTeamMembers: async (): Promise<ApiResponse<TeamMember[]>> => {
    try {
      const response = await apiClient.get('/team/');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch team members' };
    }
  },

  // Get single team member by slug
  getTeamMember: async (slug: string): Promise<ApiResponse<TeamMember>> => {
    try {
      const response = await apiClient.get(`/team/${slug}/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch team member' };
    }
  },
};

export default teamApi;
