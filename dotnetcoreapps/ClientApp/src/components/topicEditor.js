import { Editor } from 'react-draft-wysiwyg';
import '../Styles/react-draft-wysiwyg.css'
import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export class TopicEditor extends Component {
    editorState = {};
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }
    
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
    
    render() {
        return (
            <div>
                <Editor
        toolbarClassName = "toolbarClassName"
        wrapperClassName = "wrapperClassName"
        editorClassName = "editorClassName"
        onEditorStateChange = { this.onEditorStateChange }
                />
            </div>
            )
    } 
   
}