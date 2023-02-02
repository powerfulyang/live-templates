import { readdir, readFile, writeFile } from 'node:fs/promises';
import { escape } from './tools/escape.mjs';
import { cwd } from 'node:process';
import { join } from 'node:path';

const groovyDir = join(cwd(), 'groovy');
// read files from the groovy directory
const files = await readdir(groovyDir);

// escape the files and write them to the variables directory
await Promise.all(files.map(async (file) => {
    switch (file) {
        case 'split-clipboard-to-columns.groovy':
            const fileContent = await readFile(join(groovyDir, file), 'utf8');
            // replace `"clipboard string"` with `clipboard()` and escape the result
            const replacedFileContent = fileContent.replace(/"clipboard string"/, '_1');
            const escapedFileContent = escape(replacedFileContent);
            const result = `groovyScript("${escapedFileContent}", clipboard())`;
            await writeFile(join(cwd(), 'variables', '$COLUMNS$'), result);
            break;
    }
}));
