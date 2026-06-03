export const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  // Set default headers and include the Bearer token
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, { ...options, headers });

  // Exclude authentication endpoints from session expiration checks
  const isAuthRoute = url.includes("/login") || url.includes("/register");

  // Handle unauthorized or forbidden responses by redirecting to login
  if ((response.status === 401 || response.status === 403) && !isAuthRoute) {
    localStorage.removeItem("token");
    window.location.href = "/login?message=session_expired";
  }

  return response;
};
