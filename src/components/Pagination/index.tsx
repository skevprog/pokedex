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
    <div>
      <button disabled={page === 0} type="button" onClick={previousHandler}>Previous</button>
      <button disabled={page + 1 === totalPages} type="button" onClick={nextHandler}>Next</button>
      <p>{`Current page ${page + 1}`}</p>
      <p>
        {`Total pages ${totalPages}`}
      </p>
    </div>
  );
}

export default Pagination;
