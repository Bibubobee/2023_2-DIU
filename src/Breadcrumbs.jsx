import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ paths }) => {
    return (
      <div className="breadcrumbs">
        {paths.map((path, index) => (
          <span key={`${path.label}-${index}`}>
            {index > 0 && <span> {'>'} </span>}
            <Link to={path.url}>{path.label}</Link>
          </span>
        ))}
      </div>
    );
  };

export default Breadcrumbs;
