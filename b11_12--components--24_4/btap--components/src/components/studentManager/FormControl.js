import React from 'react'

export const FormControl = (props) => {
    const { dataStudent, openAddNew, handleChangeInput, submitForm } = props;

    return (
        <>
            <button className="btn btn-primary" onClick={openAddNew}>Add New</button>
            <form className="row my-2" onSubmit={submitForm}>
                <div className="col-4">
                    <input type="text" name='name' value={dataStudent.name} onChange={handleChangeInput} className="form-control" placeholder='Nhập tên' />
                </div>
                <div className="col-4">
                    <input type="text" name='age' value={dataStudent.age} onChange={handleChangeInput} className="form-control" placeholder='Nhập tuổi' />
                </div>
                <div className="col-4">
                    <input type="text" name='address' value={dataStudent.address} onChange={handleChangeInput} className="form-control" placeholder='Nhập địa chỉ' />
                </div>
                <div className="col-4 mx-auto my-4">
                    <button className={`w-100 btn btn-${dataStudent.id === undefined ? 'success' : 'info'}`} type='submit'>
                        {dataStudent.id === undefined ? 'Thêm Mới' : 'Sửa'}
                    </button>
                </div>
            </form >
        </>
    )
}
