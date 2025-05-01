"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";

export default function SignUpPage() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await authClient.signUp.email(
        {
          email,
          password,
          name: `${firstName} ${lastName}`,
          first_name: String(firstName),
          last_name: String(lastName),
          callbackURL: "/sign-in",
        },
        {
          onRequest: (ctx) => {
            //show loading
            console.log(ctx);
          },
          onSuccess: () => {
            //redirect to the dashboard or sign in page
            (e.target as HTMLFormElement).reset();
            window.location.href = "/sign-in";
          },
          onError: (ctx) => {
            // display the error message
            console.log(ctx.error.message);
          },
        }
      );
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <form
          className="flex flex-col gap-2 max-w-md mx-auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            autoComplete="new-password"
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
        <Link href="/sign-in">Already have an account? Sign in</Link>
      </div>
    </div>
  );
}
