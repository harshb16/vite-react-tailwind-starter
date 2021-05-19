import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <header className='bg-[#282c34] flex flex-col justify-center items-center min-h-screen text-5xl text-gray-200 space-y-5'>
        <p>Hello Vite + React!</p>
        <p>
          <button
            className='px-6 text-black bg-white rounded-md text-md border-1'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className='text-lg'>
          Edit{' '}
          <code className='font-mono font-semibold underline'>App.jsx</code> and
          save to test HMR updates.
        </p>
        <p className='flex space-x-5 underline'>
          <a
            className='link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>

          <a
            className='link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>

          <a
            className='link'
            href='https://tailwindcss.com/docs'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
