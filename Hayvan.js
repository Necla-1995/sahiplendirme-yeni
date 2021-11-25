import React from 'react';
import { useContext } from 'react';
import { HayvanContext } from '../context/HayvanContext';

//JSX ile hayvanlarla ilgili bilgilendirme cardları
const Hayvan = ({ hayvanlar }) => {
  const {deleteHayvan} = useContext(HayvanContext)
       return (
        <>
        {
          hayvanlar.map((hayvan) => (
            <div className="container">
              <div key={hayvan.id} className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{hayvan.name} <small>({hayvan.bdaymonth})</small></h2>
                    <h5 className="card-title">{hayvan.city}</h5>
                    <h6 className="card-title">{hayvan.Tel}</h6>
                    <p className="card-text">{hayvan.info}</p>
                    <p className="card-text">{hayvan.adres}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <button onClick={() => deleteHayvan(hayvan.id)} id="sahiplen" className="btn">Sahiplen</button>
                </div>
              </div>
    
            </div>
          ))
        }
        </>
      )};
    






export default Hayvan;
