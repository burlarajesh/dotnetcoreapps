/* eslint no-undef: "off"*/
/* global jQuery, padding */


import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


import '../Theme/css/style.css';
import { homePageEntity } from '../Entities/homePage';
import { Topic } from '../Entities/Topic';
import { stateStore } from '../Entities/homeState';
import { ContentTile } from '../components/contentTile';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
export class HomePage extends Component {
    
    constructor(props) {
        super(props);
        const defaultState = { data: stateStore };
        
        this.state = props.initialState ? props.initialState : defaultState;
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div id="colorlib-page">
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                    <aside id="colorlib-aside" role="complementary" className="js-fullheight">
                        <nav id="colorlib-main-menu" role="navigation">
                           
                            <ul>
                                <li className="colorlib-active"><a href="index.html">Home</a></li>                                
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
                    <div id="colorlib-main">
                        <section className="ftco-section ftco-no-pt ftco-no-pb">
                            <div className="container">
                                <div className="row d-flex">
                                    <div className="col-xl-12 py-5 px-md-5">
                                        <div className="row pt-md-4">
                                            <div className="col-md-12">
                                                <div className="blog-entry d-md-flex fadeInUp ftco-animated">
                                                    <a href="single.html" className="img img-2"></a>
                                                    <div className="text text-2 pl-md-4">
                                                        <h3 className="mb-2"><a href="single.html">A Loving Heart is the Truest Wisdom</a></h3>
                                                        <div className="meta-wrap">
                                                            <p className="meta">
                                                                <span><i className="icon-calendar mr-2"></i>June 28, 2019</span>
                                                                <span><a href="single.html"><i className="icon-folder-o mr-2"></i>Travel</a></span>
                                                                <span><i className="icon-comment2 mr-2"></i>5 Comment</span>
                                                            </p>
                                                        </div>
                                                        <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                        <p><a href="#" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
                                                    </div>
                                                </div>
                                            </div>                                            
                                            <ContentTile contentData={this.state.homeData}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>                
            )
        }
        else {
            return (             
                <div>Loading...</div>
                )
        }
    }

    componentDidMount() {
       
        this.createTable();        
    }

    createTable = () => {

        var result = [];
        const currentLocation = window.location.currentLocation;
        fetch(`api/HomePage/GetData`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ homeData: data , isLoaded: true });               
            })
    }

   
}