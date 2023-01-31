import { ShoppingCart } from 'phosphor-react';
import {
  Button,
  Container,
  Nav,
  Navbar as NavaBarBs,
  NavLink,
} from 'react-bootstrap';

export function NavBar() {
  return (
    <NavaBarBs sticky='top' className='bg-white shadow-sm mb-3 '>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link href='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link href='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link href='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant='outline-primary'
          className='rounded-circle'
        >
          <ShoppingCart size={25} />
          <div
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{
              width: '1.5rem',
              height: '1.5rem',
              position: 'relative',
              color: 'white',
              bottom: '0',
              right: '0',
              transform: 'translate(25%,25%)',
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavaBarBs>
  );
}
