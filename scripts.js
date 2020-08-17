
document.getElementById('search-btn').addEventListener('click', function() {
    const songName = document.getElementById('song-name-input').value

    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const apiData = data.data
        for (let i = 0; i < 10; i++) {
            const element= apiData[i];

            //Song details
            const songTitle = element.title
            const albumTitle = element.album.title
            const albumPhoto = element.album.cover_medium

            let showList = document.createElement('div')
            showList.className = 'single-result row align-items-center my-3 p-3'
            showList.innerHTML = 
            `<div class="col-md-3">
            <img src="${albumPhoto}" alt=""> 
            </div>
            <div class="col-md-6">
            <h3 class="lyrics-name">${songTitle}</h3>
            <p class="author lead">Album by <span>${albumTitle}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
            </div>`
            document.getElementById('show-songs-list').appendChild(showList);
   }

    })
});
