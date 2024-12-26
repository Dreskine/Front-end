"use client";

import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTranslation } from 'next-i18next';

// Receive onSubmit prop from the parent component
export default function CandidatForm({ onSubmit }) { 
  const { t } = useTranslation('common');
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);

    // Simulate API call (replace with actual API call if needed)
    setTimeout(() => {
      message.success(t('applicationSubmitted'));
      console.log("Données soumises :", values);

      // Call onSubmit prop to send data to the parent
      onSubmit(values); 

      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{maxWidth: "600px", margin: "50px auto", padding: "20px", border: "1px solid #f0f0f0", borderRadius: "8px" }}>
      <h1>{t('applicationForm')}</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          position: "",
        }}
      >
        <Form.Item
          name="firstname"
          label={t('firstName')}
          rules={[
            { required: true, message: t('enterFirstName') },
            { max: 30, message: t('firstNameMaxLength') },
          ]}
        >
          <Input placeholder={t('enterFirstName')} />
        </Form.Item>

        <Form.Item
          name="lastname"
          label={t('lastName')}
          rules={[
            { required: true, message: t('enterLastName') },
            { max: 30, message: t('lastNameMaxLength') },
          ]}
        >
          <Input placeholder={t('enterLastName')} />
        </Form.Item>

        <Form.Item
          name="email"
          label={t('email')}
          rules={[
            { required: true, message: t('enterEmail') },
            { type: "email", message: t('validEmail') },
          ]}
        >
          <Input placeholder={t('enterEmail')} />
        </Form.Item>

        <Form.Item
          name="position"
          label={t('desiredPosition')}
          rules={[{ required: true, message: t('enterPosition') }]}
        >
          <Input placeholder={t('enterPosition')} />
        </Form.Item>

        <Form.Item
          name="skills"
          label={t('programmingLanguages')}
          rules={[
            { required: true, message: t('chooseAtLeastOneLanguage') },
          ]}
        >
          <Select
            mode="multiple"
            placeholder={t('chooseLanguages')}
            options={[
              { label: "JavaScript", value: "javascript" },
              { label: "HTML", value: "html" },
              { label: "Python", value: "python" },
              { label: "Java", value: "java" },
              { label: "C#", value: "csharp" },
              { label: "PHP", value: "php" },
              { label: "C++", value: "cpp" },
              { label: "Ruby", value: "ruby" },
              { label: "Go", value: "go" },
              { label: "TypeScript", value: "typescript" },
              { label: "Swift", value: "swift" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="cv"
          label={t('uploadCv')}
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[{ required: true, message: t('uploadCvMessage') }]}
        >
          <Upload beforeUpload={() => false} accept=".pdf,.doc,.docx">
            <Button icon={<UploadOutlined />}>{t('clickToUpload')}</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {t('submitApplication')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}