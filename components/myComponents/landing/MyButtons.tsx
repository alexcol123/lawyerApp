import { SignedOut, SignedIn, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { cn } from "@/lib/utils"

export function VerSiCalificoBtn({ color = 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600', text = 'Ver Si Califico' }: { color?: string, text?: string }) {

  console.log(color, text);
  return (
    <div >
      <Button
        asChild
        className={cn(' text-lg md:text-xl py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300', color )}
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