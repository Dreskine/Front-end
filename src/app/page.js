"use client";
import Link from 'next/link';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1>{t("welcomeRecruiter")}</h1>
      <Link href="/recruteurs">
        <Button type="primary">{t("accessRecruiterArea")}</Button>
      </Link>
    </div>
  );
}