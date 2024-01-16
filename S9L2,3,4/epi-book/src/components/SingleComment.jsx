import React, { Component } from 'react'

export default class SingleComment extends Component {
  render() {
    return (
        <li key={this.props.singleComm._id}>rate: {this.props.singleComm.rate} <br />Comment: {this.props.singleComm.comment} <br /> Author: {this.props.singleComm.author}</li>
    )
  }
}
