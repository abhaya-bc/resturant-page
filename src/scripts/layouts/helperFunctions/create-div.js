export default function createDiv(id = '',cl = '', ...childs) {
    const div = document.createElement('div');
    div.id = id;
    div.className = cl;
    div.append(...childs);
    return div;
}
