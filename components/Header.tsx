'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs';

const Header = () => {
  const { user } = useUser();

  return (
    <header className='flex items-center justify-between p-5'>
      {user && (
        <h1 className='capitalize text-2xl'>{user?.firstName}&apos;s Space</h1>
      )}

      {/* Breadcrumbs */}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
export default Header;
