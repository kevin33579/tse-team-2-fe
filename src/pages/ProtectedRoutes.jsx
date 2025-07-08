// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

/**
 * Wrap a route element to allow only users that match `allowedRole`.
 * Redirects to "/" (or change as needed) when the role is missing / wrong.
 */
export default function ProtectedRoute({ allowedRole, children }) {
  const role = localStorage.getItem("role"); // e.g. "admin" / "user"

  if (role !== allowedRole) {
    return <Navigate to="/" replace />; // not authorised
  }
  return children;
}
