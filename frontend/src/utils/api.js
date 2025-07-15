export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API endpoints
export const API_ENDPOINTS = {
  personal: `${API_BASE_URL}/api/personal`,
  education: `${API_BASE_URL}/api/education`,
  skills: `${API_BASE_URL}/api/skills`,
  projects: `${API_BASE_URL}/api/projects`,
};

// Fetch utility with error handling
export const apiRequest = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`❌ API request failed [${endpoint}]:`, error);
    throw error;
  }
};
