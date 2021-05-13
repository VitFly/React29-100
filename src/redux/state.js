

   let state = {
     StatePosts :{
      poste : [
        {id:1, comment:'Hey man, how are you?', likecounts:' 220 likes!' },
        {id:2, comment:'Hey bro, i am okay', likecounts:' 170 likes!'},
        {id:3, comment:'Saruman' , likecounts:' 180 likes!'},
        {id:4, comment:'Gandalfs Gray!', likecounts: ' 290 likes' }
        ]
     },
     StateDialogs :{
      dialog: [
        {id:1, name:'Vitalik' },
        {id:2, name:'Sasha' },
        {id:3, name:'Oleg' },
        {id:4, name:'Vitya' }
      ],
      message: [
        {id:1, message:'Hello everybody' },
        {id:2, message:'this is 25th lesson of react way Samurai!!' },
        {id:3, message:'I am going up!!!' },
        {id:4, message:'And weell' }
        ]
     }
   };

 export let addPost = (postMessage) => {
     let newPost = {
       id: 5, 
       comment: postMessage,
       likecounts: 0
     };
     state.StatePosts.poste.push(newPost);
   }

   export default state;