const token = 'eyJuYW1lIjoiTFx1MDBlYSBYdVx1MDBlMm4gSG9cdTAwZTBuZyAoUkoyMzAzUjEpIn0:eTQH8u8AcXOAczoU-t8539ENVfLq7iRvwbXMj-M6Hmc';
const api = 'http://api.iamdien.com:8000/book/';

const htmlTbody = document.querySelector('tbody');
const inpBook = document.querySelector('#inp-book');
const inpAuthor = document.querySelector('#inp-author');

let idEdit = null;

function renderBook() {
    console.log('1111');
    axios.get(`${api}?token=${token}`)
        .then((response) => {
            let data = response.data;
            let listBook = data.data;
            // console.log(listBook);
            htmlTbody.innerHTML = '';
            for (book of listBook) {
                const new_tr = document.createElement('tr');
                new_tr.innerHTML = `
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>
                    <button class='btn ${(book.id == idEdit) ? "btn-warning" : "btn-info"}' onclick='editBook(this,${book.id})' >Sửa</button>
                    <button class='btn btn-danger' onclick='deleteBook(${book.id})' >Xóa</button>
                </td>
                `
                htmlTbody.append(new_tr)
            }
        })
        .catch((error) => {
            log.error(error);
        })
}
renderBook();

function submitBook(e, item) {
    e.preventDefault();
    const button = item.querySelector('button');
    button.disabled = true;

    if (idEdit != null) {
        axios.put(`${api}?token=${token}&id=${idEdit}&name=${inpBook.value}&author=${inpAuthor.value}`)
            .then((response) => {
                let data = response.data;
                console.log(data);
                idEdit = null
                renderBook();
            })
            .finally(() => {
                button.disabled = false
            })
            .catch((error) => {
                log.error(error);
            })
    } else {
        axios.post(`${api}?token=${token}&name=${inpBook.value}&author=${inpAuthor.value}`)
            .then((response) => {
                let data = response.data;
                console.log(data);
                renderBook();
            })
            .finally(() => {
                button.disabled = false
            })
            .catch((error) => {
                log.error(error);
            })
    }
    inpBook.value = '';
    inpAuthor.value = '';
}

function editBook(button, idBook) {
    if (idEdit == idBook) {
        idEdit = null;
        inpBook.value = '';
        inpAuthor.value = '';
        renderBook()
        return
    }

    idEdit = idBook
    const tr = button.parentElement.parentElement
    const name = tr.children[1].innerHTML;
    const author = tr.children[2].innerHTML
    inpBook.value = name;
    inpAuthor.value = author;
    renderBook()
}

function deleteBook(paramId) {
    axios.delete(`${api}?token=${token}&id=${paramId}`)
        .then((response) => {
            let data = response.data;
            console.log(data);
            renderBook();
        })
        .catch((error) => {
            log.error(error);
        })
}