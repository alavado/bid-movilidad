import React from 'react'
import './AcercaDe.css'

const AcercaDe = () => {
  return (
    <div className="AcercaDe">
      <h1 className="AcercaDe__titulo">Mapa de Distanciamiento Social</h1>
      <div className="AcercaDe__contenido">
        <h2 className="AcercaDe__subtitulo">Descripción</h2>
        <p className="AcercaDe__parrafo">El Mapa de Distanciamiento Social es una herramienta de visualización que presenta índices de movilidad de las personas con un alto nivel de desagregación espacial y temporal. Específicamente, la versión actual de la herramienta presenta medianas de kilómetros recorridos por día a nivel de regiones, provincias o estados para países de América Latina y el Caribe. Estas estadísticas se construyen utilizando datos georreferenciados de celulares, los cuales están anonimizados.</p>
        <p className="AcercaDe__parrafo">La herramienta busca proveer información útil para la toma de decisiones para hacedores de política respecto a si las medidas de distanciamiento social, que se están implementando como parte de la respuesta al COVID-19, están generando cambios en la movilidad de las personas. Al proveer información desagregada geográficamente y a nivel diario, la herramienta puede servir para monitorear los niveles de movilidad de personas y como estos responden a las medidas adoptadas. Además, se espera que la herramienta pueda ser de utilidad para la sociedad civil, los medios, los investigadores y la población de América Latina y el Caribe.</p>
        <h2 className="AcercaDe__subtitulo">Privacidad</h2>
        <p className="AcercaDe__parrafo">En la producción del Mapa de Distanciamiento Social se ha seguido un estricto protocolo para asegurar la privacidad de los datos. Los datos provienen de la empresa Veraset. Esta empresa ha provisto bases de datos similares a reconocidos académicos para estudiar diferentes aspectos económicos y sociales de la crisis del COVID-19. La base de datos obtenida contiene datos anonimizados, es decir, no contiene nombres o números de celulares. Además, la base de datos no contiene ningún indicador sociodemográfico como género, edad o nivel socio-económico. El procesamiento de estos datos se ha regido por altos estándares técnicos de ciberseguridad para asegurar la protección de los mismos. Asimismo, el Mapa de Distanciamiento Social contiene información a nivel agregada a nivel de áreas geográficas. Finalmente, para asegurar la privacidad de los datos individuales, solo se publican resultados para áreas geográficas que contengan al menos 100 celulares en cada período analizado.</p> 
        
        <h2 className="AcercaDe__subtitulo">Equipo</h2>

        <h3 className="AcercaDe__subtitulo2">Economista Jefe</h3> 
        <p className="AcercaDe__parrafo">Eric Parrado (BID)</p>

        <h3 className="AcercaDe__subtitulo2">Coordinadores</h3>
        <p className="AcercaDe__parrafo">Daniel Aromi (UBA)</p>
        <p className="AcercaDe__parrafo">Julián Cristia (BID)</p>
        <p className="AcercaDe__parrafo">Alejandro Izquierdo (BID)</p>

        <h3 className="AcercaDe__subtitulo2">Ingenieros Big Data</h3>
        <p className="AcercaDe__parrafo">Catalina Espinoza (Universidad de Chile)</p>
        <p className="AcercaDe__parrafo">Gabriel Goette (BID)</p>
        <p className="AcercaDe__parrafo">Gastón Líberman (UBA)</p>
        <p className="AcercaDe__parrafo">Valeria Lovaisa (BID)</p>

        <h3 className="AcercaDe__subtitulo2">Analistas</h3>
        <p className="AcercaDe__parrafo">Paula Bonel (UBA)</p>
        <p className="AcercaDe__parrafo">Martín Llada (UBA)</p>
        <p className="AcercaDe__parrafo">Juan Ignacio Pereira (Universidad Católica del Uruguay) </p>
        <p className="AcercaDe__parrafo">Xiomara Pulido (BID)</p>
        <p className="AcercaDe__parrafo">Julieth Santamaría (University of Minnesota)</p>

        <p className="AcercaDe__subtitulo2">Visualización</p>
        <p className="AcercaDe__parrafo">Alejandro Lavado</p>
        
        <h3 className="AcercaDe__subtitulo2">Colaboradores</h3>
        <p className="AcercaDe__parrafo">Roberto Araya (Universidad de Chile)</p>
        <p className="AcercaDe__parrafo">Pablo Bachelet (BID)</p>
        <p className="AcercaDe__parrafo">Bernardo Deregibus (BID) </p>
        <p className="AcercaDe__parrafo">María Francis Gaska (AWS)</p>
        <p className="AcercaDe__parrafo">Daniel Hincapié (BID)</p> 
        <p className="AcercaDe__parrafo">Santiago Monroy (BID)</p>
        <p className="AcercaDe__parrafo">Pablo Bachelet (BID)</p>
        <p className="AcercaDe__parrafo">Jimena Romero (BID) </p>
        <p className="AcercaDe__parrafo">Miguel Soldano (BID)</p>
        <p className="AcercaDe__parrafo">Rosa Vidarte (UNESCO)</p> 
        <p className="AcercaDe__parrafo">Eugenia Valdez (BID)</p> 
        
        <h3 className="AcercaDe__subtitulo2">Institución Coordinadora</h3>
        <p className="AcercaDe__parrafo">Banco Interamericano de Desarrollo (BID)</p> 

        <h3 className="AcercaDe__subtitulo2">Instituciones Colaboradoras</h3>
        <p className="AcercaDe__parrafo">Centro de Investigación Avanzado en Educación – Universidad de Chile</p> 
        <p className="AcercaDe__parrafo">Instituto Interdisciplinario de Economía Política – Universidad de Buenos Aires (UBA) (BID)</p> 
          
        <h3 className="AcercaDe__subtitulo2">Con el apoyo de</h3>
        <p className="AcercaDe__parrafo">Amazon Web Servicies (AWS)</p> 
        <p className="AcercaDe__parrafo">Veraset</p> 
      </div>
    </div>
  )
}

export default AcercaDe
