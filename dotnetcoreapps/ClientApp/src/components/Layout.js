import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { HomePage } from './homePage';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
            <Row>
          <Col sm={3}>
                    <div>
                        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                        <aside id="colorlib-aside" role="complementary" className="js-fullheight">
                            <nav id="colorlib-main-menu" role="navigation">

                                <ul>
                                    <li className="colorlib-active"><a href="/">Home</a></li>
                                    <li><a href="travel.html">Post topic</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <LinkContainer to={'/postTopic'}>
                                        <NavItem>
                                            <Glyphicon glyph='education' /> Post
                                    </NavItem>
                                    </LinkContainer>

                                    <li><a>Login</a></li>
                                </ul>
                            </nav>
                        </aside>
                    </div>
          </Col>
          <Col sm={7}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  } 

    //render() {
    //    return (
    //        <Grid fluid>
    //            <Row sm={2}>
    //                <Col sm={9}>
                       
    //                </Col>     
    //            </Row>
    //            <Row sm={7}>
    //                <Col sm={9}>
                        
    //                </Col>                    
    //            </Row>
    //        </Grid>
    //        )
    //}
}
