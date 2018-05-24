// Generated by CoffeeScript 2.3.0
var fs, key, path, statuses, value, values;

fs = require('fs');

path = require('path');

statuses = require('./index');

values = '';

for (key in statuses) {
  value = statuses[key];
  if (typeof value === 'string') {
    values += `\t${JSON.stringify(key)}: string;\n`;
  } else {
    values += `\t${JSON.stringify(key)}: number;\n`;
  }
}

fs.writeFile(path.join(__dirname, '../lib/index.d.ts'), 'declare const httpStatus: httpStatusNS.HttpStatus;\n\n' + 'declare namespace httpStatusNS {\n' + 'export interface HttpStatus {\n' + values + '}\n}\n\n' + 'export = httpStatus;\n', function(err) {
  if (err) {
    throw new Error(err);
  }
});