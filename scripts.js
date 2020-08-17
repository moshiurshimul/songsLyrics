
document.getElementById('search-btn').addEventListener('click', function() {
    const songName = document.getElementById('song-name-input').value

    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const apiData = data.data
        for (let i = 0; i < 10; i++) {
            const element= apiData[i];
            let showTitle = document.createElement('p');
            showTitle.className = 'author lead'
            showTitle.innerHTML = `<strong>${element.title}</strong> Album by <span>${element.album.title}</span> <button class="btn btn-success">Get Lyrics</button>`
            document.getElementById('show-songs').appendChild(showTitle);
   }

    })
});
