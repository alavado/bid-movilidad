import React from 'react'
import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import './SeccionIzquierda.css'
import { useDispatch, useSelector } from 'react-redux'
import { fijarPais, fijarDestino } from '../../redux/actions'
import { NavLink as Link } from 'react-router-dom'
import logoIIEP from '../../assets/logo_iiep.png'
import logoCIAE from '../../assets/logo_ciae_uchile.png'
import logoVeraset from '../../assets/logo_veraset.png'
import configPaises from '../../config/paises'
import useTextos from '../../hooks/useTextos'

const SHEET_ID = '1o03EJBiDLBYQ6n6laNJaOvEVe_gr9NYU18Fm9hkXoYo'
const ACCESS_TOKEN = 'ya29.a0Ae4lvC1lbitxBfZftqLJTPzeY5I_Vv-SqSOdJqskVXxUYMcZ9XWtKHv8QWhUPQ4yPUGFfntS1-0iBaY00d01oblEQUEOQ31J9Cu0kzulw9QTJU0vsIGnRWh_kxdu3sMiiDR6crG36P145EjOE_Jlz_ep9xPeyLwVS3k'

const SeccionIzquierda = () => {

  const dispatch = useDispatch()
  const paises = configPaises.sort((p1, p2) => p1.nombre > p2.nombre ? 1 : -1)
  const textos = useTextos()
  console.log({paises})

  const updateSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        requests: [{
          repeatCell: {
            range: {
              startColumnIndex: 0,
              endColumnIndex: 1,
              startRowIndex: 0,
              endRowIndex: 1,
              sheetId: 0
            },
            cell: {
              userEnteredValue: {
                "numberValue": 10
              },
            },
            fields: "*"
          }
        }]

      })
    })
  }
  
  return (
    <aside className="SeccionIzquierda">
      <div className="SeccionIzquierda__contenedor_campo">
        <label htmlFor="selector-pais" className="SeccionIzquierda__label">{textos.seleccionePais}</label>
        <ReactFlagsSelect
          style={{ outline: 'none' }}
          id="selector-pais"
          className="SeccionIzquierda__selector-pais"
          defaultCountry="CO"
          countries={paises.map(({ codigo }) => codigo)}
          customLabels={paises.reduce((obj, p) => ({ ...obj, [p.codigo]: p.nombre }), {})}
          onSelect={codigo => {
            dispatch(fijarPais(codigo))
            dispatch(fijarDestino(codigo))
          }}
        />
      </div>
      <ul className="SeccionIzquierda__links">
        <a className="SeccionIzquierda__link" target="_blank" href={textos.linkMetodologia} rel="noopener noreferrer">
          {textos.metodologia}
        </a>
        <a className="SeccionIzquierda__link" target="_blank" href={textos.linkAcercaDe} rel="noopener noreferrer">
          {textos.acercaDe}
        </a>
        <a className="SeccionIzquierda__link SeccionIzquierda__link--contacto" href="mailto:research@iadb.org?Subject=Mapa%20de%20distanciamiento%20social" target="_top">
          {textos.contacto}<br /><span className="SeccionIzquierda__mail_contacto"></span>
        </a>
        <a className="SeccionIzquierda__link SeccionIzquierda__link--blog" href={textos.linkBlog} target="_top">
          {textos.blog}<br /><span className="SeccionIzquierda__mail_contacto"></span>
        </a>
        <a className="SeccionIzquierda__link SeccionIzquierda__link--blog" href={textos.linkDashboard} target="_top">
          {textos.dashboard}<br /><span className="SeccionIzquierda__mail_contacto"></span>
        </a>
        {/* <button onClick={updateSheetValues}>update</button> */}
      </ul>
      <div className="SeccionIzquierda__inferior">
        <div className="SeccionIzquierda__stickers">
          <h2 className="SeccionIzquierda__stickers_titulo">{textos.conLaColaboracionDe}</h2>
          <div className="SeccionIzquierda__contenedor_stickers">
            <a href="http://ciae.uchile.cl/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--ciae" src={logoCIAE} alt="Logo CIAE" />
            </a>
            <a href="http://iiep-baires.econ.uba.ar/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--iiep" src={logoIIEP} alt="Logo IIEP" />
            </a>
            <a href="https://veraset.com/" target="_blank" rel="noopener noreferrer">
              <img className="SeccionIzquierda__sticker SeccionIzquierda__sticker--veraset" src={logoVeraset} alt="Logo Veraset" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SeccionIzquierda
