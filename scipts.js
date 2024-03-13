// Import Statement for Prompt-Sync Library 
const prompt = require('prompt-sync')({sigint: true});

// Write Your Code Below
console.log("\n");
console.log("✨🧴🧼🧺 Welcome to SudZone Laundry!🧺🧼🧴✨");
console.log("\n");
console.log("------------------------------------------");
console.log("|                Menu 📝                  |");
console.log("------------------------------------------");
console.log("| Services:                              |");
console.log("| - ✨  Color Load:       $2.50 per pound |");
console.log("| - ⬜  Whites Load:      $4.00 per pound |");
console.log("| - ⬛	Darks Load:      $6.00 per pound |");
console.log("|                                        |");
console.log("| Additional Services:                   |");
console.log("| - 🧼  Detergent:         $1.50 per load |");
console.log("| - 🧴  Softener:          $1.00 per load |");
console.log("| - 🧺  Dryer Sheets:      $0.50 each     |");
console.log("------------------------------------------");
console.log("\n");
console.log("Choose your Services Below.");
console.log("\n");

//USER PROMPTS
let  colorsWeight = parseFloat(prompt("How many pounds of color clothes would you like to wash?: "));
console.log("                    ");
let whitesWeight = parseFloat(prompt("How many pounds of white clothes would you like to wash?: "));
console.log("                    ");
let darksWeight = parseFloat(prompt("How many pounds of dark clothes would you like to wash?: "));
console.log("                    ");
let detergent = prompt("Do you need detergent (yes/no)?: ");
console.log("                    ");
let softener = prompt("Do you need fabric softener (yes/no)?: ");
console.log("                    ");
let sheets = parseFloat (prompt("How many dryer sheets per drying load?: "));
console.log("\n");
console.log("----------------8<-------------[ cut here ]------------------");
console.log("\n");
console.log("Thank you! Here is your receipt:");
console.log("\n");

//PRICING
let colorLbPrice = 2.50;
let whiteLbPrice = 4.00;
let darkLbPrice = 6.00;
let soapLbPrice = 1.50;
let softenerLbPrice = 1.00;
let sheetsPriceEach = 0.50;

//LOAD BREAKDOWN
let maxLoadSize = 10;
let colorLoadCalc = Math.ceil(colorsWeight / maxLoadSize);
let whiteLoadCalc = Math.ceil(whitesWeight / maxLoadSize);
let darkLoadCalc = Math.ceil(darksWeight / maxLoadSize);

let loadSizeForServices = colorLoadCalc + whiteLoadCalc + darkLoadCalc;
let detergentCoverted = +(detergent.toLowerCase() === 'yes') * loadSizeForServices;
let softenerCoverted = +(softener.toLowerCase() === 'yes') * loadSizeForServices;
let sheetsPerLoad = sheets * loadSizeForServices;

//TOTAL CALCS
let colorsTotal = colorsWeight * colorLbPrice;
let whitesTotal = whitesWeight * whiteLbPrice;
let darksTotal = darksWeight * darkLbPrice;
let detegentTotal = detergentCoverted * soapLbPrice;
let softenerTotal = softenerCoverted * softenerLbPrice;
let sheetsTotal = sheetsPerLoad * sheetsPriceEach;
let subTotal = colorsTotal + whitesTotal + darksTotal + detegentTotal + softenerTotal + sheetsTotal;
let newjerseyTax = 0.06625 * subTotal;
let orderTotal = subTotal + newjerseyTax;

//ADD OUTPUT 
console.log("------------------------------------------");
console.log("|             Receipt 🧾                  |");
console.log("------------------------------------------");
console.log("|                                        |");
console.log("| Services:                              |");
console.log(`| - Color Load:       ${colorsWeight} lbs      $${colorsTotal.toFixed(2)} |`);
console.log(`| - White Load:       ${whitesWeight} lbs      $${whitesTotal.toFixed(2)} |`);
console.log(`| - Dark Load:        ${darksWeight} lbs      $${darksTotal.toFixed(2)} |`);
console.log("|                                        |");
console.log("| Additional Services:                   |");
console.log(`| - Detergent:        ${detergentCoverted} loads      $${detegentTotal.toFixed(2)} |`);
console.log(`| - Softener:         ${softenerCoverted} loads      $${softenerTotal.toFixed(2)} |`);
console.log(`| - Dryer Sheets:     ${sheetsPerLoad} sheets    $${sheetsTotal.toFixed(2)} |`);
console.log("|                                        |");
console.log(`| Subtotal:                      $${subTotal.toFixed(2)} |`);
console.log(`| NJ Sales Tax:                   $${newjerseyTax.toFixed(2)} |`);
console.log(`| Total:                         $${orderTotal.toFixed(2)} |`);
console.log("|                                        |");
console.log("------------------------------------------");
console.log("|   Thanks for Washing With SudZone 🛍️    |");
console.log("------------------------------------------");


