class Block {
    constructor(id, options) {
        this.id = id;
        this.options = options;
    }

    toHTML() {
        throw new Error('toHTML does not exist!');
    }
}

export class AreaBlock extends Block {
    constructor(id, options = {}) {
        super(id, options);
    }

    toHTML() {
        return `
            <div
                id="${this.id}"
                class="edit-area"
                placeholder="Type something..."
                contenteditable
            ></div>
        `;
    }
}

export class ToolkitBlock extends Block {
    constructor(id, options = {}) {
        super(id, options);
    }

    toHTML() {
        const buttons = Object.keys(this.options.icons)
            .map((icon) => {
                const type = icon.split('-')[1];

                return `
                    <button data-type="${type}">
                        <img
                            src="${this.options.icons[icon]}"
                            alt="${type} button icon"
                        />
                    </button>
                `;
            })
            .join('');

        return `
            <div id="${this.id}" class="toolkit">
                ${buttons}
            </div>
        `;
    }
}
