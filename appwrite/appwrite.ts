import {Appwrite} from 'appwrite';

const appwrite = new Appwrite();

// the endpoint of the Appwrite instance
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT as string;
//the Appwrite project id
const project = import.meta.env.VITE_APPWRITE_PROJECT as string;

// initialize Appwrite
appwrite.setEndpoint(endpoint).setProject(project);

export {
    appwrite
}