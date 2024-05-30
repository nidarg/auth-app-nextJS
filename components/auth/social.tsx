'use client';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';

export const Social = () => {
  return (
    <div className='flex items-center justify-center gap-x-4 w-full'>
      <Button variant='outline' size='lg' onClick={() => {}}>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button variant='outline' size='lg' onClick={() => {}}>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};
