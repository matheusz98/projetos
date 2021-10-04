import {
  PaginationContainer,
  PaginationContent,
  PaginationItems,
  PaginationLink,
} from "./PaginationStyle";

const Pagination = ({ postsPerPage, totalPosts, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationContent>
        {pageNumbers.map((number) => (
          <PaginationItems>
            <PaginationLink onClick={() => pagination(number)}>
              {number}
            </PaginationLink>
          </PaginationItems>
        ))}
      </PaginationContent>
    </PaginationContainer>
  );
};

export default Pagination;
