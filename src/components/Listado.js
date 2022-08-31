import React from 'react';
import Item from "./Item";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const itemJson = [ /* sTRINGIFIAR*/
  {
    "id": "1",
    "producto": {
      "nombre": "Zapatillas Nike Revolution 6 Next Nature",
      "descripcion": "Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes."
    },
    "stock": 5
  },
  {
    "id": "2",
    "producto": {
      "nombre": "Zapatillas Puma Shuffle",
      "descripcion": "Las zapatillas Puma Shuffle ADP están confeccionadas en materiales sintéticos. De caña baja, con ajuste personalizado gracias al sistema de cordones, sus perforaciones le dan un estilo urbano que se fusiona con la inserción del logo PUMA N°1 y PUMA N°2 para que camines la calle de la ciudad con un calzado sofisticado."
    },
    "stock": 1
  },
  {
    "id": "3",
    "producto": {
      "nombre": "Zapatillas Adidas Coreracer",
      "descripcion": "Urbanas, livianas y frescas, las Zapatillas adidas Coreracer están pensadas para cumplir con las demandas de los corredores más exigentes. Su suela tiene un estabilizador de talón y su capellada es transpirable para mantener el confort que mereces durante todo tu trayecto."
    },
    "stock": 3
  }
]

export default function Listado(props) {
  return (
    <div className='container'>
      {/* renderizamos los Item aquí */
      itemJson.map(zapato => <Item nombre={zapato.producto.nombre} descripcion={zapato.producto.descripcion} 
        stock={zapato.stock} anadirAlCarrito={props.aumentar}/>)
      }
    </div>
  )
}
