import "./Home.css"
import { useState, useRef } from 'react';

const data = [
    { nombre: 'Arquitectura', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería Civil Eléctrica', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería Civil Informática', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería Civil Matemática', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería Civil Química', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería Civil Telemática', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería Comercial', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería en Aviación Comercial', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Ingeniería en Diseño de Productos', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
    { nombre: 'Licenciatura en Astrofísica', campus: 'San Joaquín y Casa Central', jornada: 'Diurna y Vespertina' },
]

function Home(){
    const [searchValue, setSearchValue] = useState('');

    return(
        <div className="home">
            <div className="banner">
                <div className="title">ADMISION</div>
            </div>
            <div className="breadcrumbs">Admision (en vola poner debajo del banner?)</div>
            <div className="body-carreras">
                <div className="title-carreras">Carreras Pregrado</div>
                <form className="form-search-carreras">
                    <label>Buscar Carrera:</label>
                    <input className="search-bar" type="text" placeholder="Inserte Nombre Carrera.." value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}/>
                    <input className="form-submit" type="submit" value="Buscar"></input> 
                </form>
                <CareerTable searchTerm={searchValue}/>
            </div>
        </div>
    )
}

const CareerTable = (props) => {
    const filtered = data.filter(
        carrera =>
            carrera.nombre.toLowerCase().indexOf(props.searchTerm.toLowerCase()) > -1,
    );
  
    return (
        <table>
            {props.searchTerm ? (
                <tbody>
                    <tr>
                        <th>CARRERA</th>
                        <th>CAMPUS</th>
                        <th>JORNADA</th>
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
                        <th>CARRERA</th>
                        <th>CAMPUS</th>
                        <th>JORNADA</th>
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
    return (
        <tr>
            <td>
                <a href="carrera">{props.nombre}</a>
            </td>
            <td>{props.campus}</td>
            <td>{props.jornada}</td>
        </tr>
    )
}


export default Home;