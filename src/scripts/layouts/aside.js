import createDiv from './helperFunctions/create-div';
import createUl from './helperFunctions/create-ul';
import createSandarImg from './helperFunctions/create-image';
import { switchTo } from '../index';

const asideFragment = document.createDocumentFragment();

const img = createSandarImg();
const div = createDiv('', '', img)
const ul = createUl('home', 'menu', 'contact');
ul.childNodes[0].classList.add('active');
console.log(ul);
ul.childNodes.forEach((li, i, parent) => {
    li.addEventListener('click', ()=>{
        if (li.classList.contains('active')) {
            return;
        }
        removeActive(parent);
        li.classList.add('active');
        switchTo(i);
    } )
})


const aside = createDiv('aside', '', div, ul);

asideFragment.appendChild(aside);

function removeActive(parent) {
    parent.forEach(li => {
        li.classList.remove('active');
    })
}

export {asideFragment as default};

