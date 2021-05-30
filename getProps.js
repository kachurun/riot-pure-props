// Can be replaced with `import { dashToCamelCase } from "@riotjs/util/strings";`
const dashToCamelCase = (string) => {
    return string.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}

// Can be replaced with `import { DOMattributesToObject } from "@riotjs/util/dom";`
const DOMattributesToObject = (el) => {
    if (!el || !el.attributes) {
        return {};
    }

    return Array.from(el.attributes).reduce((acc, { name, value }) => ({
        ...acc,
        [dashToCamelCase(name)]: value
    }), {});
};

const getProps = (el, context, attributes = [], initialProps = {}) => {
    // Get attributes from DOM
    const domAttributes = DOMattributesToObject(el);

    // Evaluate dynamic attributes
    const dynamicAttributes = attributes.reduce((acc, { name, evaluate }) => ({
        ...acc,
        [dashToCamelCase(name)]: evaluate(context),
    }), {});

    // evaluate static DOM attributes
    // merge the props eventually passed via riot.mount
    // evaluate the dynamic attributes
    return {
        ...domAttributes,
        ...initialProps,
        ...dynamicAttributes,
    };
};

export default getProps;
