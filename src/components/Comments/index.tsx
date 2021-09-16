import { useEffect, useRef } from 'react';

export default function Comments() {
  const commentsSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('repo', 'Thomaz201/Desafio_06_Ignite_React');
    script.setAttribute('issue-term', 'title');
    script.setAttribute('theme', 'github-dark-orange');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');

    commentsSection.current.appendChild(script);
  }, []);

  return <div ref={commentsSection} />;
}
