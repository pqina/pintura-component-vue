import { openEditor, dispatchEditorEvents } from '@pqina/pintura';

export default {
    // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
    inheritAttrs: false,

    methods: {
        show() {
            this.editor.show();
        },

        hide() {
            this.editor.hide();
        },
    },

    mounted() {
        // create editor
        this.editor = openEditor(this.$attrs);

        // listen for editor events and propagate to component
        this.unsubs = dispatchEditorEvents(this.editor, (type, value) => {
            this.$emit(`pintura:${type}`, value);
        });

        // observe prop changes
        this.unwatch = this.$watch('$attrs', () => {
            Object.assign(this.editor, this.$attrs);
        });
    },

    beforeDestroy() {
        if (!this.editor) return;
        if (this.editor.element) {
            // when a load error occurs the editor is still active, so need to close
            this.editor.close();
        }
        this.unsubs.forEach((unsub) => unsub());
        this.unsubs = [];
        this.unwatch();
        this.editor = undefined;
    },

    render(h) {
        return h('div', { ref: 'elementRef' });
    },
};
