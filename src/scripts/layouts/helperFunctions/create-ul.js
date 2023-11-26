export default function createUl(...list) {
    const ul = document.createElement('ul');
    list.forEach( (itm) => {
        const li = document.createElement('li');
        li.innerText = itm;
        ul.appendChild(li);
    });
    return ul
}