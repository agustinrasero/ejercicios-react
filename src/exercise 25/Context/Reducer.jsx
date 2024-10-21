export const Reducer = (state, action) => {
    switch (action.type) {
        case 'agregar':
            return {
                usuarios: [...state.usuarios, action.payload]
            }
        case 'eliminar':
            return {
                usuarios:[...state.usuarios.filter((usuario,index) => index !== action.payload)]
            }
        case 'editar':{
            // Actualiza el usuario en el índice proporcionado (action.payload.id)
            const usuariosActualizados = [...state.usuarios];
            usuariosActualizados[action.payload.id] = {
              nombre: action.payload.nombre,
              apellido: action.payload.apellido,
              edad: action.payload.edad
            };
      
            return {
              usuarios: usuariosActualizados
            };
        }
            
        
            
        default:
            return state
    }
}
