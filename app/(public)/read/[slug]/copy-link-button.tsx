'use client';

export function CopyLinkButton({ url }: { url: string }) {
  return (
    <button
      className="px-3 py-1 border border-softRed text-softRed rounded-full transition-colors hover:bg-softRed hover:text-paper"
      onClick={() => navigator.clipboard.writeText(url)}
    >
      Copy link
    </button>
  );
}

