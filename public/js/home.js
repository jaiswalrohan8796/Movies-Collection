function deleteFromCollection(id) {

    axios
        .delete(`http://localhost:3000/${id}`, {
        })
        .then(() => {
            console.log(`${id} deleted request send`);
            setTimeout(() => {
                location.href = 'http://localhost:3000';
            },10)
    })
        .catch((err) => console.log(err));
}