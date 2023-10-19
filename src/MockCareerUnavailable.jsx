import "./CareerPage.css";
import React from 'react';
import Breadcrumbs from './Breadcrumbs.jsx';


function MockCareerUnavailable() {
    const breadcrumbsData = [
        { label: 'Admisión', url: '/' },
        { label: 'Carrera No Disponible',  url: '/carrera/No-disponible' },
      ];
    return (
        <div className = "CarrerPage">
            <div className="banner">
                <div className="title">CARRERA NO DISPONIBLE</div>
            </div>
            <div className="breadcrumbs"><Breadcrumbs paths={breadcrumbsData} currentPage="Carrera No Disponible"/></div>
            <div className="body-carreras">
                Proximamente
            </div>
            </div>
    );
}
export default MockCareerUnavailable; 