// Options page script

import { MessageType, Settings } from '../models/types';

// DOM Elements
const enableExtensionToggle = document.getElementById('enable-extension') as HTMLInputElement;
const notificationToggle = document.getElementById('notification-setting') as HTMLInputElement;
const apiEndpointInput = document.getElementById('api-endpoint') as HTMLInputElement;
const refreshIntervalInput = document.getElementById('refresh-interval') as HTMLInputElement;
const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;

// Default settings
const defaultSettings = {
  enabled: true,
  showNotifications: true,
  apiEndpoint: '',
  refreshInterval: 30
};

// Event Listeners
document.addEventListener('DOMContentLoaded', loadSettings);
saveBtn?.addEventListener('click', saveSettings);
resetBtn?.addEventListener('click', resetSettings);

/**
 * Load settings from storage
 */
function loadSettings() {
  chrome.storage.local.get(['settings'], (result) => {
    const settings = result.settings || defaultSettings;
    
    // Update UI with saved settings
    enableExtensionToggle.checked = settings.enabled;
    notificationToggle.checked = settings.showNotifications ?? defaultSettings.showNotifications;
    apiEndpointInput.value = settings.apiEndpoint ?? defaultSettings.apiEndpoint;
    refreshIntervalInput.value = String(settings.refreshInterval ?? defaultSettings.refreshInterval);
    
    console.log('Settings loaded:', settings);
  });
}

/**
 * Save settings to storage
 */
function saveSettings() {
  // Get values from form
  const enabled = enableExtensionToggle.checked;
  const showNotifications = notificationToggle.checked;
  const apiEndpoint = apiEndpointInput.value.trim();
  const refreshInterval = parseInt(refreshIntervalInput.value) || defaultSettings.refreshInterval;
  
  // Create settings object
  const settings = {
    enabled,
    showNotifications,
    apiEndpoint,
    refreshInterval
  };
  
  // Save to storage
  chrome.storage.local.set({ settings }, () => {
    console.log('Settings saved:', settings);
    showSaveConfirmation();
    
    // Notify background script about settings change
    chrome.runtime.sendMessage({
      type: MessageType.UPDATE_SETTINGS,
      data: settings
    });
  });
}

/**
 * Reset settings to defaults
 */
function resetSettings() {
  // Reset UI
  enableExtensionToggle.checked = defaultSettings.enabled;
  notificationToggle.checked = defaultSettings.showNotifications;
  apiEndpointInput.value = defaultSettings.apiEndpoint;
  refreshIntervalInput.value = String(defaultSettings.refreshInterval);
  
  // Save default settings
  chrome.storage.local.set({ settings: defaultSettings }, () => {
    console.log('Settings reset to defaults');
    showSaveConfirmation('Settings reset to defaults');
    
    // Notify background script
    chrome.runtime.sendMessage({
      type: MessageType.UPDATE_SETTINGS,
      data: defaultSettings
    });
  });
}

/**
 * Show save confirmation message
 */
function showSaveConfirmation(message = 'Settings saved successfully') {
  // Change button text temporarily
  const originalText = saveBtn.textContent;
  saveBtn.textContent = '✓ Saved';
  saveBtn.disabled = true;
  
  // Create and show notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Hide notification after a delay
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2000);
  
  // Reset button text
  setTimeout(() => {
    saveBtn.textContent = originalText;
    saveBtn.disabled = false;
  }, 1500);
} 