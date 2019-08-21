
import React, { Component } from 'react';
import { homePageEntity } from '../Entities/homePage';
import { Topic, TopicCategory } from '../Entities/Topic';
export class ContentTile extends Component {
    entityData = [];
    test = [];
    constructor(props) {
        super(props);
        this.entityData = props.contentData;
    }
    render() {
        return (
            this.entityData.map((current, i) =>  
                <div className="col-md-12">
                    <div className="blog-entry d-md-flex fadeInUp ftco-animated">
                        <a href="single.html" className="img img-2"></a>
                        <div className="text text-2 pl-md-4">
                            <h3 className="mb-2"><a href="single.html">{current.Topic.Title}</a></h3>
                            <div className="meta-wrap">
                                <p className="meta">
                                    <span><i className="icon-calendar mr-2"></i>June 28, 2019</span>
                                    <span><a href="single.html"><i className="icon-folder-o mr-2"></i>{this.getCategoryName(current.Topic.Category)}</a></span>
                                    <span><i className="icon-comment2 mr-2"></i>5 Comment</span>
                                </p>
                            </div>
                            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <p><a href="#" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
                        </div>
                    </div>
                </div>
            )
            )
    }

    getCategoryName(category) {
        return Object.keys(TopicCategory).find(k => TopicCategory[k] === category);
    }
}

