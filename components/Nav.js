import Link from 'next/link';
import styled from 'styled-components'

const Bar = styled.div`
  display: flex;
  a {
    padding: 3rem;
    align-self: auto;
    font-size: 2rem;
  }

`

const Nav = () => (
  <Bar>
    <Link href="/cakes">
      <a>Cakes</a>
    </Link>
    <Link href="/menu">
      <a>Menu</a>
    </Link>
    {/* <Link href="/about">
      <a>About us</a>
    </Link> */}
    <Link href="/shop">
      <a>Shop</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </Bar>
);

export default Nav;