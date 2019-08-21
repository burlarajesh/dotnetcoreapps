import { Editor } from 'react-draft-wysiwyg';
import '../Styles/react-draft-wysiwyg.css'
import React, { Component } from 'react';

export class TopicEditor extends Component {
    editorState = {};
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
    onEditorStateChange() {

    }
}