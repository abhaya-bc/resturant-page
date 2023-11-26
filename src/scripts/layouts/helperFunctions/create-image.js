import {sandar, buff, chicken, veg} from "../../image";

export function createImg(src) {
    const img = document.createElement('img');
    img.alt = 'Sandar MO:MO:'
    img.src = src;
    return img;
}

export default function createSandarImg() {
    return createImg(sandar);
}

export function createBuffImg() {
    return createImg(buff);
}

export function createChickenImg() {
    return createImg(chicken)
}

export function createVegImg() {
    return createImg(veg);
}