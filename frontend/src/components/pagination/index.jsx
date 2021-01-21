import "./index.scss";

function Pagination({
  itemsPerPage = 0,
  totalData = 0,
  currentPageCount = 0,
  currentPage = 0,
  handlePageClick,
}) {
  const nextPage = () => {
    const newPage = currentPage + 1;
    if (currentPage < itemsPerPage) handlePageClick(newPage);
  };

  const prevPage = () => {
    const newPage = currentPage - 1;
    if (currentPage > 1) handlePageClick(newPage);
  };

  return (
    <div className="d-flex align-items-center text-secondary2">
      <p className="mb-0 mx-3">
        {(currentPage - 1) * itemsPerPage + (currentPageCount ? 1 : 0)} -{" "}
        {(currentPage - 1) * itemsPerPage + currentPageCount}
        <span className="d-inline-block mx-2"> of </span> {totalData}
      </p>
      {currentPage !== 1 && (
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={() => prevPage()}
        >
          {"<"}
        </button>
      )}
      {(currentPage - 1) * itemsPerPage + currentPageCount !== totalData && (
        <button className="btn btn-primary btn-sm" onClick={() => nextPage()}>
          {">"}
        </button>
      )}
    </div>
  );
}

export default Pagination;
