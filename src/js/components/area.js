import { debounce } from '../helpers/utils';

export class Area {
    constructor(selector, options = {}) {
        this.$el = document.querySelector(selector);
        this.option = options;
    }

    init() {
        this.initInput();
    }

    initInput() {
        this.$el.addEventListener('input', debounce(this._handleInput.bind(this)));
    }

    _handleInput(e) {
        console.log(e.target.innerHTML);
    }
}
