import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-800 to-red-800">
      <SignIn />
    </div>
  );
}