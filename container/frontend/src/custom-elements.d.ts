import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'goatfryed-mfs-app-one': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}