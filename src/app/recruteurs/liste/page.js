"use client";
import { Table, Button } from 'antd'; // Importer les composants de Ant Design
import React from 'react';
import {Tag} from 'antd';

export default function Home() {
    const candidates  = [
        {
          key: '1',
          firstname: 'Diarra',
          name: 'Konte',
          position: 'Développeur Frontend',
          email: 'diarrakontepro@email.com',
          status: 'Validé',
          date: '25-12-2025',
        },
        {
          key: '2',
          firstname: 'Paul',
          name: 'Damien',
          position: 'Chef de projet',
          email: 'Paul.damien@email.com',
          status: 'Rejeté',
          date: '19-10-2024',
        },
        {
          key: '3',
          firstname: 'Sarah',
          name: 'Bousfiha',
          position: 'Développeur Backend',
          email: 'Sarah.Bousfiha@email.com',
          status: 'En cours',
          date: '12-9-2024',
        },
        {
          key: '4',
          firstname: 'Léo',
          name: 'Leclerc',
          position: 'Designer',
          email: 'leo.leclerc@yahoo.com',
          status: 'Validé',
          date: '19-11-2020'
        },
        {
          key: '5',
          firstname: 'Lucas',
          name: 'Lemoine',
          position: 'Développeur Backend',
          email: 'lucas.lemoine@email.com',
          status: 'Validé',
          date: '03-01-2023'
        },
        {
          key: '6',
          firstname: 'Camille',
          name: 'Durand',
          position: 'Développeur Frontend',
          email: 'camille.durand@email.com',
          status: 'En cours',
          date: '11-07-2022'
        }
      ];
    
      const columns  = [
        {
          title: 'Prenom',
          dataIndex: 'firstname', 
          key: 'firstname',
        },
        {
          title: 'Nom',
          dataIndex: 'name', 
          key: 'name',
        },
    
        {
          title: 'Poste',
          dataIndex: 'position', 
          key: 'position',
        },
    
        {
          title: 'Date de Candidature',
          dataIndex: 'date', 
          key: 'date',
        },
    
        {
          title: 'Statut ',
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
        }
      ]
        return (
          <div>
            <h1>Liste des Candidats - Postes Informatique</h1>
            <Table columns={columns} dataSource={candidates} />
          </div>
        );
}
