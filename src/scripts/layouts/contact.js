import createDiv from "./helperFunctions/create-div";
import createSandarImg from "./helperFunctions/create-image";
import createHn from "./helperFunctions/create-hn";
import createUl from "./helperFunctions/create-ul";
import {call} from "../image";

const Contactfrag = document.createDocumentFragment();


const h2 = createHn('h2', 'Place Order Now');
const ul = createUl('9804078090', '9761007800')
ul.childNodes.forEach(li => {
    li.style.cssText = `list-style-image:url('${call}')`
})

const div = createDiv('', '', h2, ul);
const h1 = createHn('h1', 'Sandar MO:MO:');
const cont = createDiv('', 'place-order', h1, div);
const img = createSandarImg();

const contact = createDiv('contact','', img, cont);

Contactfrag.appendChild(contact)

export { Contactfrag as default}