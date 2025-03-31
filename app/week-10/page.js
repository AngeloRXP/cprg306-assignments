"use client";

import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await gitHubSignIn();
      // Redirect to shopping list page after login
      router.push("/week-10/shopping-list");
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping List App</h1>
      
      {user ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Welcome, <span className="font-semibold">{user.displayName}</span> ({user.email})
          </p>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/week-10/shopping-list" 
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 text-center"
            >
              Go to Shopping List
            </Link>
            
            <button 
              onClick={handleSignOut} 
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500"
              disabled={loading}
            >
              {loading ? "Signing out..." : "Sign Out"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <p className="mb-4">Sign in to access your shopping list</p>
          <button 
            onClick={handleSignIn} 
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
            disabled={loading}
          >
            {loading ? "Connecting..." : "Sign In with GitHub"}
          </button>
        </div>
      )}
    </div>
  );
}