// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © {new Date().getFullYear()}{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://www.bswengineering.com"
                target="_blank"
              >
                BSW Engineering
              </a>
            </div>
          </Col>
          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <div className="copyright text-center text-xl-left text-muted">
                  <a
                    className="font-weight-bold ml-1"
                    href="https://bit.ly/3CY913f"
                    target="_blank"
                  >
                    Powered by : MANTH SOLUTIONS
                  </a>
                </div>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
