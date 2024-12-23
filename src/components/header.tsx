import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { Bell } from 'lucide-react'
import { Button } from './ui/button'

export async function Header() {
    const {userId} = await auth()
    const user = await currentUser()
    if (!userId || !user) {
        console.log('User not signed in')
    }
  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
          Santa&apos;s Workshop
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-red-300 transition-colors">
            <Bell className="h-6 w-6" />
          </Link>
          <SignedIn>
            <SignOutButton>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out transform hover:scale-105">
                Logout
              </Button>
            </SignOutButton>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out transform hover:scale-105">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  )
}