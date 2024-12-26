"use client";
import Link from 'next/link';
import { Button } from 'antd';

export default function Home() {
  return (
    <div>
      <h1>Bienvenue dans l'espace recruteurs</h1>
      <Link href="/recruteurs">
        <Button type="primary">Accéder à l'Espace Recruteurs</Button>
      </Link>
    </div>
  );
}