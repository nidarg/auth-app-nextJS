import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/loggn-button';

export default function Home() {
  return (
    <main className='h-full flex flex-col items-center justify-center '>
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl font-semibold drop-shadow-lg')}>
          🔐Auth Next JS
        </h1>
        <p className='text-2xl'>
          Authentication service ready to be integrated in your app
        </p>
        <div>
          <LoginButton>
            <Button variant='secondary' size='lg'>
              Login
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
