export class Toolkit {
    constructor(selectorToolkit, selectorArea, options = {}) {
        this.$toolkit = document.querySelector(selectorToolkit);
        this.$area = document.querySelector(selectorArea);
        this.options = options;
    }

    init() {
        this.$toolkit.addEventListener('click', this._handleTypes.bind(this));
    }

    _handleTypes(e) {
        const $target = e.target.closest('[data-type]');

        if (!$target) {
            return;
        }

        $target.classList.toggle('active');

        switch ($target.dataset.type) {
            case 'bold':
            case 'italic':
                document.execCommand($target.dataset.type, false);
                break;
            case 'h1':
            case 'h2':
                document.execCommand('formatBlock', false, `<${$target.dataset.type}>`);
                break;
            default:
                break;
        }
    }
}
