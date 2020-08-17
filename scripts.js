
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

            // Showing list after search
            let showlist = document.createElement('p');
            showlist.className = 'author lead'
            showlist.innerHTML = `<strong>${songTitle}</strong> Album by <span>${albumTitle}</span> <button class="btn btn-success">Get Lyrics</button>`
            document.getElementById('show-songs').appendChild(showlist);
   }

    })
});
