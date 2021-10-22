#!/usr/bin/env node

import {cyan, green} from 'chalk';
import inquirer from 'inquirer';
import {Inquiry, moustacheData} from './interfaces';
import * as fs from 'fs';
import {copy} from './templateEngine';
import gitUsername from 'git-username';
const {resolve} = require('path');

async function run() {
  // theses questions will be asked by the cli once you run the `init` command
  const inquiries: Inquiry[] = [
    {
      type: 'input',
      name: 'name',
      message: 'Project name?',
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Select a framework',
      choices: ['Vue.JS', 'Vanilla'],
      filter(val) {
        return val.toLowerCase().replace('.', '');
      },
    },
    {
      type: 'list',
      name: 'setup',
      message: 'Do you want a basic or batteries-included template',
      choices: ['Basic', 'Batteries-included'],
      filter(val) {
        return val.toLowerCase().replace('-', '');
      },
    },
    {
      type: 'input',
      name: 'endpoint',
      message: 'Appwrite endpoint?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'Appwrite project id?',
    },
  ];

  // walk user through questions
  const {name, framework, endpoint, project, setup} = await inquirer
    .prompt(inquiries)
    .then((answers) => {
      return answers;
    });

  const templateRoot = resolve(__dirname, '..', 'templates');

  const projectDir = `./${name}`;
  const templateDir = resolve(templateRoot, framework, setup);
  const moustacheData: moustacheData = {
    projectName: name,
    author: gitUsername() ? (gitUsername() as string) : 'no-git-user-found',
    appwriteEndpoint: endpoint,
    appwriteProject: project,
  };

  // check if selected directory is empty
  if (!(await isDirEmpty(projectDir))) {
    throw new Error(`${projectDir} is not empty.`);
  }

  console.log(`\nCreating a new project in ${green(projectDir)}.\n`);

  // copy template into directory
  await copy(projectDir, templateDir, moustacheData);

  //print success text
  const text = `
    Your project has been created. Now run:
    ${cyan(`cd ${name}`)}
    ${cyan('npm install')}
	${cyan('npm run dev')}
    `;
  console.log(text); //FIXME: the text is currently unaligned
}

function isDirEmpty(dirname: string) {
  if (fs.existsSync(dirname)) {
    return fs.promises.readdir(dirname).then((files) => {
      return files.length === 0;
    });
  }
  fs.mkdirSync(dirname);
  return true;
}

run();
