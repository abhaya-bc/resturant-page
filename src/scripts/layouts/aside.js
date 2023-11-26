import createDiv from './helperFunctions/create-div';
import createUl from './helperFunctions/create-ul';
import createSandarImg from './helperFunctions/create-image';
import { switchTo } from '../index';

const asideFragment = document.createDocumentFragment();

const img = createSandarImg();
const div = createDiv('', '', img)
const ul = createUl('home', 'menu', 'contact');

ul.childNodes.forEach((li, i, parent) => {
    li.addEventListener('click', ()=>{
        switchTo(i);
    } )
})

const aside = createDiv('aside', '', div, ul);

asideFragment.appendChild(aside);

export {asideFragment as default};

