import * as fs from 'fs/promises';
import {join, relative, resolve, dirname} from 'path';
import {compile} from 'handlebars';
import isUtf8 from './isUTF8';
import {moustacheData} from './interfaces';

/**
 * formats a text using handlebars
 * @param text the text that should be formatted
 * @param moustaches the moustaches and their data that should be replaced
 */
function format(text: string | Buffer, moustaches: moustacheData) {
  const template = compile(text.toString(), {noEscape: true});
  return template(moustaches);
}

/*
    Returns a list of all files in a directory
 */
async function goThroughDir(dir: string) {
  let fileList: any[] = [];

  const files = await fs.readdir(dir);
  for (const file of files) {
    const path = join(dir, file);
    if ((await fs.stat(path)).isDirectory()) {
      fileList = [...fileList, ...(await goThroughDir(path))];
    } else {
      fileList.push(path);
    }
  }
  return fileList;
}

/**
 * Creates the project directory
 * @param filePath the path of the project directory
 */
async function prepareDir(filePath: string) {
  const target = dirname(filePath);
  try {
    await fs.mkdir(target, {recursive: true});
  } catch {
    throw new Error(`Cannot create directory with the path ${target}`);
  }
}

/**
 * Replaces all moustaches in the template and copies it into the project folder
 * @param projectDir the path to the project directory
 * @param templateDir the path to the template directory
 * @param moustaches the moustache data
 */
async function copy(
  projectDir: string,
  templateDir: string,
  moustaches: moustacheData
) {
  const templateFiles = await goThroughDir(templateDir);
  for (const sourcePath of templateFiles) {
    const relativePath = relative(templateDir, sourcePath);
    const targetPath = format(resolve(projectDir, relativePath), moustaches);
    await prepareDir(targetPath);

    let source = await fs.readFile(sourcePath);
    let target = source;
    if (isUtf8(source)) {
      target = Buffer.from(format(source, moustaches));
    }
    await fs.writeFile(targetPath, target, 'utf-8');
  }
}

export {copy};
