class SceneGame extends Phaser.Scene{
	constructor(){
		super("playGame");
	}
	preload(){
        this.load.image('bgGame', 'assets/bgGame.png');
        this.load.image('talk', 'assets/talk.png');
        this.load.dragonbone("dragon", "assets/dragonbone/Dragon_tex.png", "assets/dragonbone/Dragon_tex.json", "assets/dragonbone/Dragon_ske.dbbin", null, null, { responseType: "arraybuffer" });
	}

	create(){
		this.cursorKeys = this.input.keyboard.createCursorKeys();
    	this.bgImage = this.add.image(640, 360, 'bgGame');
    	this.nameSally = this.add.image(320, 190, 'talk');
        this.dragon = this.add.armature("Dragon", "dragon");
        this.standBoolean = true;
        this.standSwitchBoolean = true;
        this.walkSwitchBoolean = false;
        this.dragon.x = 600;
        this.dragon.y = 460;
        this.dragon.scaleX = 0.5;
        this.dragon.scaleY = 0.5;
	}

	update(){
		if(this.cursorKeys.left.isDown){
			if(this.bgImage.x<1580){
				this.standBoolean = false;
        		this.dragon.scaleX = 0.5;
        		this.dragon.scaleY = 0.5;
        		this.bgImage.x+=2;
        		this.nameSally.x+=2;
        		console.log(this.nameSally.x);
			}
		} else if(this.cursorKeys.right.isDown){
			if(this.bgImage.x>-296){
				this.standBoolean = false;
        		this.dragon.scaleX = -0.5;
        		this.dragon.scaleY = 0.5;
        		this.bgImage.x-=2;
        		this.nameSally.x-=2;
        		console.log(this.nameSally.x);
        	}
		} else {
			this.standBoolean = true;
		}
		if(this.standBoolean){
			if(this.standSwitchBoolean){
				this.standSwitchBoolean=false;
				this.walkSwitchBoolean=true;
				this.dragon.animation.play("stand");
			}
		} else {
			if(this.walkSwitchBoolean){
				this.walkSwitchBoolean=false;
				this.standSwitchBoolean=true;
				this.dragon.animation.play("walk");
			}
		}
		if(this.nameSally.x>=364&&this.nameSally.x<=804){
			this.nameSally.visible=true;
		} else {
			this.nameSally.visible=false;
		}
	}
}