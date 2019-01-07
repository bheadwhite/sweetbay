import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

// fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faPhone, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const StyledHeader = styled.header `

      border-bottom: 2px solid ${props => props.theme.black};

  .infobar {
      background: ${props => props.theme.black};
      color: ${props => props.theme.lightgrey};
      justify-content: space-around;
      width: 100%;

      .rightClicks {
          margin-top: auto;
          margin-bottom: auto;
          @media (max-width: 650px) {
            justify-content: center;
          }
          .social {
          };
          .tools {
              margin-left: 3.6rem;
          }
      };
      @media (max-width: 650px) {
        display: flex;
        flex-direction: column;

      }
  }
  .bar {
      display: flex;
  }
`;

const Navbar = styled.div`
  display: flex;
  position: static;
  top: 0;
  justify-content: space-between;
  div img {
    margin-left: 4rem;
  }
`

const Contact = styled.div `
    display: flex;
    text-align: center;
    p {
        margin: auto;
        font-size: 1.6rem;
        font-weight: 700;
        color: ${props => props.theme.lightgrey};
    }
    a {
      display: flex;
    }
    div {
        display: flex;
    };
    div:nth-of-type(2) {
        margin-left: 3.6rem;
    };
    @media (max-width: 650px) {
      justify-content: center;
    }
    @media (max-width: 445px) {
      flex-direction: column;
      div:nth-of-type(2) {
        margin-left: 0;
      }
      div {
        justify-content: center;
      }
    }
`
const Icon = styled.span `
    margin: auto;
    padding: .7rem;
    color: ${props => props.theme.lightgrey};
    cursor: pointer;
    /* a {
      color: ${props => props.theme.lightgrey}
    } */
`



const Header = () => (
  <StyledHeader>
    <div className="infobar dflex">

      <Contact>
        <div>
          <Link><a><Icon><FontAwesomeIcon icon={faPhone} flip="horizontal" /></Icon><p>(801) 618 8628</p></a></Link>
        </div>
        <div>
          <Link><a><Icon><FontAwesomeIcon icon={faEnvelope} /></Icon><p>info@sweetbaycakes.com</p></a></Link>
        </div>
      </Contact>

      <div className="rightClicks dflex">

        <div className="social">
          <Link href="http://www.facebook.com/sweetbaycakes1/">
            <a target="_blank">
              <Icon>
                <FontAwesomeIcon icon={faFacebookF} />
              </Icon>
            </a>
          </Link>

          <Link href="http://www.instagram.com/sweetbaycakes29/">
            <a target="_blank">
              <Icon>
                <FontAwesomeIcon icon={faInstagram} />
              </Icon>
            </a>
          </Link>
        </div>

        <div className="tools">
            <Link>
                <Icon>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Icon>
            </Link>
            <Link>
                <Icon>
                    <FontAwesomeIcon icon={faSearch} />
                </Icon>
            </Link>
        </div>
                
      </div>
    </div>

    <Navbar>
      <div>
        <Link href="/">
          <a>
            <img src="../static/sweetBayCakes.png" alt="Sweet Bay Cakes logo" width="320px"/>
          </a>
        </Link>
      </div>
      <Nav />
    </Navbar>
  </StyledHeader>
);

export default Header;