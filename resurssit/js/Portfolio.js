// class TheAlbum is in 3 places
//classTheSong is in 1 places


const albums = {
    year:{
        "2024": [

        {
        id: "realms",
        name: 'Licence Album: Realms',
        explanation: "Cool album. Mus mauris vitae ultricies leo integer malesuada. \
                Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim.\
                Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim. \
                Habitasse platea dictumst quisque sagittis purus sit. Aliquet eget sit amet tellus cras adipiscing enim.  ",
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
    },//other album here
    {
        id: "oracle",
        name: "Oracle Theme",
        explanation: "veery cool album! veery cool album! veery cool album! veery cool album!",
        songs: [
              {  name:"Orrracle song/mecha7",
                 source: "./resurssit/music/mecha7.wav",
                 explanation: "This song is used on oraclewwwww",
                 adjectives: ['asfsdj1', 'adjektiiive2', 'adj3'],
              }
        ]
    }   

    ], //albums24 end here?
    //2025: [] here
}
};
document.addEventListener('DOMContentLoaded', function(){
    ChangeSongNames(defaultAlbum.songs)
});

//defining some areas where we change strings
const albumTitles = document.querySelectorAll('.TheAlbum');
const albumYears = document.querySelectorAll('.TheYear');

const songsContainer = document.querySelector('.songsContainer');


//Access songs in album 0
//const songs = albums.albums24[0].songs;

//getting access to elements
const TheSongs = document.querySelectorAll('.TheSong');
const TheAdjective = document.querySelector('.TheAdjective');
const songExp = document.querySelector('.songExp');
const albumAbout = document.querySelector(".albumAboutP");

const popOutDiv = document.querySelector(".popOutDiv");

//const songs = albums.albums24[0].songs;



//access to audioplayer
const audioPlayer = document.querySelector('.audioPlayer');

//DEFAULT is the first song
const defaultAlbum = albums.year["2024"][0]; // Default to first album
const defaultSong = defaultAlbum.songs[0]; 

TheSongs[0].textContent = defaultSong.name;
TheAdjective.textContent = defaultSong.adjectives; 

songExp.textContent = defaultSong.explanation;
audioPlayer.src = defaultSong.source;

albumAbout.textContent = defaultAlbum.explanation;


//albumYears.textContent = albums.year;
albumTitles.forEach(albumTitle => {
    albumTitle.innerHTML = defaultAlbum.name; // 
});


//         FUNCTIONS >>

//choose and change ALBUM 
const TheAlbumName = document.querySelectorAll(".TheAlbumName");

TheAlbumName.forEach(alb => {
    alb.addEventListener('click', chooseAlbum);

});  
    
let previouslyClickedAlbum = null;

    function chooseAlbum(event){
        const alb = event.currentTarget;

        if(previouslyClickedAlbum){
            previouslyClickedAlbum.style.fontWeight = "normal";
        }
        alb.style.fontWeight = "bold";
        previouslyClickedAlbum = alb;
        //changeAlbumNames(alb.textContent);
        
        const albumId = alb.getAttribute('data-album-id');
        
        const selectedAlbum = albums.year["2024"].find(album => album.id === albumId);
        

        if(selectedAlbum){
            changeAlbumNames(selectedAlbum);
       };

    };
 

//Loops through names
function changeAlbumNames(selectedAlbum){

   // albumTitles.forEach(albumTitle => {
     //   albumTitle.innerHTML = ""; // ""Clear the content
   // });

    albumTitles.forEach(albumTitle => {
    
        
        //albumTitle.innerHTML = albums.albums24[0].name;
        albumTitle.innerHTML = selectedAlbum.name;
    });
        albumAbout.innerHTML = selectedAlbum.explanation;

    ChangeSongNames(selectedAlbum.songs);
};
    

//Loops through year
albumYears.forEach(albumYear => {

    const year = albumYear.dataset.year;
    albumYear.innerHTML = year + ":" + "&nbsp;" ;

});














// Loop through each songTitle element and update its innerHTML
function ChangeSongNames(songs){

    songsContainer.innerHTML = "";

songs.forEach(song => {

    const popOutDiv = document.createElement("div");
    popOutDiv.classList.add("popOutDiv");

    //const songTitle = document.querySelector('.otherSongName').cloneNode(true);
    const songTitle = document.createElement("p");
    songTitle.classList.add('otherSongName');
    songTitle.textContent = song.name;


    //const songAdjective = document.querySelector('.adjectives').cloneNode(true);
    const songAdjective = document.createElement("p");
    songAdjective.classList.add('adjectives');
    songAdjective.textContent = song.adjectives.join(' - ');

        
        songsContainer.appendChild(popOutDiv);    
   /*was songsContainer*/
    popOutDiv.appendChild(songTitle );
    popOutDiv.appendChild(songAdjective );
   
    

//songtitles/popOutDiv have eventlistener
    popOutDiv.addEventListener('click',()=> showSongDetails(song));
    
});

if (songs.length > 0) {
    showSongDetails(songs[0]);
}

};

//function to show details
    function showSongDetails(song){
        
        TheSongs.forEach(TheSong =>{
            TheSong.textContent = song.name;
        });
        //gives the adjectives and explanation of current song
        TheAdjective.textContent = song.adjectives.join(' - ');
        songExp.innerHTML = song.explanation;


        //changes the source
        audioPlayer.src = song.source;
        popOut();
        

    }

    let previouslyClickedDiv = null;
    function popOut(){
        const popOutDiv = event.currentTarget;

        if(popOutDiv.closest('.songsContainer')){

        
        if(previouslyClickedDiv){
            previouslyClickedDiv.style.transform = "translate(0px)";
        }
        
        popOutDiv.style.transform = "translate(-50px)";
        previouslyClickedDiv = popOutDiv;

    }
};



