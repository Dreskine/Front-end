import { notFound } from 'next/navigation';
import React from 'react';
import { useTranslation } from "next-i18next";
import { Card, Typography, Tag, Button } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';

// Function to simulate fetching candidate details (replace with actual API call)
async function getCandidateDetails(id) {
  // Replace this with your actual data fetching logic
  const res = await fetch(`your-api/candidates/${id}`);

  if (!res.ok) {
    return notFound(); // or throw an error
  }

  return res.json();
}

export default async function CandidateDetailsPage({ params }) {
    const { t } = useTranslation("common");
    const candidateId = params.id;
    const candidateData = await getCandidateDetails(candidateId);
  
    if (!candidateData) {
      return <div>Candidate not found.</div>;
    }

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px" }}>
      <Card
        title={<Typography.Title level={2}>{t('candidateInfo')}</Typography.Title>}
        bordered={false}
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}
      >
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('firstName')}:</Typography.Text> {candidateData.firstname}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('lastName')}:</Typography.Text> {candidateData.lastname}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('email')}:</Typography.Text> {candidateData.email}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('position')}:</Typography.Text> {candidateData.position}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text strong>{t('skills')}:</Typography.Text>
          <div>
            {candidateData.skills.map((skill, index) => (
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
            href={candidateData.cv}
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