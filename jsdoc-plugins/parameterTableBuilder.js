/**
 * This module converts an array of parameter objects into an HTML table.
 * @module parameterTableBuilder
 * Based on https://github.com/bvanderlaan/jsdoc-route-plugin/blob/ba0725537ed94286ce10fd0de12a3f1703b3c43a/lib/parameterTableBuilder.js
 */

'use strict';

function extraColumnInfo(params) {
  const result = {
    showAttributes: false,
    showDefaultValue: false,
  };

  params.forEach((param) => {
    result.showAttributes = result.showAttributes || param.optional;
    result.showDefaultValue = result.showDefaultValue || param.defaultvalue !== undefined;
  });

  return result;
}

function buildTableEntry(param, columnInfo) {
  const attributeCell = columnInfo.showAttributes ? `<td class="attributes">${param.optional}</td>` : '';
  const defaultCell = columnInfo.showDefaultValue ? `<td class="default">${param.defaultvalue === undefined ? '' : param.defaultvalue}</td>` : '';

  console.log(param.type, typeof param.type);

  const paramTypes = param.type;

  const paramTypeString =  paramTypes.map(t => `{@link ${t}}`).join(' | ')

  return `<tr>
            <td class="name">${param.name}</td>
            <td class="param-type">${paramTypeString}</td>
            ${attributeCell}
            ${defaultCell}
            <td class="description last">${param.description}</td>
          </tr>`;
}

function buildTableHeader(columnInfo) {
  const attributeHeader = columnInfo.showAttributes ? '<th>Attributes</th>' : '';
  const defaultHeader = columnInfo.showDefaultValue ? '<th>Default</th>' : '';
  return `<thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                ${attributeHeader}
                ${defaultHeader}
                <th class="last">Description</th>
              </tr>
            </thead>`;
}

exports.build = function(title, params){
  const columnInfo = extraColumnInfo(params);
  const paramTableEntries = [];

  params.forEach((param) => {
    paramTableEntries.push(buildTableEntry(param, columnInfo));
  });

  return `<h2 style="font-size: 24px; font-family: 'Montserrat', sans-serif; font-weight: 400; margin: 1.5em 0 .3em;">${title}</h2>
          <table class="params">
            ${buildTableHeader(columnInfo)}
            ${paramTableEntries.join('')}
          </table>`;
}