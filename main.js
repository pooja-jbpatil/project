let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")

console.log(song_play)

let songs_list = [
    {
        name: 'Tere Bina ',
        Image: 'images/Tere Bina.jpg',
        Song: 'music/tere bina.mp3',
        Singer: 'Zaeden'
    },
    {
        name: 'Love Story',
        Image: 'images/taylor_swift_love_story.jpg',
        Song: 'music/Taylor-Swift-Love-Story.mp3',
        Singer: 'Taylor Swift'
    },
    {
        name: 'Red',
        Image: 'images/Taylor_Swift_Red.png',
        Song: 'music/Taylor-Swift-Red.mp3',
        Singer: 'Taylor Swift'
    },
    {
        name: 'Wildest Dreams',
        Image: 'images/wildest_dreams_taylor.jfif',
        Song: 'music/Taylor-Swift-Wildest-Dreams.mp3',
        Singer: 'Taylor Swift'
    }
]

let i = 0;
let flag = false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

function togglePlay() {
    if (flag === false) {
        audio.play()
        flag = true;
        song_play.innerHTML = '<i class="fas fa-pause fa-3x prev"></i>';
        console.log(flag)
    } else {
        audio.pause()
        flag = false;
        song_play.innerHTML = '<i class="fas fa-play fa-3x prev"></i>';
        console.log(flag)
    }
}

song_play.addEventListener("click", togglePlay);

song_next.addEventListener("click", function () {

    audio.pause()
    flag = false;
    i = i + 1;
    if (i >= songs_list.length) {
        i = 0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if (flag === false) {
        audio.play()
        flag = true;
        song_play.innerHTML = '<i class="fas fa-pause fa-3x prev"></i>';
        console.log(flag)
    }

})

song_prev.addEventListener("click", function () {

    audio.pause()
    flag = false;
    i = i - 1;
    if (i < 0) {
        i = songs_list.length - 1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if (flag === false) {
        audio.play()
        flag = true;
        song_play.innerHTML = '<i class="fas fa-pause fa-3x prev"></i>';
        console.log(flag)
    }
})
