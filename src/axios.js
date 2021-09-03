import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://localhost:5001/clone-a5a1c/us-central1/api' //API Url (cloud function url)
});

export default instance;