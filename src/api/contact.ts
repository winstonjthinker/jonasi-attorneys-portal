// Contact API endpoints
import apiClient from './config';
import { ContactFormData, ApiResponse } from '@/types';

export const contactApi = {
  // Submit contact form
  submitContact: async (data: ContactFormData): Promise<ApiResponse<{ message: string }>> => {
    try {
      const response = await apiClient.post('/contact/', data);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to submit contact form' };
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email: string): Promise<ApiResponse<{ message: string }>> => {
    try {
      const response = await apiClient.post('/newsletter/subscribe/', { email });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to subscribe to newsletter' };
    }
  },

  // Request consultation
  requestConsultation: async (data: {
    name: string;
    email: string;
    phone: string;
    practiceArea: string;
    message: string;
  }): Promise<ApiResponse<{ message: string }>> => {
    try {
      const response = await apiClient.post('/consultations/', data);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to request consultation' };
    }
  },
};

export default contactApi;
