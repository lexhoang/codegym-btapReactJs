import React, { Component } from 'react'

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    }
  }
  handleChangeNum_1 = (e) => {
    this.setState({ number1: e.target.value })
  }
  handleChangeNum_2 = (e) => {
    this.setState({ number2: e.target.value })
  }

  handlePlusNum = () => {
    this.setState({
      result: parseInt(this.state.number1) + parseInt(this.state.number2)
    })
  }

  handleSubtractionNum = () => {
    this.setState({
      result: parseInt(this.state.number1) - parseInt(this.state.number2)
    })
  }

  handleMultiplicationNum = () => {
    this.setState({
      result: parseInt(this.state.number1) * parseInt(this.state.number2)
    })
  }

  handleDivisionNum = () => {
    this.setState({
      result: parseInt(this.state.number1) / parseInt(this.state.number2)
    })
  }

  render() {
    return (
      <div className='border border-dark p-3 text-center' style={{ width: '400px' }}>
        <input type="number" value={this.state.number1} onChange={this.handleChangeNum_1} />
        <input type="number" className='my-2' value={this.state.number2} onChange={this.handleChangeNum_2} />

        <h4 className="my-4">Result: {this.state.result} </h4>

        <button className="btn btn-secondary m-1" style={{ width: '50px' }} onClick={this.handlePlusNum}>+</button>
        <button className="btn btn-secondary m-1" style={{ width: '50px' }} onClick={this.handleSubtractionNum}>-</button>
        <button className="btn btn-secondary m-1" style={{ width: '50px' }} onClick={this.handleMultiplicationNum}>X</button>
        <button className="btn btn-secondary m-1" style={{ width: '50px' }} onClick={this.handleDivisionNum}>/</button>
      </div>
    )
  }
}
