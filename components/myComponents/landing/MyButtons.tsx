import { SignedOut, SignedIn, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

export function VerSiCalificoBtn() {
  const text = 'Ver Si Califico';
  return (
    <div className="flex justify-center">
      <Button
        variant={'destructive'}
        asChild
        className="text-lg md:text-xl py-3 px-8 rounded-full shadow-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold transition-transform transform hover:scale-105 hover:shadow-2xl active:scale-100 active:bg-red-700 focus:ring-4 focus:ring-red-300"
      >
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <span className="block text-center">{text}</span>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href="/preAplicacion">
              <span className="block text-center">{text}</span>
            </Link>
          </SignedIn>
        </div>
      </Button>
    </div>
  );
}