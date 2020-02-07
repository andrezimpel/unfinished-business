let activeEnv = process.env.ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`
});

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const migrations = ['text', 'page', 'navigation'];

if (spaceId === 'replaceme') {
  console.error(`Please add the contentful space id to .env.${activeEnv}`);
  return;
}


console.log(activeEnv);
console.log(spaceId);
console.log(process.env);


// contentful space migration --space-id 39tnn5u6s8r3 contentful/create-navigation.js
