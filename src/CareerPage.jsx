import React from 'react';
import Breadcrumbs from './Breadcrumbs.jsx';

function CareerPage(){
    const breadcrumbsData = [
        { label: 'Admision', url: '/' },
        { label: 'Career' },
      ];
    
      return (
        <div>
          <h1>NOMBRE CARRERA</h1>
          <Breadcrumbs paths={breadcrumbsData} />
        </div>
      );
}

export default CareerPage;