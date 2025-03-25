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
      // Opcionalmente, redirecionar para a página da lista de compras após login
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await firebaseSignOut();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Lista de Compras App</h1>
      
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Bem-vindo, <span className="font-semibold">{user.displayName}</span> ({user.email})
          </p>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/week-9/shopping-list" 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center"
            >
              Ir para Lista de Compras
            </Link>
            
            <button 
              onClick={handleSignOut} 
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              disabled={loading}
            >
              {loading ? "Saindo..." : "Sair"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="mb-4">Faça login para acessar sua lista de compras</p>
          <button 
            onClick={handleSignIn} 
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
            disabled={loading}
          >
            {loading ? "Conectando..." : "Login com GitHub"}
          </button>
        </div>
      )}
    </div>
  );
}