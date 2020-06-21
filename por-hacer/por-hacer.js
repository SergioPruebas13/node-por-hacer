const fs = require('fs');

let listadoToDo = [];

const guardarDb = ( ) => {
     let data = JSON.stringify(listadoToDo);

     fs.writeFile(`db/data.json`,data,(err) =>{
        if (err) {
           throw new Error('No se pudo grabar',err)
        }
    });
}

const cargarDB = () => {

    try {
        listadoToDo = require('../db/data.json');
    } catch (error) {
        listadoToDo = [];
    }

}

const crear = (descripcion ) => {

    cargarDB();

     let porHacer = {
         descripcion,
         completado: false
     };

     listadoToDo.push(porHacer);
     guardarDb();

     return porHacer;
}

const getListado = () => {
    cargarDB();
     return listadoToDo;
}

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();

    let index = listadoToDo.findIndex(( tarea ) => {
        
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }


}

const borrar = (descripcion) => {
    
    cargarDB();
    
    let index = listadoToDo.findIndex(( tarea ) => { 

        return tarea.descripcion == descripcion;
    });

    if (index >= 0) {
        let ret = listadoToDo[index].descripcion ;
        listadoToDo.splice(index,1);
        guardarDb();
        return ret;
    }else{
        return false;
    }
    

    
    
}

module.exports ={
    crear,
    getListado,
    actualizar,
    borrar
}