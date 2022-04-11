interface PaginationProps {
  onNextClick: () => void;
  onPreviousClick: () => void;
  page: number;
  totalPages: number;
}

function Pagination({
  onNextClick, onPreviousClick, page, totalPages,
}: PaginationProps): JSX.Element {
  return (
    <div>
      <button disabled={page === 0} type="button" onClick={onPreviousClick}>Previous</button>
      <button disabled={page + 1 === totalPages} type="button" onClick={onNextClick}>Next</button>
      <p>{`Current page ${page + 1}`}</p>
      <p>
        {`Total pages ${totalPages}`}
      </p>
    </div>
  );
}

export default Pagination;
