import React from 'react'

const PeticionApi = () => {

const [naves, setNaves] = React.useState([])
const [paginacion, setPaginacion] = React.useState(0)

const listadoNaves = async(paginacion) => {
  const traer = await fetch (`https://api.spacexdata.com/v3/rockets?limit=2&offset=${paginacion}`)
  const respuesta = await traer.json()

    setNaves(respuesta)
    console.log(respuesta)   
}

const siguiente = () =>{
  setPaginacion(paginacion+2)
  listadoNaves(paginacion+2)
}

const atrás = () =>{
  setPaginacion(paginacion-2)
  listadoNaves(paginacion-2)
}
  return (
    

  )
}

export default PeticionApi