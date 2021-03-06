var fs = require('fs');
//class for storing name and link
class Song {
    constructor(name,  artist, image,link) {
      this.name = name;

      this.artist = artist;
      this.image = image;
      this.path = link;
  }
};  

//bucket.js for the datastructures use installed from npm
var buckets = require('buckets-js');


// linked list for storing songs(songname, youtube link)
const sad_songs = buckets.LinkedList();
const happy_songs = buckets.LinkedList();
const moderate_songs = buckets.LinkedList();


//adding a sad song
const a = new Song('Night Owl','Broke For Free','https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250','https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3');
const b = new Song('Dont Let Your Deal Go Down Blues',' Celesteville','https://ia800703.us.archive.org/15/items/Vast_and_Sad-135/Vast_and_Sad-135.jpg?cnt=0','http://www.openmusicarchive.org/audio/Dont_Let_Your_Deal_Go_Down_Blues.mp3');
const c = new Song('Deep Blue Sea Blues','Clara Smith','https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250','http://www.openmusicarchive.org/audio/Deep_Blue_Sea_Blues.mp3');
const d = new Song('Poor Me Blues','Edna Hicks','https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250','http://www.openmusicarchive.org/audio/Poor_Me_Blues.mp3')

sad_songs.add(a,0);
sad_songs.add(b,1);
sad_songs.add(c,2);
sad_songs.add(d,3);
//displaying song

for(i=0;i<sad_songs.size();i++){
  console.log(sad_songs.toArray()[i].name)
}



//strigify to JSON

const sad = JSON.stringify(sad_songs.toArray())
const happy = JSON.stringify(happy_songs);
const moderate = JSON.stringify(moderate_songs);




//save json file the object of liked list



fs.writeFile('sad.json', sad, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});