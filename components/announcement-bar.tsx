'use client';

import { useEffect, useState } from 'react';

export function AnnouncementBar({ messages }: { messages: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(t);
  }, [messages.length]);
  return <div className="bg-ink text-paper text-center text-sm py-2">{messages[index]}</div>;
}
