import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:8000",
    headers: {
        "Content-type": "application/json",
    },
});
export default api;


async function get(ruta) {
    const response = await api.get(ruta);
    if (response.status === 200) {
        return response.data;
    }
    else{
        return null;
    }
}