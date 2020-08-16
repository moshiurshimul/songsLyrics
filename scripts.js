
document.getElementById('search-btn').addEventListener('click', function() {
    const songName = document.getElementById('song-name-input').value

    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const apiData = data.data
        document.getElementById('show-songs').style.display = 'block';
        document.getElementById('first-song-title').innerText = apiData[0].title;
        document.getElementById('first-song-album').innerText = apiData[0].album.title;
        
    
    })
  })


