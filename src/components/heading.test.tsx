import renderer from 'react-test-renderer';

import Heading from './heading';

describe("Heading component", () => {
    it("should render Heading with text", () => {
        const text = "Eventos";

        const tree = renderer.create(<Heading>{text}</Heading>).toJSON();

        expect(tree.children[0]).toBe(text);
    });
});