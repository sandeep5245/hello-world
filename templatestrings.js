"use strict";
var say = "a bird in hand > two in the bush";
var html = htmlEscape `<div> I would just like to say : ${say}</div>`;
console.log(html);
var nam = "sandeep";
var newh = mynewhtmlescape `<span>My name is : ${nam} .</span>`;
console.log(newh);
function mynewhtmlescape(literals, ...placeholders) {
    console.log("********************************");
    console.log(literals);
    console.log(placeholders);
    return literals[0] + placeholders[0] + literals[1];
}
// a sample tag function
function htmlEscape(literals, ...placeholders) {
    let result = "";
    console.log(literals);
    console.log(placeholders);
    // interleave the literals with the placeholders
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result;
}
