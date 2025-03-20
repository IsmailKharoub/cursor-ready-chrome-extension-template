// Background script for Chrome Extension
// This script runs in the background as a service worker

import { MessageType } from '../models/types';

// Listen for installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Extension installed');
    // Initialize storage with default values if needed
    chrome.storage.local.set({ 
      settings: {
        enabled: true,
        // Add any other default settings here
      }
    });
  }
});

// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle different message types
  if (message.type === MessageType.EXAMPLE_ACTION) {
    // Perform some action
    console.log('Example action received', message.data);
    // You can send a response back
    sendResponse({ success: true });
  }
  
  // Important: return true if you want to send a response asynchronously
  return true;
});

// Example of a function to fetch data from an API
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// You can add more background functionality here 