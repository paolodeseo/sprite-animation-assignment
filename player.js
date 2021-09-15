class Player {
    constructor(posX, posY) {
        this.spritesheet_walk = new Image();
        this.spritesheet_walk.src = "sprites/knight/run/spritesheet.png";

        this.spritesheet_leftwalk = new Image();
        this.spritesheet_leftwalk.src = "sprites/knight/run/leftwalk.png";

        this.spritesheet_dead = new Image();
        this.spritesheet_dead.src = "sprites/knight/dead/spritesheet.png";

        this.spritesheet_idle = new Image();
        this.spritesheet_idle.src = "sprites/knight/idle/spritesheet.png";

        this.spritesheet_attack = new Image();
        //this.spritesheet_attack.src = "sprites/knight/attack/spritesheet.png";
        this.spritesheet_attack.src = "sprites/knight/attack/spritesheet.png";

        this.x = posX;
        this.y = posY;

        this.gameFrame = 0;
        this.frameSpeed = 2;

        //this.isMoving = false;
        this.isDead = false;
        this.isAttack = false;

        this.isLeft = false;
        this.isRight = false;



        this.actions = {
            'walk' : {
                'spritesheet' : this.spritesheet_walk,
                'frame_counter' : 0,
                'spriteWidth' : 589,
                'speed' : 5,
                
            },
            
            'idle' : {
                'spritesheet' : this.spritesheet_idle,
                'frame_counter' : 0,
                'spriteWidth' : 589,
               
            },

            'dead' : {
                'spritesheet' : this.spritesheet_dead,
                'frame_counter' : 0,
                'spriteWidth' : 946
            },
            'attack' : {
                'spritesheet' : this.spritesheet_attack,
                'frameCounter' : 0,
                'spriteWidth' : 589,
                'speed' : 5

            },
            'leftwalk' : {
                'spritesheet' : this.spritesheet_leftwalk,
                'frame_counter' : 0,
                'spriteWidth' : 589,
                'speed' : 5,
            },
        
        }
    }

    move(keyType, key) {
        if (keyType == "key_down") {
           
            if (key == "ArrowRight" && !this.isDead && this.x < (canvas.width/1.1)) {
                this.x = this.x + this.actions['walk'].speed;
                // this.isMoving = true;
                this.isRight = true;
            }
    
            else if (key == "ArrowLeft" && !this.isDead) {
                this.x = this.x - this.actions['leftwalk'].speed;
                //this.isMoving = true;
                this.isLeft = true;
            }
            // else if (key == "ArrowDown" && !this.isDead && !this.isRight && !this.isLeft) {
            //     this.isAttack = true;
            //     this.actions['attack']
            // }

        }
        
        else if (keyType == "key_up") {
            this.isLeft = false;
            this.isRight = false;
            this.isAttack = false;

        this.actions['idle']

        }
    }

    update(action) {
        // check if action exists in JSON
        // if (action in this.actions) {
        //     this.actions[action].frame_counter++;

        //     if (this.actions[action].frame_counter > this.actions[action].frame_limit) {
        //         this.actions[action].frame_counter = 0;
        //     }
        // }

        if (this.gameFrame % this.frameSpeed == 0) {
            if (action == "walk") {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 9) {
                    this.actions[action].frame_counter = 0;
                }
            }

            else if (action == "leftwalk") {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 9) {
                    this.actions[action].frame_counter = 0;
                }
            }
    
            else if (action == "idle") {
                this.actions[action].frame_counter++;
    
                if (this.actions[action].frame_counter > 9) {
                    this.actions[action].frame_counter = 0;
                }
            }

            else if (action == "dead") {
                this.actions[action].frame_counter++;

                if (this.actions[action].frame_counter > 9) {
                    this.actions[action].frame_counter = 9;
                }
            }

            else if (action == "attack") {
                this.actions[action].frame_counter++;

                if (this.actions[action].frame_counter > 9) {
                    this.actions[action].frame_counter = 0;
                }

            }

            
           
        }


        this.gameFrame++;
    }

    draw(action) {
        // drawImage(image object, x-coord, y-coord, width, height)
        // context.drawImage(this.actions[action].spritesheet, this.x, this.y, canvas.width, canvas.height*0.2)

        context.drawImage(
            this.actions[action].spritesheet, 
            this.actions[action].frame_counter*this.actions[action].spriteWidth, 
            0, 
            this.actions[action].spriteWidth, 
            this.actions[action].spritesheet.height, 
            this.x, 
            this.y, 
            canvas.width*0.08, 
            canvas.height*0.2
        )
    }
}