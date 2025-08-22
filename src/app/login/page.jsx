'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const handleGoogleLogin = async (providerName) => {
  const result = await signIn(providerName,{redirect:false})


  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-800">
      <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Login</h1>
        
        <button
          onClick={()=> handleGoogleLogin("google")}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.91 3.52 30.41 1 24 1 15.15 1 7.9 6.31 4.93 14.18l7.98 6.19C15.93 14.37 19.67 9.5 24 9.5z"></path>
            <path fill="#4285F4" d="M46.96 24.5c0-.98-.07-1.92-.2-2.83H24v5.35h12.3c-.75 2.22-2.17 4.15-4.11 5.48l6.85 5.3C42.92 35.8 46.96 30.56 46.96 24.5z"></path>
            <path fill="#FBBC05" d="M12.93 32.12c-.9-.68-1.72-1.63-2.3-2.73l-7.98-6.19C2.17 22.84 1 23.36 1 24.5c0 1.14.17 2.23.49 3.25l6.76 5.25c.67-.78 1.4-1.5 2.22-2.12z"></path>
            <path fill="#34A853" d="M24 47.5c6.41 0 11.91-2.52 16.14-6.68l-6.85-5.3c-1.94 1.33-3.36 3.26-4.11 5.48-1.57 2.06-3.79 3.4-6.68 3.4-4.33 0-8.08-2.58-9.97-6.23l-7.98 6.19C7.9 41.69 15.15 47.5 24 47.5z"></path>
            <path d="M-525 24h1038v2h-1038z" fill="#4285F4"></path>
          </svg>
          Sign in with Google
        </button>

      </div>
    </div>
  );
}