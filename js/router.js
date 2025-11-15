import { templates } from './templates.js';

export function load(route) {
    document.getElementById('app').innerHTML = templates[route];
}
