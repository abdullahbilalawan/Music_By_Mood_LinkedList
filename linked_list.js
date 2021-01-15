var fs = require('fs');
//class for storing name and link
class Song {
    constructor(name, link) {
      this.name = name;
      this.link = link;
  }
};  

//bucket.js for the datastructures use installed from npm
var buckets = require('buckets-js');


// linked list for storing songs(songname, youtube link)
const sad_songs = buckets.LinkedList();
const happy_songs = buckets.LinkedList();
const moderate_songs = buckets.LinkedList();


//adding a sad song
const a = new Song('Him and I','https://www.youtube.com/watch?v=SA7AIQw-7Ms&list=RDSA7AIQw-7Ms&start_radio=1');
const b = new Song('Believer','https://www.youtube.com/watch?v=SA7AIQw-7Ms&list=RDSA7AIQw-7Ms&start_radio=1');

sad_songs.add(a,0);
sad_songs.add(b,1);

//displaying song

for(i=0;i<sad_songs.size();i++){
  console.log(sad_songs.toArray()[i].name)
}



//strigify to JSON

const sad = JSON.stringify(sad_songs)
const happy = JSON.stringify(happy_songs);
const moderate = JSON.stringify(moderate_songs);




//save json file the object of liked list

fs.writeFile('sad.json', sad, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});