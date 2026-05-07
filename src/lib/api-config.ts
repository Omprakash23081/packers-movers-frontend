/**
 * Global API Configuration
 * Change the base URL here to update it across the entire application.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://pakers-movers-backend.onrender.com/api';

export const API_ENDPOINTS = {
  QUOTES: `${API_BASE_URL}/quotes`,
  PRICING: `${API_BASE_URL}/pricing`,
  FEEDBACK: `${API_BASE_URL}/feedback`,
  TRACKING: `${API_BASE_URL}/shipments/track`,
};
