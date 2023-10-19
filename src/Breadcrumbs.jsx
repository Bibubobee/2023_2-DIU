import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ paths, currentPage }) => {
  return (
      <div className="breadcrumbs">
          {paths.map((path, index) => (
              <span key={`${path.label}-${index}`}>
                  {index > 0 && <span> {'>'} </span>}
                  <a
                      href={path.url}
                      className={`breadcrumb-link ${currentPage === path.label ? 'current' : ''}`}
                  >
                      {path.label}
                  </a>
              </span>
          ))}
      </div>
  );
};


export default Breadcrumbs;
