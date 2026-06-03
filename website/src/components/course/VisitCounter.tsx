import { useEffect, useState } from 'react';

const NAMESPACE = 'ai-bloom';
const KEY = 'total';
const SESSION_FLAG = 'ai_bloom_visit_counted';

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === '1';
    const url = alreadyCounted
      ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`
      : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`;

    fetch(url)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (cancelled || !data || typeof data.count !== 'number') return;
        setCount(data.count);
        if (!alreadyCounted) sessionStorage.setItem(SESSION_FLAG, '1');
      })
      .catch(() => { /* silent — counter is a nice-to-have, never break the page */ });

    return () => { cancelled = true; };
  }, []);

  if (count === null) return null;

  return (
    <span className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px]">
      VISITS · {count.toLocaleString()}
    </span>
  );
}
