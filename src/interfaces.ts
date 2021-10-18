import {Question} from 'inquirer';

interface Inquiry extends Question {
    choices?: string[]
}

interface moustacheData {
    projectName: string,
    author: string,
}

export {
    Inquiry,
    moustacheData
}