// Blog API endpoints
import apiClient from './config';
import { BlogPost, BlogCategory, ApiResponse, PaginatedResponse } from '@/types';

export const blogApi = {
  // Get all blog posts with pagination
  getPosts: async (page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<BlogPost>>> => {
    try {
      const response = await apiClient.get('/blog/posts/', {
        params: { page, limit },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch blog posts' };
    }
  },

  // Get single blog post by slug
  getPost: async (slug: string): Promise<ApiResponse<BlogPost>> => {
    try {
      const response = await apiClient.get(`/blog/posts/${slug}/`);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch blog post' };
    }
  },

  // Get blog categories
  getCategories: async (): Promise<ApiResponse<BlogCategory[]>> => {
    try {
      const response = await apiClient.get('/blog/categories/');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch categories' };
    }
  },

  // Get posts by category
  getPostsByCategory: async (categorySlug: string, page = 1): Promise<ApiResponse<PaginatedResponse<BlogPost>>> => {
    try {
      const response = await apiClient.get(`/blog/categories/${categorySlug}/posts/`, {
        params: { page },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch posts by category' };
    }
  },

  // Search blog posts
  searchPosts: async (query: string): Promise<ApiResponse<BlogPost[]>> => {
    try {
      const response = await apiClient.get('/blog/search/', {
        params: { q: query },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to search posts' };
    }
  },

  // Get featured posts
  getFeaturedPosts: async (): Promise<ApiResponse<BlogPost[]>> => {
    try {
      const response = await apiClient.get('/blog/posts/featured/');
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: 'Failed to fetch featured posts' };
    }
  },
};

export default blogApi;
