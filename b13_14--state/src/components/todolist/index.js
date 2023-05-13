import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      item: e.target.value
    })
  }

  handleAddItem = (e) => {
    e.preventDefault();

    this.setState({
      list: [...this.state.list, this.state.item]
    })
  }

  render() {
    const { list } = this.state
    return (
      <div className=' mx-auto' style={{ width: '350px' }}>
        <h1 className='text-center my-4'>Todo List</h1>
        <form className="form-inline" onSubmit={this.handleAddItem}>
          <div className="form-group row">
            <div className="col-9">
              <input type="text" className="form-control" placeholder="Enter"
                value={this.state.item} onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100" type='submit'>Add</button>
            </div>
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    )
  }
}
