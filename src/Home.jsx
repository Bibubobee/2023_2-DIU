import "./Home.css"
import Breadcrumbs from "./Breadcrumbs.jsx";
import { useState, useRef, useEffect } from 'react';

const data = [
    { nombre: 'Arquitectura', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Civil Eléctrica', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Civil Informática', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Civil Matemática', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Civil Química', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Civil Telemática', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Comercial', campus: 'Casa Central y Vitacura', jornada: 'Diurno y Vespertina' },
    { nombre: 'Ingeniería en Aviación Comercial', campus: 'Vitacura', jornada: 'Diurno' },
    { nombre: 'Ingeniería en Diseño de Productos', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Licenciatura en Astrofísica', campus: 'San Joaquín y Casa Central', jornada: 'Diurno' },
    { nombre: 'Ingeniería Civil Metalúrgica', campus: "Casa Central", jornada: "Diurno" },
    { nombre: 'Ingeniería en Biotecnología', campus: "Viña del Mar y Concepción", jornada: "Diurno" }, 
    { nombre: 'Técnico Universitario en Alimentos', campus: "Viña del Mar", jornada: "Diurno" },
    { nombre: 'Ingeniería de Ejecución en Control e Instrumentación Industrial', campus: "Viña del Mar y Concepción", jornada: "Vespertina" },
    { nombre: 'Ingeniería de Ejecución en Gestión Industrial', campus: "Viña del Mar, San Joaquín y Concepción", jornada: "Vespertina"},
]

function Home(){
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        document.title = 'Admisión USM'; // Set the title for the home page
      }, []); // The empty dependency array ensures this effect runs only when the component mounts

    return(
        <div className="home">
            <div className="banner">
                <div className="title">ADMISION</div>
            </div>
            <div className="breadcrumbs"> <Breadcrumbs paths={[{ label: 'Admisión', url: '/' }]} currentPage="Admisión"/> </div>
            <div className="body-carreras">
                <div className="title-carreras">Carreras Pregrado</div>
                <div className="search-carreras">
                    <label>Buscar carrera:</label>
                    <input className="search-bar" type="text" placeholder="Inserte términos.." value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)} maxLength={30}/>
                </div>
                <CareerTable searchTerm={searchValue}/>
            </div>
        </div>
    )
}

const CareerTable = (props) => {
    const filtered = data.filter(
        carrera =>
            carrera.nombre.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1 || 
            carrera.campus.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1 ||
            carrera.jornada.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1,
    );
  
    return (
        <table>
            {props.searchTerm ? (
                <tbody>
                    <tr>
                        <th style={{"width":"50%"}}>CARRERA</th>
                        <th style={{"width":"30%"}}>CAMPUS</th>
                        <th style={{"width":"20%"}}>JORNADA</th>
                    </tr>
                    {filtered.map((val, _) => {
                        return (
                            <TableRow nombre={val.nombre} campus={val.campus} jornada={val.jornada}/>
                        )
                    })}
                </tbody>
            ): (
                <tbody>
                    <tr>
                        <th style={{"width":"50%"}}>CARRERA</th>
                        <th style={{"width":"30%"}}>CAMPUS</th>
                        <th style={{"width":"20%"}}>JORNADA</th>
                    </tr>
                    {data.map((val, _) => {
                        return (
                            <TableRow nombre={val.nombre} campus={val.campus} jornada={val.jornada}/>
                        )
                    })}
                </tbody>
            )}
      </table>
    );
}

const TableRow = (props) => {
    const encodedCareerName = encodeURIComponent(props.nombre);
    const url = `/carrera/${encodedCareerName}`;
    return (
        <tr>
            <td>
                <a href={url}>{props.nombre}</a>
            </td>
            <td>{props.campus}</td>
            <td>{props.jornada}</td>
        </tr>
    )
}


export default Home;