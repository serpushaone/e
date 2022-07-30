class SceneGameOutside extends Phaser.Scene{
	constructor(){
		super("playGameOutside");
	}

	preload(){
        this.load.image('bgGameStreet', 'assets/bgGameStreet.png');
		this.load.dragonbone("dragon2", "assets/dragonbone/Dragon_tex.png", "assets/dragonbone/Dragon_tex.json", "assets/dragonbone/Dragon_ske.dbbin", null, null, { responseType: "arraybuffer" });
    }

	create(){
		this.cursorKeys = this.input.keyboard.createCursorKeys()
    	this.bgImage = this.add.image(640, 360, 'bgGameStreet');;
        this.dragon = this.add.armature("Dragon", "dragon2");
        this.dragon.x = 600;
        this.dragon.y = 460;
        this.dragon.scaleX = 0.5;
        this.dragon.scaleY = 0.5;
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.standBoolean = true;
        this.standSwitchBoolean = false;
        this.walkSwitchBoolean = true;
	}

	update(){
		if(this.cursorKeys.left.isDown){
			if(this.dragon.x>108){
				this.standBoolean = false;
        		this.dragon.scaleX = 0.5;
        		this.dragon.scaleY = 0.5;
				this.dragon.x-=2;
			}
		} else if(this.cursorKeys.right.isDown){
			if(this.dragon.x<=1114){
				this.standBoolean = false;
        		this.dragon.scaleX = -0.5;
        		this.dragon.scaleY = 0.5;
				this.dragon.x+=2;
				if(this.dragon.x>=1114){
					this.scene.start("playGame");
				}
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
	}
}