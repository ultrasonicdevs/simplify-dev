import { render, screen } from '@testing-library/react/pure';
import Polymorph from '../../src/ui/Polymorph/Polymorph';
import { it, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

describe('Polymorph', () => {
  it('renders children', () => {
    const text = 'Hello World';
    render(<Polymorph>{text}</Polymorph>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders as a custom element', () => {
    const as = 'article';
    render(<Polymorph as={as} />);
    expect(screen.getByRole(as)).toBeInTheDocument();
  });

  it('renders div as default element', () => {
    render(<Polymorph data-testid='default' />);
    expect(screen.getByTestId('default').tagName).toBe('DIV');
  });

  it('renders element with it`s attributes', () => {
    render(
      <Polymorph as='button' type='submit'>
        button
      </Polymorph>
    );
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
});
