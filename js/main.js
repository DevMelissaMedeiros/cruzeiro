import { load } from './router.js';
import { setupValidation } from './formValidation.js';

function init() {
    document.querySelectorAll("button[data-route]").forEach(btn => {
        btn.onclick = () => {
            load(btn.dataset.route);
            setupValidation();
        };
    });

    load("home");
}

init();
