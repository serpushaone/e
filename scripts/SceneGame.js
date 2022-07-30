class SceneGame extends Phaser.Scene{
	constructor(){
		super("playGame");
	}
	preload(){
        this.load.image('bgGame', 'assets/bgGame.png');
        this.load.image('talk', 'assets/talk.png');
        this.load.dragonbone("dragon", "assets/dragonbone/Dragon_tex.png", "assets/dragonbone/Dragon_tex.json", "assets/dragonbone/Dragon_ske.dbbin", null, null, { responseType: "arraybuffer" });
        this.load.image("talkTable", "assets/talkTable.png");
	}

	create(){
		this.cursorKeys = this.input.keyboard.createCursorKeys();
    	this.bgImage = this.add.image(640, 360, 'bgGame');
    	this.nameSally = this.add.image(320, 190, 'talk');
        this.dragon = this.add.armature("Dragon", "dragon");
        this.talkTable = this.add.image(640, 500, "talkTable");
        this.standBoolean = true;
        this.standSwitchBoolean = true;
        this.walkSwitchBoolean = false;
        this.dragon.x = 600;
        this.dragon.y = 460;
        this.dragon.scaleX = 0.5;
        this.dragon.scaleY = 0.5;
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.talkTableBoolean = true;
        this.dialogue1 = this.add.text(200,420,"А ты еще кто такой?", {font: "30px Arial", fill: "white"});
        this.dialogue2 = this.add.text(200,420,"Я дракончик! Твой глюк.", {font: "30px Arial", fill: "blue"});
        this.dialogue3 = this.add.text(200,420,"Круто! Можешь зарубиться в мою приставку или сходить во двор.", {font: "30px Arial", fill: "white"});
        this.dialogue1.visible=false;
        this.dialogue2.visible=false;
        this.dialogue3.visible=false;
        this.moveBlockBoolean = false;
    
    }

	update(){
		console.log("this.standBoolean " + this.standBoolean + ", this.standSwitchBoolean " + this.standSwitchBoolean + ", this.walkSwitchBoolean " + this.walkSwitchBoolean)
		if(this.cursorKeys.left.isDown){
			if(this.dragon.x>600){
				this.dragon.x-=2
			} else if(this.bgImage.x<1580 && !this.moveBlockBoolean){
				this.standBoolean = false;
        		this.dragon.scaleX = 0.5;
        		this.dragon.scaleY = 0.5;
        		this.bgImage.x+=2;
        		this.nameSally.x+=2;
			} else {
        		this.dragon.x-=2;
        		if(this.dragon.x<256){
        			this.walkSwitchBoolean=true;
        			this.scene.start("playGameOutside");
        		}
        	}
		} else if(this.cursorKeys.right.isDown){
			if(this.dragon.x<600){
				this.dragon.x+=2
			} else if(this.bgImage.x>-296 && !this.moveBlockBoolean){
				this.standBoolean = false;
        		this.dragon.scaleX = -0.5;
        		this.dragon.scaleY = 0.5;
        		this.bgImage.x-=2;
        		this.nameSally.x-=2;
        	} else {
        		this.dragon.x+=2;
        		if(this.dragon.x>950){
        			this.scene.start("playSnakeGame");
        		}
        	}
		} else {
			this.standBoolean = true;
		}
		if(this.standBoolean){
			if(this.standSwitchBoolean){
				console.log("Stand")
				this.standSwitchBoolean=false;
				this.walkSwitchBoolean=true;
				this.dragon.animation.play("stand");
			}
		} else {
			if(this.walkSwitchBoolean){
				console.log("Stand")
				this.walkSwitchBoolean=false;
				this.standSwitchBoolean=true;
				this.dragon.animation.play("walk");
			}
		}
		if(this.nameSally.x>=364&&this.nameSally.x<=804){
			this.nameSally.visible=true;
		} else {
			this.nameSally.visible=false;
			this.talkTable.visible=false;
		}
		if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
        	if(this.nameSally.x>=364&&this.nameSally.x<=804){
        		if(this.talkTableBoolean){
        			this.moveBlockBoolean=true;
        			this.dialogue1.visible=true;
        			this.talkTable.visible=true;
        			this.talkTableBoolean = false;
        		} else if(this.dialogue1.visible){
        			this.dialogue1.visible=false;
        			this.dialogue2.visible=true;
        		} else if(this.dialogue2.visible){
        			this.dialogue2.visible=false;
        			this.dialogue3.visible=true;
        		} else if(this.dialogue3.visible){
        			this.moveBlockBoolean=false;
        			this.dialogue3.visible=false;
        			this.talkTable.visible=false;
        			this.talkTableBoolean=true;
        		}
			}
    	}
	}
}