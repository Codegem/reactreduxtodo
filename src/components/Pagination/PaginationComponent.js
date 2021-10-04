import Pagination from "@material-ui/lab/Pagination";

const PaginationComponent = ({ count, page, handleChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      color="primary"
      onChange={handleChange}
      style={{ margin: "1rem" }}
    />
  );
};

export default PaginationComponent;
