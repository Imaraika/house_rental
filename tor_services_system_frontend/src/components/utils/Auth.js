export const handleLogout = () => {
    localStorage.removeItem('tenant_id'); // Remove the tenant_id from localStorage
    window.location.href = '/'; // Redirect to the homepage after logout
  };
  