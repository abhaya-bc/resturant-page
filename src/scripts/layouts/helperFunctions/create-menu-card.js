import { createBuffImg, createChickenImg, createVegImg } from "./create-image";
import createHn from "./create-hn";
import createDiv from "./create-div";

function menuCard(title, price, img) {
    const h2 = createHn('h2', title);
    const p = createHn('p', price);
    const div = createDiv('', 'box', img, h2, p);
    return div;
}

export function menuCardChicken(title, price) {
    return menuCard(title, price, createChickenImg());
}

export function menuCardBuff(title, price) {
    return menuCard(title, price, createBuffImg());
}

export function menuCardVeg(title, price) {
    return menuCard(title, price, createVegImg());
}