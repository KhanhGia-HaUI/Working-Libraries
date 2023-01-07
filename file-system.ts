'use strict';
const fs = require('fs');
const path = require('path');
const { parse } = require('best-effort-json-parser');
const fromPath = path.basename(process.argv[2]);
const getAllFiles = (dir: any) => {
    const all_files = new Array();
    fs.readdirSync(dir).forEach((file: any) => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            all_files.push(getAllFiles(fullPath));
        } else {
            all_files.push(fullPath.slice(fullPath.indexOf(fromPath), fullPath.length));
        }
    });
    return all_files.reduce((a, b) => a.concat(b), new Array())
}
const ReadFile = (dir: any) => { return fs.readFileSync(dir, { encoding: "utf-8", flag: "r" }) };
const ReadFileJSON = (dir: any) => { return parse(fs.readFileSync(dir, { encoding: "utf-8", flag: "r" })) };
const WriteFile = (dir: any, text: any) => { return fs.writeFileSync(dir, text) };
const WriteFileJSON = (dir: any, text: Array<any>) => { return fs.writeFileSync(dir, JSON.stringify(text, null, '\t')) };
const getFiles = (dir: any) => {
    const all_files = new Array();
    fs.readdirSync(dir).forEach((file: any) => {
        all_files.push(file);
    });
    return all_files;
}
module.exports = { getAllFiles:getAllFiles, ReadFile:ReadFile, ReadFileJSON:ReadFileJSON, WriteFile:WriteFile, WriteFileJSON:WriteFileJSON, getFiles:getFiles }