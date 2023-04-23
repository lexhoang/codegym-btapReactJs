const inpGip = document.querySelector('#inp-gip');
const listGip = document.querySelector('#render-gip');


function search_gip() {
    let keyWord = inpGip.value;
    let data;
    let renderGip = '';

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=fWQoiYSYZqIuYeWTyRPrILT9w6P1Izf6`)
        .then((response) => {
            data = response.data.data;
            console.log(data);

            data.map((data) => {
                return (
                    renderGip += `
                        <img src='${data.embed_url}'/>
                    `
                )
            })
            listGip.innerHTML = renderGip;
        })
}
