import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOOK } from '../utils/mutations';
import { QUERY_GETSINGLEUSER } from '../utils/queries';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  const { loading, data } = useQuery(QUERY_GETSINGLEUSER)
  const userData = data?.getSingleUser || {}
  const [deleteBook, { loading: deleteLoading, error: deleteError }] = useMutation(DELETE_BOOK);

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteBook({
        variables: {
          bookId,
        },
      });
      removeBookId(bookId);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (deleteError) {
    console.error('Error deleting book:', deleteError);
    // Optionally, render an error message on the UI as well
  }

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks && userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedBooks && userData.savedBooks.map((book) => (
            <Col md="4" key={book.bookId}>
              <Card border='dark'>
                {book.image && <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors.join(', ')}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {!deleteLoading && (
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;