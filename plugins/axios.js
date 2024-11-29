import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const instance = axios.create({
        baseURL: 'https://my-json-server.typicode.com/rizkyari/mock-api',
    });

    nuxtApp.provide('axios', instance);
});
