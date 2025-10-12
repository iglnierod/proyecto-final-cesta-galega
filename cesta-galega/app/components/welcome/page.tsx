'use client';

import { JSX, useState } from 'react';

export default function WelcomeComponent(props: { name: string; appName: string }): JSX.Element {
  const { name, appName } = props;
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Welcome {name} to {appName}
      </h1>
      <h3 className="text-3xl">{count}</h3>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Click Me!
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setCount(0)}>
        Reset counter
      </button>
    </>
  );
}
