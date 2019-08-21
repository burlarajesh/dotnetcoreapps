import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { HomePage } from './homePage';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
            <Row>
          <Col sm={9}>
            <div></div>
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
