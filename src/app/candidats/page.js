"use client";

import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function CandidatForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);

    // Simuler l'envoi des données
    setTimeout(() => {
      message.success("Votre candidature a été soumise avec succès !");
      console.log("Données soumises :", values);
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", border: "1px solid #f0f0f0", borderRadius: "8px" }}>
      <h1>Formulaire de Candidature</h1>
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
          label="Prénom"
          rules={[
            { required: true, message: "Veuillez entrer votre prénom" },
            { max: 30, message: "Le prénom ne peut pas dépasser 30 caractères" },
          ]}
        >
          <Input placeholder="Entrez votre prénom" />
        </Form.Item>

        <Form.Item
          name="lastname"
          label="Nom"
          rules={[
            { required: true, message: "Veuillez entrer votre nom" },
            { max: 30, message: "Le nom ne peut pas dépasser 30 caractères" },
          ]}
        >
          <Input placeholder="Entrez votre nom" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Veuillez entrer votre email" },
            { type: "email", message: "Veuillez entrer une adresse email valide" },
          ]}
        >
          <Input placeholder="Entrez votre email" />
        </Form.Item>

        <Form.Item
          name="position"
          label="Poste souhaité"
          rules={[{ required: true, message: "Veuillez entrer le poste souhaité" }]}
        >
          <Input placeholder="Entrez le poste souhaité" />
        </Form.Item>

        <Form.Item
          name="cv"
          label="Télécharger votre CV"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[{ required: true, message: "Veuillez télécharger votre CV" }]}
        >
          <Upload beforeUpload={() => false} accept=".pdf,.doc,.docx">
            <Button icon={<UploadOutlined />}>Cliquez pour télécharger</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Soumettre ma candidature
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
