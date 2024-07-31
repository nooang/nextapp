import Link from "next/link";
import "./globals.css";
import { Control } from "./Control"


export const metadata = {
  title: "Web tutorials",
  description: "Generated by thkim",
};

export default async function RootLayout({ children }) {
  const response = await fetch('http://localhost:9999/topics', { next: { revalidate: 0 } });
  const topics = await response.json();

  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic) => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
