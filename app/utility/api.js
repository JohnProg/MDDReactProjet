var api = {

    //Firebase
    addNote(note){
        var url = `https://anifan.firebaseio.com`;
        return fetch(url, {
            method: 'post',
            body: JSON.Stringify(note)
        }).then((res) => res.json());
    },
    getList(){
        var url = `https://anifan.firebaseio.com`;
        return fetch(url).then((res) => res.json());
    },

    //AniBD
    getTitles(){
        var url = `http://api.anidb.net:9001/httpapi?request=anime`;
        return fetch(url).then((res) => res.json());
    }

};

module.exports = api;
