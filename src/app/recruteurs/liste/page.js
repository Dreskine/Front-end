"use client";
import { Table, Button } from 'antd'; // Importer les composants de Ant Design
import React from 'react';
import {Tag} from 'antd';
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
    const candidates  = [
        {
          key: '1',
          firstname: 'Diarra',
          name: 'Konte',
          position: 'Développeur Frontend',
          email: 'diarrakontepro@email.com',
          status: 'Validé',
          date: '25-12-2025',
          details : "Voir Plus"
        },
        {
          key: '2',
          firstname: 'Paul',
          name: 'Damien',
          position: 'Chef de projet',
          email: 'Paul.damien@email.com',
          status: 'Rejeté',
          date: '19-10-2024',
          details : "Voir Plus"
        },
        {
          key: '3',
          firstname: 'Sarah',
          name: 'Bousfiha',
          position: 'Développeur Backend',
          email: 'Sarah.Bousfiha@email.com',
          status: 'En cours',
          date: '12-9-2024',
          details : "Voir Plus"
        },
        {
          key: '4',
          firstname: 'Léo',
          name: 'Leclerc',
          position: 'Designer',
          email: 'leo.leclerc@yahoo.com',
          status: 'Validé',
          date: '19-11-2020',
          details : "Voir Plus"
        },
        {
          key: '5',
          firstname: 'Lucas',
          name: 'Lemoine',
          position: 'Développeur Backend',
          email: 'lucas.lemoine@email.com',
          status: 'Validé',
          date: '03-01-2023',
          details : "Voir Plus"
        },
        {
          key: '6',
          firstname: 'Camille',
          name: 'Durand',
          position: 'Développeur Frontend',
          email: 'camille.durand@email.com',
          status: 'En cours',
          date: '11-07-2022',
          details : "Voir Plus"
        }
      ];
    
      const columns  = [
        {
          title: t('firstName'),
          dataIndex: 'firstname', 
          key: 'firstname',
        },
        {
          title: t('lastName'),
          dataIndex: 'name', 
          key: 'name',
        },
    
        {
          title: t('position'),
          dataIndex: 'position', 
          key: 'position',
        },
    
        {
          title: t('applicationDate'),
          dataIndex: 'date', 
          key: 'date',
        },
    
        {
          title: t('status'),
          dataIndex: 'status', 
          key: 'status',
          render:(_,text) =>(
            <Tag color={
              text.status === "Validé" ? "green" : 
              text.status === "En cours" ? "gray" : 
              "red"
            }>
              {text.status}
            </Tag>
          )
        },

        {
          title: '',
          dataIndex: 'details', 
          key: 'details',
          render:(_,text) =>(
            <Link href={`/recruteurs/details/${text.key}`}>
              <Button type="primary">{t('viewMore')}</Button>
            </Link>
          )
        },

      ]
        return (
          <div>
            <h1>{t("candidateList")}</h1>
            <Table columns={columns} dataSource={candidates} />
          </div>
        );
}