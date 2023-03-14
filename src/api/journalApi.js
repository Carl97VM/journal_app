
import axios from "axios";
const journalApi = axios.create({
    baseURL: 'https://vue-demo-371c4-default-rtdb.firebaseio.com'
})

export default journalApi