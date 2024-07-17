'use client';

import { FormEvent, useEffect, useState, useTransition } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import useOwner from '@/lib/useOwner';

const Document = ({ id }: { id: string }) => {
  const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
  const [input, setInput] = useState('');
  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, 'documents', id), {
          title: input,
        });
      });
    }
  };

  return (
    <div>
      <div className='flex max-w-6xl justify-between mx-auto pb-5'>
        <form
          onSubmit={updateTitle}
          className='flex flex-1 items-center space-x-2'
        >
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={isUpdating} type='submit'>
            {isUpdating ? 'Updating' : 'Update'}
          </Button>
        </form>
      </div>

      <div>
        {/* manage Users */}

        {/* Avatars */}
      </div>

      {/* Collaborative editor */}
    </div>
  );
};
export default Document;
