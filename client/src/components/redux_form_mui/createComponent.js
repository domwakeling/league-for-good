// adapted from redux-form-material-ui, which does not support MUI above v0.20
// https://www.npmjs.com/package/redux-form-material-ui

import { Component, createElement } from 'react';

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
export default function createComponent(MaterialUIComponent, mapProps) {
    class InputComponent extends Component {
        getRenderedComponent() {
            return this.refs.component;
        }

        render() {
            return createElement(MaterialUIComponent, {
                ...mapProps(this.props),
                ref: 'component'
            });
        }
    }
    InputComponent.displayName = `ReduxFormMaterialUI${MaterialUIComponent.name}`;
    return InputComponent;
}
