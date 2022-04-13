import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

const handleClick = jest.fn();
const mockedButton = <Button disabled={false} onClick={handleClick} label="Press me" />;

test('Should display label', () => {
  render(mockedButton);
  expect(screen.getByText(/Press me/)).toBeInTheDocument();
});

test('should call onClick handler when clicked', () => {
  render(mockedButton);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('The button should be disabled', () => {
  render(<Button disabled onClick={handleClick} label="Press me" />);
  expect(screen.getByRole('button')).toBeDisabled();
});
