// API Service for making network requests

import { ExampleData, ResponseMessage } from '../models/types';

/**
 * Class for handling API requests
 */
export class ApiService {
  private baseUrl: string;
  
  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }
  
  /**
   * Generic method to fetch data from an API endpoint
   */
  async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }
  
  /**
   * Generic method to post data to an API endpoint
   */
  async postData<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API post error:', error);
      throw error;
    }
  }
  
  /**
   * Example method to get specific data
   */
  async getExampleData(): Promise<ExampleData[]> {
    return this.fetchData<ExampleData[]>('/example-endpoint');
  }
} 