import {Question} from 'inquirer';

interface Inquiry extends Question {
  choices?: string[];
}

interface moustacheData {
//this field is required please check 
  projectName: string;
  author: string;
  appwriteEndpoint: string;
  appwriteProject: string;
}

export {Inquiry, moustacheData};
