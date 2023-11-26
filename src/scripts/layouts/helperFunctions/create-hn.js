export default function createHn(tag, txt, id='', cl='') {
    const hn = document.createElement(tag);
    hn.innerText = txt;
    hn.id = id;
    hn.className = cl;
    return hn;
}