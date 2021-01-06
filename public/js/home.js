function deleteFromCollection(id) {

    axios
        .delete(`https://rj-movies-collection.herokuapp.com/${id}`, {
        })
        .then(() => {
            console.log(`${id} deleted request send`);
            setTimeout(() => {
                location.href = 'https://rj-movies-collection.herokuapp.com/';
            },10)
    })
        .catch((err) => console.log(err));
}
