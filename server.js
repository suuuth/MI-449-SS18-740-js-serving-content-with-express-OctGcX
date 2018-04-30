
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var bands = {}

createGalleryCard({
  image_path: '/allThemWitches_ourMotherElectricity.jpg',
  album: 'Our Mother Electricity',
  band: 'All Them Witches',
  slug: 'all-them-witches',
  released: 'December 7, 2012',
  description: 'All Them Witches are an American rock band from Nashville, Tennessee. The band consists of drummer Robby Staebler, vocalist, bassist, and guitarist Charles Michael Parks, Jr., guitarist Ben McLeod, and keyboardist and violinist Allan Van Cleave.',
  location: '/band/0',
  youtube: 'https://www.youtube.com/watch?v=gjZXmJJc2Gs'
})
createGalleryCard({
  image_path: '/bloodclot_upInArms.jpg',
  album: 'Up In Arms',
  band: 'Bloodclot',
  slug: 'bloodclot',
  released: 'July 14, 2017',
  description: 'Bloodclot is a project featuring true hardcore pioneers: John Joseph of the Cro-Mags, plus former members of Queens of the Stone Age (Joey Castillo, drums; Nick Oliveri, bass), and Danzig (Todd Youth, guitar). While being the leader of one of the most influential hardcore bands of all time – the Cro-Mags – John Joseph is also an author, an outspoken advocate of plant-based nutrition, and a competitive Ironman tri-athlete. Todd Youth – who played in Agnostic Front at the age of 12 – has played guitar with a myriad of artists, including Danzig, Glen Campbell, Motorhead, Ace Frehley, and many more. Additionally, Nick Oliveri has played bass in Queens of the Stone Age, alongside one of the most sought-after drummers in the scene, Joey Castillo – who has also sat behind the kit for Danzig and Eagles Of Death Metal.',
  location: '/band/1',
  youtube: 'https://www.youtube.com/watch?v=InoHn21PDoc'
})
createGalleryCard({
  image_path: '/fuManchu_everythingIsGo.jpg',
  album: 'The Action is Go',
  band: 'Fu Manchu',
  slug: 'fu-manchu',
  released: 'October 7, 1997',
  description: 'Fu Manchu originally formed in 1985 as a hardcore punk band called Virulence. The line up was vocalist Ken Pucci, guitarist Scott Hill, bassist Mark Abshire, and drummer Ruben Romano. In 1987 Abshire left the band and was replaced by Greg McCaughey. They recorded their debut LP If This Isn\'t a Dream... in 1988, which was released on Alchemy Records (1989). In 1990, Pucci left the band and was replaced by vocalist Glenn Chivens, and they changed their name to Fu Manchu.',
  location: '/band/2',
  youtube: 'https://www.youtube.com/watch?v=EG6F1m1Gi4k'
})
createGalleryCard({
  image_path: '/hotSnakes_jerichoSirens.jpg',
  album: 'Jericho Sirens',
  band: 'Hot Snakes',
  slug: 'hot-snakes',
  released: 'March 16, 2018',
  description: 'Hot Snakes are an American post-hardcore band led by Rick Froberg and John Reis, formed in 1999 in San Diego, California. Reis and Froberg had previously performed together in Pitchfork and Drive Like Jehu, after which Reis had found international success with Rocket from the Crypt. Hot Snakes disbanded in 2005 but reunited in 2011.  Although they share musical similarities with members\' previous outfits, Hot Snakes have a sound that is much more primal than that of Pitchfork, Drive Like Jehu or even Rocket from the Crypt. Reis and Froberg were also heavily influenced by bands such as The Wipers, Suicide, and Michael Yonkers Band, and these influences gave Hot Snakes a distinctive sound that has been described by one critic as "hardcore garage punk." The band\'s recordings and merchandise were conducted in a "Do it Yourself\" manner, with Froberg providing all of the artwork and Reis releasing the material via his Swami Records label.',
  location: '/band/3',
  youtube: 'https://www.youtube.com/watch?v=a7or6-7QRog'
})
createGalleryCard({
  image_path: '/kyuss_welcomeToSkyValley.jpg',
  album: 'Welcome to Sky Valley',
  band: 'Kyuss',
  slug: 'kyuss',
  released: 'June 28, 1994',
  description: 'Kyuss (/ˈkaɪ.əs/ KY-əs) was an American rock band, formed in Palm Desert, California, in 1987 by Josh Homme (guitar), John Garcia (vocals), Brant Bjork (drums) and Chris Cockrell (bass). After releasing an EP under the name Sons of Kyuss in 1990, the band shortened its name to Kyuss and recruited Nick Oliveri, replacing Cockrell as bassist. Over the next five years the band released four full-length bands, and one last split EP in 1997 as Kyuss and the newly formed Queens of the Stone Age. This tied up the loose ends of Kyuss and introduced the new band Queens of the Stone Age, which was initially composed entirely of former Kyuss members.',
  location: '/band/4',
  youtube: 'https://www.youtube.com/watch?v=9j3XdBdsUUI'
})
createGalleryCard({
  image_path: '/melvins_houdini.jpg',
  album: 'Houdini',
  band: 'Melvins',
  slug: 'melvins',
  released: 'September 21, 1993',
  description: 'The Melvins are an American rock band that formed in 1983 in Montesano, Washington. They have mostly performed as a trio, as well as a quartet with two drummers in recent years. Since 1984, vocalist and guitarist Buzz Osborne and drummer Dale Crover have been constant members. The band was named after a supervisor at a Thriftway in Montesano, Washington, where Osborne also worked as a clerk. "Melvin" was despised by other employees, and the band\'s members felt it to be an appropriately ridiculous name. Their early work was key to the development of both grunge and sludge metal.',
  location: '/band/5',
  youtube: 'https://www.youtube.com/watch?v=nZB3RgTEhrQ'
})
createGalleryCard({
  image_path: '/queensOfTheStoneAge_songsForTheDeaf.jpg',
  album: 'Song for the Deaf',
  band: 'Queens of the Stone Age',
  slug: 'queens-of-the-stone-age',
  released: 'August 27, 2002',
  description: 'Queens of the Stone Age are an American rock band formed in 1996 in Palm Desert, California. The band\'s line-up includes founder Josh Homme (lead vocals, guitar, piano), alongside band members Troy Van Leeuwen (guitar, lap steel, keyboard, percussion, backing vocals), Michael Shuman (bass guitar, keyboard, backing vocals), Dean Fertita (keyboards, guitar, percussion, backing vocals), and Jon Theodore (drums, percussion).',
  location: '/band/6',
  youtube: 'https://www.youtube.com/watch?v=tISadkQq_DI'
})
createGalleryCard({
  image_path: '/sleep_dopesmoker.jpg',
  album: 'Jerusalem',
  band: 'Sleep',
  slug: 'sleep',
  released: 'February 2, 1999',
  description: 'Sleep is an American doom metal power trio from San Jose, California. The band earned critical and record label attention early in its career. Critic Eduardo Rivadavia describes them as "perhaps the ultimate stoner rock band" and notes they exerted a strong influence on heavy metal in the 1990s. However, conflict with its record company contributed to Sleep\'s breakup by the end of the decade. The band reformed in 2009 and has played sporadic live dates internationally since. In 2018, Sleep released their fourth and comeback album, The Sciences, to critical acclaim.',
  location: '/band/7',
  youtube: 'https://www.youtube.com/watch?v=hIw7oeZKpZc'
})
createGalleryCard({
  image_path: '/theHeavyMinds_treasureCoast.jpg',
  album: 'Treasure Coast',
  band: 'The Heavy Minds',
  slug: 'the-heavy-minds',
  released: 'July 17, 2015',
  description: 'The Heavy Minds The Heavy Minds, based in Upper Austria, are a Psychedelic-Garage-Rock-Trio, playing a mixture of heavy, fuzzy riffs, dreamy melodies and spaced out solos, which is heavily influenced by music of the late 60\'s, early 70\'s, neo psychedelia stuff, Lo-Fi Garagerock and much more.',
  location: '/band/8',
  youtube: 'https://www.youtube.com/watch?v=2OpQxDyc2Nc'
})
createGalleryCard({
  image_path: '/theMarsVolta_francesTheMute.jpg',
  album: 'Frances the Mute',
  band: 'the Mars Volta',
  slug: 'the-mars-volta',
  released: 'March 1, 2005',
  description: 'The Mars Volta was an American progressive rock band from El Paso, Texas, formed in 2001. The band\'s final lineup consisted of Omar Rodríguez-López, Cedric Bixler-Zavala, Juan Alderete, Marcel Rodríguez-López and Deantoni Parks.',
  location: '/band/9',
  youtube: 'https://www.youtube.com/watch?v=smt34ZmeczQ'
})
createGalleryCard({
  image_path: '/truckfighters_gravityX.jpg',
  album: 'Gravity X',
  band: 'Truckfighters',
  slug: 'truckfighters',
  released: 'July 12, 2005',
  description: 'Truckfighters are a Swedish rock band from Örebro, formed in 2001',
  location: '/band/10',
  youtube: 'https://www.youtube.com/watch?v=ASrptIfKfc8'
})
createGalleryCard({
  image_path: '/twinPeak_twinPeak.jpg',
  album: 'Twin Speak',
  band: 'Twin Speak',
  slug: 'twin-speak',
  released: 'April 1, 2018',
  description: 'Long songs to help you unwind.',
  location: '/band/11',
  youtube: 'https://www.youtube.com/watch?v=nSvkmjfiWA8'
})

function createGalleryCard (band) {
  var id = Object.keys(bands).length
  bands[id] = band
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', function (request, response) {
  response.render('pages/index', {
    bands: bands
  })
})
app.get('/band/:id', function (request, response) {
  //response.json(bands[request.params.id])
  response.render('pages/band', {
    bands: bands[request.params.id]
  })
})

app.listen(port)
