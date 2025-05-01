"use client";
import React, { useEffect } from "react";
import Button from "@/components/shared/Button";
import { createAuthClient } from "better-auth/react";
import { authClient } from "@/lib/auth-client";
const { useSession } = createAuthClient();
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, isPending, error } = useSession();

  const router = useRouter();

  // Redirect to sign-in if there's no session
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!session) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="flex items-center gap-2">
      <div>{session.user?.name}</div>
      <div>{session.user?.email}</div>
      <div>{session.user?.id}</div>
      <Button onClick={async () => await authClient.signOut()}>Logout</Button>
    </div>
  );
}
