import { Workshop } from '@/components/workshop'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Christmas() {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-green-800 to-red-800">
      <h1 className="text-4xl font-bold text-white mb-8">Santa's Workshop</h1>
      <Workshop />
    </main>
    )
}