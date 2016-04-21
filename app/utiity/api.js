var api = {

    addNote(note){
        var url = `https://anifan.firebaseio.com`;
        return fetch(url, {
            method: 'post',
            body: JSON.Stringify(note)
        }).then((res) => res.json());
    },
    getNotes(){
        var url = `https://anifan.firebaseio.com/`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;
