// pages/protected.js
import { useSession, signIn, signOut } from 'next-auth/react'

function ProtectedPage() {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>You are not authenticated.</p>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        </>
      )}
    </div>
  )
}

export default ProtectedPage