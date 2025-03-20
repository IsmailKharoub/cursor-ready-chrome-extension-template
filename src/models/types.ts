// Type definitions for the extension

// Message types enum for communication between different parts of the extension
export enum MessageType {
  EXAMPLE_ACTION = 'EXAMPLE_ACTION',
  FETCH_DATA = 'FETCH_DATA',
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
  // Add more message types as needed
}

// Settings interface
export interface Settings {
  enabled: boolean;
  // Add more settings as needed
}

// Example of a data model
export interface ExampleData {
  id: string;
  name: string;
  value: number;
  // Add more properties as needed
}

// Response interface
export interface ResponseMessage {
  success: boolean;
  data?: any;
  error?: string;
} 