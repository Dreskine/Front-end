"use client";
import React from "react";
import { useTranslation } from 'next-i18next';
import { Card, Typography, Tag, Button } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';

export default function CandidatInformations() {
  // Utilisation de i18next pour les traductions
  const { t } = useTranslation("common");

  // Exemple de données candidat (statique)
  const candidatData = {
    firstname: "Diarra",
    lastname: "Konte",
    email: "john.doe@example.com",
    position: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    cv: "/path/to/cv.pdf", // Exemple de chemin vers un CV (à remplacer)
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px" }}>
      <Card
        title={<Typography.Title level={2}>{t('candidateInfo')}</Typography.Title>}
        bordered={false}
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('firstName')}:</Typography.Text> {candidatData.firstname}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('lastName')}:</Typography.Text> {candidatData.lastname}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('email')}:</Typography.Text> {candidatData.email}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('position')}:</Typography.Text> {candidatData.position}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('skills')}:</Typography.Text>
          <div>
            {candidatData.skills.map((skill, index) => (
              <Tag key={index} color="blue" style={{ marginBottom: "10px" }}>
                {skill}
              </Tag>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Typography.Text strong>{t('cv')}:</Typography.Text>
          <Button
            type="link"
            icon={<FilePdfOutlined />}
            href={candidatData.cv}
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingLeft: "0", fontSize: "16px" }}
          >
            {t('downloadCv')}
          </Button>
        </div>
      </Card>
    </div>
  );
}