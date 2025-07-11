// API configuration utility
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// API endpoints
export const API_ENDPOINTS = {
  personal: `${API_BASE_URL}/api/personal`,
  education: `${API_BASE_URL}/api/education`,
  skills: `${API_BASE_URL}/api/skills`,
  projects: `${API_BASE_URL}/api/projects`
}

// Fetch utility with error handling
export const apiRequest = async (endpoint) => {
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}
