
// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi"

// }

export const loadEntries = async ({ commit }) => {
    const {data} = await journalApi.get('/entries.json')
    // console.log(data);
    const entries = []
    for (let id of Object.keys( data )) {
        entries.push({
            id,
            ...data[id]
        })
    }
    // console.log(entries);
    commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
    // console.log(entry, 'actions');
    // const{ id, ...rest } = entry
    // const dataToSave = {id, picture, text}
    // Agarramos todos los datos de la entrada o del registro que tenemos en store y lo desestructuramos en las partes que queremos para no iterar y sacar los campos seleccioandos
    const { date, picture, text } = entry
    // le decimos a la varaible que almacene solo esos datos
    const dataToSave = {date, picture, text}
    // Mandamos a la ruta lo que queremos que actualice
    const resp = await journalApi.put( `/entries/${entry.id}.json` , dataToSave)
    // console.log(resp);
    // realizar la mutacion de la solicitud PUT
    commit('updateEntry', {...entry})
}


export const createEntry = async (/*{ commit }*/) => {

}
