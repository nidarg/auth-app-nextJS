import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className='bg-green-200/70 p-2 rounded-md flex items-center gap-x-2 text-sm text-green-500'>
      <CheckCircledIcon className='h-5 w-5' />
      <p>{message}</p>
    </div>
  );
};
