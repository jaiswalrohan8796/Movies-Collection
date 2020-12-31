function deleteFromCollection(id) {

    axios
        .delete(`http://localhost:3000/${id}`, {
        })
        .then(() => {
            setTimeout(() => {
                location.href = 'http://localhost:3000';
            },10)
    })
        .catch((err) => console.log(err));
}