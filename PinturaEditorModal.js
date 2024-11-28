import { h } from 'vue';

import { openEditor, dispatchEditorEvents } from '@pqina/pintura';

export default {
    methods: {
        show() {
            this.editor.show();
        },

        hide() {
            this.editor.hide();
        },
    },

    mounted() {
        this.editor = openEditor(Object.assign({}, this.$attrs));
        this.unsubs = dispatchEditorEvents(this.editor, this.$refs.elementRef);
    },

    beforeUpdate() {
        Object.assign(this.editor, Object.assign({}, this.$attrs));
    },

    beforeUnmount() {
        if (!this.editor) return;
        if (this.editor.element) {
            // when a load error occurs the editor is still active, so need to "manually" close
            this.editor.close();
        }
        this.unsubs.forEach((unsub) => unsub());
        this.unsubs = [];
        this.editor = undefined;
    },

    render() {
        return h('div', { ref: 'elementRef' });
    },
};
