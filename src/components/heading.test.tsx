import { render, screen } from '@testing-library/react-native';

import Heading from './heading';

describe("Heading component", () => {
    it("should render Heading with text", () => {
        const text = "Eventos";

        render(<Heading>{text}</Heading>);

        expect(screen.getByText(text)).toHaveTextContent(text);
    });
});