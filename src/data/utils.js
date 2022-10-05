import fs from 'fs-extra';
import { join } from 'path';

const loadSqlQueries = async (folderName) => {
    let filePath = join(process.cwd(), 'src/data', folderName);
    let files = await fs.readdir(filePath);
    let sqlFiles = await files.filter(f => f.endsWith('.sql'));
    let queries = {};

    for (const sqlFile of sqlFiles) {
        let query = await fs.readFileSync(join(filePath, sqlFile), { encoding: "UTF-8" });
        queries[sqlFile.replace(".sql", "")] = query;
    }
    //console.log('>>> QUERY RESULTS:', queries)
    return queries;
}

module.exports = {
    loadSqlQueries: loadSqlQueries
}