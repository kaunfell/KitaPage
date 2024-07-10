// class TheAlbum is in 3 places
//classTheSong is in 2 places


const albums = [
    {
        year: "2023: ",
        name: 'Licence Album: Realms',
        songs: [
            {
                name: 'mecha1',
                source: "./resurssit/music/mecha1.wav",
                adjectives: ['adjective1', 'adj2', 'adj3'],
                explanation: "super cool . Mus mauris vitae ultricies leo integer malesuada. \
                Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim.\
                Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim. \
                Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim.  "
            },
            {
                name: 'mecha2',
                source: "./resurssit/music/mecha2.wav",
                adjectives: ['adj1', 'adj36363', 'adj3'],
                explanation: "extra super cool . Mus mauris vitae ultricies leo integer malesuada. Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim. "

            },
            { 
                name: 'mecha3',
                source: "./resurssit/music/mecha3.wav",
                adjectives: ['adj1', 'adj2', 'adj3'],
                explanation: "Yeah! Mus mauris vitae ultricies leo integer malesuada. Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim. "
            },
            {
                name: 'mecha4',
                source: "./resurssit/music/mecha4.wav",
                adjectives: ['adj1', 'adjektiiive2', 'adj3'],
                explanation: "WOHOO! Mus mauris vitae ultricies leo integer malesuada. Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim. "
            },
            {
                name: 'mecha6',
                source: "./resurssit/music/mecha6.wav",
                adjectives: ['adjektiiivvv33', 'adj2', 'adj3'],
                explanation: "Awesome! Mus mauris vitae ultricies leo integer malesuada.\
                 Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim.\
                 sit. Aliquet eget sit amet tellus cras adipiscing enim."
            },

        ]//songs end here
    }
    //other album here




];

//defining some areas where we change strings
const albumTitles = document.querySelectorAll('.TheAlbum');
const albumYears = document.querySelectorAll('.TheYear');

const songsContainer = document.querySelector('.songsContainer');




//Loops through year
albumYears.forEach(albumYear => {

    albumYear.innerHTML = albums[0].year + "&nbsp;" ;

});
//Loops through names
albumTitles.forEach(albumTitle => {

    albumTitle.innerHTML = albums[0].name;

});


//Access songs in album 0
const songs = albums[0].songs;

//getting access to elements
const TheSongs = document.querySelectorAll('.TheSong');
const TheAdjective = document.querySelector('.TheAdjective');
const songExp = document.querySelector('.songExp');

//access to audioplayer
const audioPlayer = document.querySelector('.audioPlayer');

//default is the first song
TheSongs[0].textContent = songs[0].name;
TheAdjective.textContent = songs[0].adjectives;
songExp.textContent = songs[0].explanation;
audioPlayer.src = songs[0].source;



// Loop through each songTitle element and update its innerHTML
songs.forEach(song => {

    //const songTitle = document.querySelector('.otherSongName').cloneNode(true);
    const songTitle = document.createElement("p");
    songTitle.classList.add('otherSongName');
    songTitle.textContent = song.name;


    //const songAdjective = document.querySelector('.adjectives').cloneNode(true);
    const songAdjective = document.createElement("p");
    songAdjective.classList.add('adjectives');
    songAdjective.textContent = song.adjectives;
    // Check if there is a corresponding song in albums[0].songs
   /* if (index < songs.length) {
        songTitle.innerHTML = songs[index].name;
        
    }*/
    songsContainer.appendChild(songTitle );
    songsContainer.appendChild(songAdjective );

//songtitles have eventlistener
    songTitle.addEventListener('click', showSongDetails);


    function showSongDetails(){

        TheSongs.forEach(TheSong =>{
            TheSong.textContent = song.name;
        });
        //gives the adjectives and explanation of current song
        TheAdjective.textContent = song.adjectives;
        songExp.innerHTML = song.explanation;


        //changes the source
        audioPlayer.src = song.source;
        popOut();
        

    }

    function popOut(){

    }

});





/*
for(let i= 0; i<albums[0].songs.length; i++){

    songTitles.forEach(songTitle => {

        songTitle.innerHTML = albums[0].songs[i].name;
    
    });
}*/
 /*   songTitles.forEach(songTitle => {

        for(let i= 0; i<albums[0].songs.length; i++){

        songTitle.innerHTML = albums[0].songs[i].name;
    }

    });*/






/*
function showSongName(){

    TheSongs.forEach(TheSong =>{
        TheSong.textContent = songTitle;
    });
}
*/

/*    TheSong.innerHTML = "teeest";
    TheSongs.forEach(TheSong => {

        TheSong.textContent = "teeeeest";
    
    });*/




    /*    TheSongs.forEach(TheSong =>{
        TheSong.style.backgroundColor = "pink";
    });*/