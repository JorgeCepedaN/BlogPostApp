import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Blogs } from './Blogs';

export class Home extends Component {
    render() {
        return (
            <Blogs blogs={this.props.blogs} />
        );
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs.data,
});

connect(mapStateToProps)(Home);
