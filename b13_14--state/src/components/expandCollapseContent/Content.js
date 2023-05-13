import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className="p-5">
                <h1>Giới thiệu</h1>
                <p>
                    Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện <br />
                    ví dụ như trạng thái của state, props.... mà bạn muốn hiển thị một hoặc một số component nào đó. <br />
                    Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.
                </p>
            </div>

        )
    }
}
