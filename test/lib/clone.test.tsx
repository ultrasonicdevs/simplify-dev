import { render } from '@testing-library/react/pure';
import { it, expect, describe } from 'vitest';
import clone from '../../src/utils/clone';
import '@testing-library/jest-dom';
describe('clone', () => {
  it('should clone an element with new props', () => {
    const element = <div className='original' />;
    const newProps = { className: 'cloned', id: 'cloned-element' };
    const { container } = render(clone(element, newProps));

    expect(container.firstChild).toHaveClass('cloned');
    expect(container.firstChild).toHaveAttribute('id', 'cloned-element');
  });
});
