import "./CareerPage.css";
import React from 'react';
import Breadcrumbs from './Breadcrumbs.jsx';

const data = [
    { prueba: 'NEM', sinm2: '15%', conm2: '15%' },
    { prueba: 'Ranking Notas', sinm2: '25%', conm2: '20%' },
    { prueba: 'Competencia Matemática 1 (NM1)', sinm2: '40%', conm2: '35%' },
    { prueba: 'Competencia Matemática 2 (NM2)', sinm2: 'NO EXIGE', conm2: '10%' },
    { prueba: 'Competencia Lectora', sinm2: '10%', conm2: '10%' },
    { prueba: 'Ciencias', sinm2: '10%', conm2: '10%' },
    { prueba: 'Historia y ciencias Sociales', sinm2: '10%', conm2: '10%' },
]

function CareerPage() {
    const breadcrumbsData = [
        { label: 'Admisión', url: '/' },
        { label: 'Arquitectura' },
      ];
    return (
        <div className = "CarrerPage">
            <div className="bannerCarrera">
                <div className="title">ARQUITECTURA</div>
                <img src="acreditacionArqui.png" alt="Acreditación" className="acreditacion-image" />
            </div>
            <div className="breadcrumbs"><Breadcrumbs paths={breadcrumbsData} /></div>
            <div className="body-carreras">
                <div className="title-carreras">¿Qué es?</div>
                <div className="description-box">
                    La carrera de Arquitectura de la USM permite dominar y aplicar conocimientos científico-tecnológicos avanzados para el diseño, evaluación y desarrollo del hábitat construido, promoviendo con ello el mejoramiento de la calidad de vida de las personas. Instalará, como tema central de su discurso, la preocupación por la intervención sustentable sobre el medio ambiente, el emprendimiento y la investigación disciplinar. Construirá un activo diálogo interdisciplinar vinculando de modo indisoluble, la creatividad e innovación arquitectónica con las ciencias de la ingeniería y la gestión de los recursos.
                </div>
                <div className="container">
                    <div className="information-box">
                        <p><strong>Duración:</strong> 5.5 años (11 semestres)</p>
                        <p><strong>Arancel:</strong> $5,380,000 al año</p>
                        <p><strong>Sede:</strong> Casa Central y San Joaquín</p>
                    </div>
                    <CareerTable />
                </div>
                <h1>Plan de estudios</h1>
            </div>
            <div className = "container">
            <div className = "studyPlan"></div>
            </div>
        </div>
    );
}
const CareerTable = (props) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Con M2</th>
                    <th>Sin M2</th>
                </tr>
                {data.map((val, index) => (
                    <TableRow key={index} prueba={val.prueba} sinm2={val.sinm2} conm2={val.conm2} />
                ))}
            </tbody>
        </table>
    );
}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.prueba}</td>
            <td>{props.sinm2}</td>
            <td>{props.conm2}</td>
        </tr>
    );
}

export default CareerPage;