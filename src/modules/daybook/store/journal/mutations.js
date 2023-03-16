
// export const myAction = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => {
    // const index = state.entries.findIndex( e => e.id === entry.id )
    // Que busque la informacion recivida por el archivo Actions para crear una busqueda con el registro de la BD
    const idx = state.entries.map( e=>e.id).indexOf(entry.id)
    // console.log([idx]);
    state.entries[idx] = entry
}

export const addEntry = (/* state */ ) => {

}
