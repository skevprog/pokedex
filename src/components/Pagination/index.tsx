import Button from '../Button';
import './styles.css';

interface PaginationProps {
  onNextClick: () => void;
  onPreviousClick: () => void;
  page: number;
  totalPages: number;
}

function Pagination({
  onNextClick, onPreviousClick, page, totalPages,
}: PaginationProps): JSX.Element {
  const nextHandler = () => {
    if (page + 1 === totalPages) return;
    onNextClick();
  };

  const previousHandler = () => {
    if (page === 0) return;
    onPreviousClick();
  };

  return (
    <div className="pagination-container">
      <Button
        disabled={page === 0}
        onClick={previousHandler}
        label="<"
      />
      <p>
        {`Page ${page + 1} of ${totalPages}`}
      </p>
      <Button
        disabled={page + 1 === totalPages}
        onClick={nextHandler}
        label=">"
      />
    </div>
  );
}

export default Pagination;
