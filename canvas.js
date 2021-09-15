let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let context = canvas.getContext("2d");

const bg = new Background('sprites/bg/jungle.jpg', canvas.width, canvas.height);
const player = new Player(0, canvas.height*0.67)

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    
    // background
    if (!player.isDead && player.isRight) {
        bg.update();
    }

    bg.draw();

    // player
    // if (player.x > (canvas.width*0.5)) {
    //     player.isDead = true;
    //     player.update('dead')
    //     player.draw('dead')
    // }
                   
                    if (player.isRight && !player.isDead) {
                        player.update('walk')
                        player.draw('walk')
                    }
                    else if (player.isLeft && !player.isDead) {
                        player.update('leftwalk')
                        player.draw('leftwalk')
                        
                    }

                    else if (!player.isRight && !player.isLeft && !player.isDead && !player.isAttack) {
                        player.update('idle')
                        player.draw('idle')


                    }


                    else if (!player.isRight && !player.isLeft && !player.isDead && player.isAttack) {
                        player.update('attack')    
                        player.draw('attack')

                    } 




                    requestAnimationFrame(animate);
                }

                animate()


                document.addEventListener('keydown', key_down_listener)
                document.addEventListener('keyup', key_up_listener)

                function key_down_listener(event) {
                    console.log('hold')
                    player.move("key_down", event.key);
                }

                function key_up_listener(event) {
                    console.log('release')
                    player.move("key_up", event.key)
                }











//et arr = [1,2,3,4,5]
//console.log(arr[2]) // 3

//  JSON - JavaScript Object Notation
// Java - hashmap
// Python - Dictionary

//let grade = 76;
//let output = "";

//if (grade <75) {
//      output = "You Failed"
//}

//else{
  //output = "You Passed"
//}


//output = (grade <75) ? "You Failed" : "You Passed";
//console.log(output)





    //  JSON
    // {key : value}
  //       let obj = 
   //          {
     //             1 : 1,
      //            2 : (grade <75) ? "You Failed" : "You Passed",
      //            3 : 'tweet',
       //           4 : [1,2,3,4],
       //           5 :{
       //             'new' : 'json'
       //            }
       //        }
//
       //     console.log(obj[2])
//

