import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>主页</h1>
      <Link href="/about">
        <a>关于我们</a>
      </Link>
    </div>
  );
}