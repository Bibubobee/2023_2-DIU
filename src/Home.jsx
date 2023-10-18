import "./Home.css"

function Home(){
    return(
        <div className="home">
            <div className="banner">
                <div className="title">ADMISION</div>
                <div className="breadcrumbs">Admision (en vola poner debajo del banner?)</div>
            </div>

            <div className="title-carreras">Carreras (Pregrado?)</div>
            <table> 
                <tbody>
                    <tr>
                        <th>CARRERA</th>
                        <th>CAMPUS*</th>
                        <th>JORNADA</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Arquitectura</a>
                        </td>
                        <td>San Joaquín y Casa Central</td>
                        <td>Diurna y Vespertina</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Ingeniería Civil Eléctrica</a>
                        </td>
                        <td>San Joaquín</td>
                        <td>Diurna</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Ingenieria Civil Informática</a>
                        </td>
                        <td>San Joaquín y Casa Central</td>
                        <td>Diurna y Vespertina</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Ingeniería Civil Matemática</a>
                        </td>
                        <td>San Joaquín</td>
                        <td>Diurna</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Ingeniería Civil Química</a>
                        </td>
                        <td>San Joaquín</td>
                        <td>Diurna</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Ingeniería Civil Telemática</a>
                        </td>
                        <td>San Joaquín</td>
                        <td>Diurna</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="*">Ingeniería Civil Comercial</a>
                        </td>
                        <td>San Joaquín</td>
                        <td>Diurna</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home;