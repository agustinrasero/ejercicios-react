
export const Reducer = (state,action) =>{
    switch(action.type){
        case 'claro':
            return {color: '#E0E0E0'}
        case 'oscuro':
            return {color: '#252424'}
        default:
            return state;
    }
}