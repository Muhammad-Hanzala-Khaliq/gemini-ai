import React from "react";
import "./RootLayout.css";
import { Outlet, Link } from "react-router-dom";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// Replace this with your actual Clerk frontend API key
const PUBLSHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLSHABLE_KEY) {
  throw new Error("Missing Publishable key");
}
const queryClient = new QueryClient();
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLSHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="rootLayout">
          <header>
            <Link to="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>MY AI</span>
            </Link>
            <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
