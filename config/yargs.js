const descripcion ={
        deman: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
}

const completado ={
        default: true,
        alias: 'c',
        desc: 'marca como completado o pendiente la tarea'
}


const argv = require('yargs')
        .command('crear','Crear un elemnto por hacer',{
            descripcion    
        })
        .command('actualizar','Actualiza el estado complementado de una tarea',{
            descripcion,
            completado   
        })
        .command('borrar','borra la tarea seleccionada',{
            descripcion   
        })
        .help()
        .argv;

module.exports = {
    argv
}

        