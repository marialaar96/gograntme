"use strict";

const fs = require("fs");
const pug = require("pug");



// create a directory for the output files, if it doesn't exist already (error checking)
const SCRIPT_OUTPUT_DIR = "./public";
if (!fs.existsSync(SCRIPT_OUTPUT_DIR)) {
  fs.mkdirSync(SCRIPT_OUTPUT_DIR);
}

const TEMPLATE_PATH = "./pug/template.pug";
const OUTPUT_PATH = "./public";
// make a GET request from the database to get full details of each blog and store as objects in a variable
const ALL_GRANTS = [{title:"Title of the grant", company:"Company name", deadline:"25/05/2021", description:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", numavailable:"10,000", availableperperson:"1,000",expectation:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", requirements:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", howtoapply:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", wheretosend:"someemail@email.com or url"}, {title:"Title of the grant", company:"Company name", deadline:"25/05/2021", description:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", numavailable:"10,000", availableperperson:"3,000",expectation:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", requirements:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", howtoapply:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", wheretosend:"someemail@email.com or url"},{title:"Title of the grant", company:"Company name", deadline:"25/05/2021", description:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", numavailable:"10,000", availableperperson:"5,000",expectation:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", requirements:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", howtoapply:"At vis vituperata dissentias adversarium, munere praesent est ei, timeam sanctus meliore ut mea. Sed et quod purto, ei cum prima audiam torquatos. Te omnium impedit similique duo, dico iriure duo ad.", wheretosend:"someemail@email.com or url"}];
let content = {};

// iterate over each object in the array and apply the pug template to create the details page
ALL_GRANTS.forEach(function(element, index) {
    // for each grant in the list, take all inputs
    const title = element.title;
    const company = element.company;
    const deadline = element.deadline;
    const description = element.description;
    const numavailable = element.numavailable;
    const availableperperson = element.availableperperson;
    const expectation = element.expectation;
    const requirements = element.requirements;
    const howtoapply = element.howtoapply;
    const wheretosend = element.wheretosend;
    
    // add all information to an array for each grant
    content = {index, title, company, deadline, description, numavailable, availableperperson, expectation, requirements, howtoapply, wheretosend};
    return content;
    
  });

  console.log(content.title, "content title");
  const renderedGrant = pug.renderFile(TEMPLATE_PATH, { content });
  const htmlFileName = content.title + content.index + ".html";
  fs.writeFileSync(`${OUTPUT_PATH}/${htmlFileName}`, renderedGrant);
  // const extentionlessFileName = htmlFileName.substring(0, htmlFileName.length - 5);