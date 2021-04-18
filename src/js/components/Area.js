export class Area {
    constructor(selector, options = {}) {
        this.selector = selector;
        this.$el = document.querySelector(selector);
        this.options = options;
    }

    init() {
        document.addEventListener('selectionchange', this._handleSelect.bind(this));
    }

    _handleSelect() {
        const selection = document.getSelection();

        if (selection.type !== 'Range' || !selection.baseNode) {
            return;
        }

        if (!selection.baseNode.parentNode.closest(this.selector)) {
            return;
        }

        let selectedContent;

        for (let i = 0; i < selection.rangeCount; i++) {
            selectedContent = selection.getRangeAt(i).cloneContents();
        }

        console.log(selection);
        console.log(selectedContent);
    }
}
