let html = '';
html += '<table border="1">';
html += '<tbody>';
for (let i = 1; i <= 9; i++) {
  if (i % 2 == 1)
    html += `<tr><td style='background-color: yellow;'>2 *${i} = ${2*i}</tr></td>`;
  else
    html += `<tr><td>2 * ${i} = ${2 * i}</td></tr>`;
}
html += '</tbody>';
html += '</table>';
document.write(html);



document.write('<table border="1">');
document.write('<tbody>');
for (let i = 1; i <= 9; i++) {
  document.write('<tr>');
  document.write(`<td>2 * ${i} = ${2*i}</td>`);
  document.write('</td>');
}
document.write('<tr>');
document.write('<td></td>');
document.write('</tr>');
document.write('<tbody>');
document.write('</table>');