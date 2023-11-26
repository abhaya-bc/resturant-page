import createDiv from "./helperFunctions/create-div";
import createUl from "./helperFunctions/create-ul";
import createSandarImg from "./helperFunctions/create-image";
import createHn from "./helperFunctions/create-hn";
import { locatorPin } from "../image";

const Homefrag = document.createDocumentFragment();

const ul = createUl('Mid-Baneshwor, Kathmandu', 'Sankhamool, Kathmandu');
ul.style.cssText = `list-style-image: url(${locatorPin})`;

const h2 = createHn('h2', 'We Are Located NearBy At:');
const address = createDiv('', 'address', h2, ul);
const h1 = createHn('h1', 'Sandar MO:MO:');
const info = createDiv('', 'info', h1, address);
const img = createSandarImg();

const home = createDiv('home','', img, info);
Homefrag.appendChild(home);

export {Homefrag as default}