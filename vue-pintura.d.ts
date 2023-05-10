declare module '@pqina/vue-pintura' {
    import Vue from 'vue';

    import { PinturaEditorDefaultOptions, PinturaEditorModalOptions } from '@pqina/pintura';

    export class PinturaEditor extends Vue {
        props: PinturaEditorDefaultOptions;
    }

    export class PinturaEditorModal extends Vue {
        props: PinturaEditorDefaultOptions & PinturaEditorModalOptions;
    }

    export class PinturaEditorOverlay extends Vue {
        props: PinturaEditorDefaultOptions;
    }
}

declare module '@pqina/vue-pintura/vue-2' {
    import Vue from 'vue';

    import { PinturaEditorDefaultOptions, PinturaEditorModalOptions } from '@pqina/pintura';

    export class PinturaEditor extends Vue {
        props: PinturaEditorDefaultOptions;
    }

    export class PinturaEditorModal extends Vue {
        props: PinturaEditorDefaultOptions & PinturaEditorModalOptions;
    }

    export class PinturaEditorOverlay extends Vue {
        props: PinturaEditorDefaultOptions;
    }
}
