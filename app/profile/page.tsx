"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/shared/Button";
import { createAuthClient } from "better-auth/react";
import { authClient } from "@/lib/auth-client";
const { useSession } = createAuthClient();
import { useRouter } from "next/navigation";
import { Dialog } from "@/components/shared/Dialog"

export default function ProfilePage() {
  const [dialog, setDialog] = React.useState({ isOpen: false })
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
    <div className="flex gap-2 flex-col">

      <div>
        <div>Shipping Info</div>
        <div>Address</div>
        <Button onClick={() => setDialog({ isOpen: true })}>Add Address</Button>
      </div>

      <div>User Info</div>
      <div>{session.user?.name}</div>
      <div>{session.user?.email}</div>
      <div>{session.user?.id}</div>
      <Button onClick={async () => await authClient.signOut()}>Logout</Button>
      {dialog.isOpen &&
        <Dialog
          onClose={() => setDialog({ isOpen: false })}
        >
          test
        </Dialog>}
    </div>
  );
}
