import createDiv from "./layouts/helperFunctions/create-div";
import asideFragment from './layouts/aside';
import Homefrag from "./layouts/home";
import Menufrag from "./layouts/menu";
import Contactfrag from "./layouts/contact";

const bodyFragment = document.createDocumentFragment();
const holder = createDiv('container');
const content = createDiv('content');

holder.appendChild(asideFragment);
holder.appendChild(content)
bodyFragment.appendChild(holder);

document.body.appendChild(bodyFragment);

function contentHome() {
    contentRemove()
    const home = Homefrag.cloneNode(true);
    content.appendChild(home);
}

function contentMenu() {
    contentRemove()
    const menu = Menufrag.cloneNode(true);
    content.appendChild(menu);
}

function contentContact() {
    contentRemove()
    const contact = Contactfrag.cloneNode(true);
    content.appendChild(contact);
}

function contentRemove() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const availableContent = [
    contentHome,
    contentMenu,
    contentContact,
]

export function switchTo(i) {
    let func = availableContent[i];
    func();
}

contentHome();