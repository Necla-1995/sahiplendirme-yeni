import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

//Card Api
export const HayvanContext = createContext();
 
const HayvanContextProvider = (props) =>{
   const [hayvanlar, setHayvanlar]  = useState([
        {
             id:uuidv4(),
            name: "Karabaş",
            bdaymonth: 2018,
            info: "Tüm aşıları tamdır ve kısırlaştırılmıştır.",
            city: "İzmir",
            Tel: "543-435-22-33",
            adres: "mithatpaşa mah., şanlı sok., Alsancak/İzmir",
            },
            
            {
                 id:uuidv4(),
            name: "Kara",
            bdaymonth: 2014,
            info: "Tüm aşıları tamdır ve kısırlaştırılmıştır.",
            city: "İzmir",
            Tel: "573-405-56-33",
            adres: "kemalpaşa mah., şanlı sok., Alsancak/İzmir",
            },
            {
                 id:uuidv4(),
            name: "Lili",
            bdaymonth: 2019,
            info: "Tüm aşıları tamdır ve kısırlaştırılmıştır.",
            city: "İzmir",
            Tel: "543-405-27-83",
            adres: "kemalpaşa mah., atatürk sok., Gaziemir/İzmir",
            },
            {
                 id:uuidv4(),
            name: "Boncuk",
            bdaymonth: 2018,
            info: "Tüm aşıları tamdır ve kısırlaştırılmıştır.",
            city: "Mersin",
            Tel: "503-412-12-78",
            adres: "Şirin mah., şanlı sok., Erdemli/Mersin",
            },
            {
                 id:uuidv4(),
            name: "Yumak",
            bdaymonth: 2020,
            info: "Tüm aşıları tamdır ve kısırlaştırılmadı.",
            city: "İstanbul",
            Tel: "533-980-20-63",
            adres: "Mahpus mah., süslü sok., Silivri/İstanbul",
            },
            {
                 id:uuidv4(),
            name: "Şanslı",
            bdaymonth: 2021,
            info: "Tüm aşıları tan değil ve kısırlaşrılmadı.",
            city: "Hatay",
            Tel: "532-430-72-12",
            adres: "ferhatpaşa mah., ayyıldız sok., Antakya/Hatay",
            }
    ] )

    const addHayvan = ( name,  bdaymonth, info, city, Tel, adres) => {
        setHayvanlar([...hayvanlar, {id:uuidv4(), name,  bdaymonth, info, city, Tel, adres}])
    }

    const deleteHayvan = (id) =>{
         setHayvanlar(hayvanlar.filter(hayvan => hayvan.id !==id))
    }

return(
    <HayvanContext.Provider value={{hayvanlar, addHayvan, deleteHayvan}}>
        {props.children}
    </HayvanContext.Provider>
)

}

     
    

export default HayvanContextProvider;