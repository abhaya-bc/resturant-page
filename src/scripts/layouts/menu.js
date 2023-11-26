import createDiv from "./helperFunctions/create-div";
import createHn from "./helperFunctions/create-hn";
import { menuCardBuff, menuCardChicken, menuCardVeg } from "./helperFunctions/create-menu-card";

const Menufrag = document.createDocumentFragment();
const h1 = createHn('h1', 'Sandar MO:MO');

const chickenMomo3 = menuCardChicken('Steamed Chicken MO:MO:', "5$")
const BuffMomo3 = menuCardBuff('Steamed Buff MO:MO:', "4$")
const VegMomo3 = menuCardVeg('Steamed Veg MO:MO:', "4$")
const chickenMomo2 = menuCardChicken('Fried Chicken MO:MO:', "4.2$")
const BuffMomo2 = menuCardBuff('Fried Buff MO:MO:', "3.6$")
const VegMomo2 = menuCardVeg('Fried Veg MO:MO:', "3.6$")
const chickenMomo1 = menuCardChicken('Chicken MO:MO:', "3.7$")
const BuffMomo1 = menuCardBuff('Buff MO:MO:', "3$")
const VegMomo1 = menuCardVeg('Veg MO:MO:', "3$")

const cont = createDiv('', '', chickenMomo3, BuffMomo3, VegMomo3, chickenMomo2, BuffMomo2, VegMomo2, chickenMomo1, BuffMomo1, VegMomo1);

const menu = createDiv('menu', '', h1, cont );
Menufrag.appendChild(menu)

export{ Menufrag as default}

