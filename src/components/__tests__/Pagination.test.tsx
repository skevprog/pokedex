import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

const mockedPreviousHandler = jest.fn();
const mockedNextHandler = jest.fn();

const MockedPaginationComponent = (<Pagination onNextClick={mockedNextHandler} onPreviousClick={mockedPreviousHandler} page={10} totalPages={100} />);

test('Should execute function props when previousHanlder & nextHanlder are being called', () => {
  render(MockedPaginationComponent);
  fireEvent.click(screen.getByText('>'));
  expect(mockedNextHandler).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByText('<'));
  expect(mockedPreviousHandler).toHaveBeenCalledTimes(1);
});
