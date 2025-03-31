import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        {children}
      </div>
    </AuthContextProvider>
  );
}