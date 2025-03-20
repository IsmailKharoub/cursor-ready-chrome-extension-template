// Popup script

import { MessageType, Settings } from '../models/types';
import { ApiService } from '../services/api.service';

// Initialize services
const apiService = new ApiService();

// DOM Elements
const enabledToggle = document.getElementById('enabled-toggle') as HTMLInputElement;
const statusText = document.getElementById('status-text') as HTMLElement;
const refreshBtn = document.getElementById('refresh-btn') as HTMLButtonElement;
const settingsBtn = document.getElementById('settings-btn') as HTMLButtonElement;

// Event Listeners
document.addEventListener('DOMContentLoaded', initializePopup);
enabledToggle?.addEventListener('change', toggleEnabled);
refreshBtn?.addEventListener('click', refreshData);
settingsBtn?.addEventListener('click', openSettings);

/**
 * Initialize the popup with stored settings
 */
async function initializePopup() {
  try {
    // Get settings from storage
    chrome.storage.local.get(['settings'], (result) => {
      const settings: Settings = result.settings || { enabled: true };
      
      // Update UI based on settings
      if (enabledToggle) {
        enabledToggle.checked = settings.enabled;
        updateStatusText(settings.enabled);
      }
    });
    
    // You can fetch initial data here if needed
    await fetchInitialData();
    
  } catch (error) {
    console.error('Failed to initialize popup:', error);
  }
}

/**
 * Toggle the enabled state
 */
function toggleEnabled() {
  const enabled = enabledToggle.checked;
  
  // Update storage
  chrome.storage.local.get(['settings'], (result) => {
    const settings: Settings = result.settings || { enabled: true };
    settings.enabled = enabled;
    
    chrome.storage.local.set({ settings }, () => {
      console.log('Settings updated:', settings);
    });
  });
  
  // Update UI
  updateStatusText(enabled);
  
  // Send message to background script
  chrome.runtime.sendMessage({
    type: MessageType.UPDATE_SETTINGS,
    data: { enabled }
  });
}

/**
 * Update the status text based on enabled state
 */
function updateStatusText(enabled: boolean) {
  if (statusText) {
    statusText.textContent = enabled ? 'Enabled' : 'Disabled';
    statusText.style.color = enabled ? 'var(--success-color)' : 'var(--disabled-color)';
  }
}

/**
 * Refresh data from the API
 */
async function refreshData() {
  try {
    refreshBtn.disabled = true;
    refreshBtn.textContent = 'Loading...';
    
    // Send message to background script
    chrome.runtime.sendMessage({
      type: MessageType.FETCH_DATA,
      data: {}
    }, (response) => {
      console.log('Data refreshed:', response);
      
      // Update UI with data
      // Add your code here to update the UI with the refreshed data
      
      refreshBtn.disabled = false;
      refreshBtn.textContent = 'Refresh Data';
    });
  } catch (error) {
    console.error('Failed to refresh data:', error);
    refreshBtn.disabled = false;
    refreshBtn.textContent = 'Refresh Failed';
    setTimeout(() => {
      refreshBtn.textContent = 'Refresh Data';
    }, 2000);
  }
}

/**
 * Open the settings page
 */
function openSettings() {
  chrome.runtime.openOptionsPage();
}

/**
 * Fetch initial data for the popup
 */
async function fetchInitialData() {
  try {
    // Example of fetching data from an API
    // const data = await apiService.getExampleData();
    // Process and display the data
    console.log('Initial data loaded');
  } catch (error) {
    console.error('Failed to fetch initial data:', error);
  }
} 