import EventDetection from '../assets/images/event-detection.png';
import SAS from '../assets/images/sas.jpg';
import HIASTProjects from '../assets/images/hiast-projects.png';
import UniFile from '../assets/images/unifile.png';
import CASolution from '../assets/images/casolution.png';
import eMedic from '../assets/images/emedic.jpg';
import MentalHealth from '../assets/images/mental-health.jpg'; 
import MediatRaptor from '../assets/images/MediatRaptor.png'; 


export interface ProtfolioItem {
    projectName : string ,
    image : any  ,
    description :string ,
    sourceCode :string ,
    link :string
}

export const ProjectsList: ProtfolioItem[] = [
    {
        projectName: 'Event Detection from Arabic Social Media',
        image: EventDetection,
        description: 'Document-pivot event detection pipeline tailored for Arabic Twitter, Telegram, and news streams. Includes tweet filtering (SVM, KNN), incremental clustering with mBERT embeddings + GNNs, LLM-based summarization, and geospatial location inference with CaMel NER.',
        sourceCode: 'https://github.com/HasanKhadd0ur/SAS.DetectionService',
        link: '#'
    },
    {
        projectName: 'Situational Awareness System (SAS)',
        image: SAS,
        description: 'A scalable microservices-based platform to monitor daily and historical events on an interactive map. Includes scraping, event detection, event management, location inference, summarization, and identity management with a secure Angular frontend.',
        sourceCode: 'https://github.com/HasanKhadd0ur/GPDocs',
        link: '#'
    },
    {
        projectName: 'Sentiment Classification of Mental Health Discourse',
        image: MentalHealth,
        description: 'Machine learning pipeline on a 50K dataset of mental health discourse. Two-stage classification: (1) Normal vs Non-Normal discourse, (2) multi-class sentiment classification. Benchmarked traditional ML vs BERT embeddings for domain-specific insights.',
        sourceCode: 'https://github.com/HasanKhadd0ur/Sentiment-Analysis-NLP',
        link: '#'
    },
    {
        projectName: 'Projects Management Web App – HIAST',
        image: HIASTProjects,
        description: 'Full-stack web application for project planning, monitoring, and reporting at HIAST. Implemented with ASP.NET Core + Clean Architecture on the backend and Angular for the frontend, replacing manual paper-based workflows.',
        sourceCode: 'https://github.com/HasanKhadd0ur/PSManagement',
        link: '#'
    },
    {
        projectName: 'eMedic – Prescriptions & Medicines Management',
        image: eMedic,
        description: 'Web system to digitize prescriptions and manage pharmacy inventory. Developed with ASP.NET Core, SQL Server, and Clean Architecture principles.',
        sourceCode: 'https://github.com/HasanKhadd0ur/Medic',
        link: '#'
    },
      {
        projectName: 'MediatRaptor',
        image: MediatRaptor,
        description: '🦖 A lightweight and extensible implementation of the Mediator pattern with built-in CQRS support. Features pipeline behaviors (logging, validation, caching), no external dependencies, and a clean IMediator abstraction. Designed as a modern, minimal alternative to heavier mediator libraries like MediatR.',
        sourceCode: 'https://github.com/HasanKhadd0ur/MediatRaptor',
        link: '#'
    },
    {
        projectName: 'Shared Kernel for Clean Architecture & DDD',
        image: CASolution,
        description: 'Reusable shared kernel .Net package for Clean Architecture and DDD systems. Provides base abstractions, error handling, and event management for scalable enterprise solutions.',
        sourceCode: 'https://github.com/HasanKhadd0ur/CASolution.SharedKernel',
        link: '#'
    },
    {
        projectName: 'UniFile',
        image: UniFile,
        description: 'A modular file management library supporting CRUD operations across local and cloud storage providers. Designed for extensibility and easy plug-in integrations.',
        sourceCode: 'https://github.com/HasanKhadd0ur/UniFile',
        link: '#'
    }
]
