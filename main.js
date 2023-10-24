const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images.dinosaurpictures.org/Suzhousaurus-570x355_f691.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "http://images.dinosaurpictures.org/dacentrurus_by_pauloomarcio-d328tw2_edd4.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://images.dinosaurpictures.org/Isanosaurus-commander-salamander_abdc.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://images.dinosaurpictures.org/herrerasaurus-ischigualastensis-sergey-krasovskiy_9e39.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "http://images.dinosaurpictures.org/beipiaosaurus_inexpectus_by_durbed-d4s4buz_bbd0.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "http://images.dinosaurpictures.org/omeisaurus-tianfuensis-an-euhelopus-roman-garcia-mora_bd45.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnPM0I4AvQrL3XOOuzsqkfZnIN_QLjUHdtHCIxcREqvN7YoqX2RnUxw4wfV13ZT6gabM&usqp=CAU"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXyfzjZgjTptYMiDSUgBjKRqYBOv4aq_Hcg&usqp=CAU"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDvW9VQg6_pAqfbNoIzcFQJ5ltNfUtunn2w&usqp=CAU"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE6ObD-r8skh9ZdYnsxastNIw46gnXXhIWA&usqp=CAU"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://images.dinosaurpictures.org/altirhinus_kurzanovi_by_dibgd-d7cvxcl-700x391_cd77.jpg"
    }
  ];

const renderToDom = (array) => {

  let domString = "";
  for(object of array) {
    domString += `<div class="card element text-center myCardStyle" style="width: 20rem;">
    <div class="card-header"><h5 class="card-title">${object.name}</h5></div>
    <img src="${object.imageUrl}" class="card-img-top img" alt="...">
    <div class="card-body">        
        <p class="card-text">color: ${object.color}</p>
        <p>special skill: ${object.specialSkill}</p>        
        <button id="delete--${object.id}" onclick="
        ">DELETE</button>
      </div>
      <div class="card-footer ${object.type}"><p>${object.type}</p></div>
      </div>`
  };
  const app = document.querySelector("#app");
  app.innerHTML = domString;
};

const filter = (animalType) => {
  let petArray = [];
  if(animalType === "all"){
    return renderToDom(pets);
  }else{
    for(pet of pets){
      if(pet.type === animalType){
        petArray.unshift(pet);
      }
    }
  }
  renderToDom(petArray);
}

const events = () => {
  const app = document.querySelector("#app");
  const form = document.querySelector("form")
  const filterButtons = document.querySelector("#filter-buttons");

  console.log(filterButtons);

  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event);
    console.log("we should be about to make a new card pet object")
  
      const newPetObj ={
        id: pets.length + 1,
        name: document.querySelector("#nameOnCard").value,
        color: document.querySelector("#colorOnCard").value,
        specialSkill: document.querySelector("#skillOnCard").value,
        type: document.querySelector('input[name="radioType"]:checked').value,     //could be .id if id is a vlaid delinatior
        imageUrl: document.querySelector("#imgOnCard").value, 
      }
      console.log(newPetObj);
      pets.unshift(newPetObj);
      renderToDom(pets);
      form.reset();
    }
  );
  
  app.addEventListener("click",  (event) => {
    console.log(event);
    console.log("delete function, we are in -batman voice");
    
    if(event.target.id.includes("delete")){
      //remove pet once we get the right button
      //determine the correct object, get id
      const [,id] = event.target.id.split("--");
      //identify where in the array is it
      const index = pets.findIndex(obj => obj.id === Number(id));
      console.log(index);
      //re-render with the array
      pets.splice(index, 1);
      //render with removal in place
      renderToDom(pets);
    }
  })

  // event listeners for filter buttons
  filterButtons.addEventListener("click", (event) => {
    
    const id = event.target.id;
    console.log(event, id);

    if(id === "all"){
      renderToDom(pets);
    }else if(id === "cat" || id === "dog" || id === "dino"){
      filter(id);
      console.log("here is your fucking id "+id+" dumbass")
    }
  })
}

const startApp = () => {
  renderToDom(pets);
  events();
}

startApp();
