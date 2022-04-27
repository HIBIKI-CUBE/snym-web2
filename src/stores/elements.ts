import { writable } from 'svelte/store';

type Elements = {[key: string]: HTMLElement}

const elementsType: Elements = {};

export const elements = writable(elementsType);
