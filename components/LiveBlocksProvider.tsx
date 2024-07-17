'use client';
import { LiveblocksProvider, RoomProvider } from '@liveblocks/react/suspense';

const LiveBlocksProvider = ({ children }: { children: React.ReactNode }) => {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    throw new Error('NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not set');
  }

  return (
    <div>
      <LiveblocksProvider throttle={16} authEndpoint='/auth-endpoint'>
        {children}
      </LiveblocksProvider>
    </div>
  );
};
export default LiveBlocksProvider;
