export class Toolkit {
    constructor(selector, options = {}) {
        this.$el = document.querySelector(selector);
        this.options = options;
    }

    init() {
        this._initClick();
    }

    _initClick() {
        this.$el.addEventListener('click', this._handleTypes);
    }

    _handleTypes(e) {
        const $target = e.target.closest('[data-type]');

        if (!$target) {
            return;
        }

        switch ($target.dataset.type) {
            case 'bold':
            case 'italic':
                // $target.classList.toggle('active');
                document.execCommand($target.dataset.type);
                break;
            case 'h1':
            case 'h2':
                // $target.classList.toggle('active');
                document.execCommand('formatBlock', false, `<${$target.dataset.type}>`);
                break;
            default:
                break;
        }
    }
}
