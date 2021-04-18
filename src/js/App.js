import { AreaBlock, ToolkitBlock } from './Blocks';
import { Area } from './components/Area';
import { Toolkit } from './components/Toolkit';
import { firstCharToLowerCase, removeFromLastCapitalize } from './helpers/utils';

export class App {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.blocks = [AreaBlock, ToolkitBlock];
        this.options = options;
    }

    init() {
        this.render();

        const area = new Area('#area');
        area.init();

        const toolkit = new Toolkit('#toolkit', '#area');
        toolkit.init();
    }

    render() {
        const blocks = [];

        this.blocks.forEach((Block, i, list) => {
            const options = Block.name === 'ToolkitBlock' ? { icons: this.options.icons } : {};
            const id = firstCharToLowerCase(removeFromLastCapitalize(Block.name));

            blocks.push(new Block(id, options).toHTML());

            if (list.length - 1 === i) {
                this.$el.insertAdjacentHTML('beforeend', blocks.join(''));
            }
        });
    }
}
