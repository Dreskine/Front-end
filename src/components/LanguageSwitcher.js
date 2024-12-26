"use client";
import { useTranslation } from "react-i18next";
import { Switch } from "antd";
import { useEffect } from 'react';
import '@/i18n/config';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (checked) => {
    const newLang = checked ? "en" : "fr";
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <span style={{ marginRight: 10 }}>{i18n.language === "fr" ? "Français" : "English"}</span>
      <Switch
        checked={i18n.language === "en"}
        onChange={handleChangeLanguage}
        checkedChildren="EN"
        unCheckedChildren="FR"
      />
    </div>
  );
};

export default LanguageSwitcher;