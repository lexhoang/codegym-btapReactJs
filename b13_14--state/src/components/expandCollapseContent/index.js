import React, { Component } from 'react'
import Content from './Content';

export default class ExpandCollapseContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    handleOpenContent = () => {
        this.setState({ isExpand: true })
    }
    handleCloseContent = () => {
        this.setState({ isExpand: false })
    }
    render() {
        const { isExpand } = this.state
        return (
            <div >
                <h1 className="bg-success text-white p-4 my-4">Conditional Rendering</h1>
                <div className='p-5'>
                    {
                        isExpand ?
                            <button className='btn btn-info' onClick={this.handleCloseContent}>Đóng giới thiệu</button>
                            :
                            <button className='btn btn-info' onClick={this.handleOpenContent}>Xem giới thiệu</button>
                    }
                    {
                        isExpand ? <Content /> : ''
                    }
                </div>
            </div>
        )
    }
}
