class SceneSettings extends Phaser.Scene{
	constructor(){
		super("settings");
	}

    preload ()
    {
        this.load.image('bg2', 'assets/bg2.png');
        this.load.image('bLangEN', 'assets/button3_EN.png');
        this.load.image('bLangRU', 'assets/button3_RU.png');
        this.load.image('bSoundOnEN', 'assets/button4-1_EN.png');
        this.load.image('bSoundOffEN', 'assets/button4-2_EN.png');
        this.load.image('bSoundOnRU', 'assets/button4-1_RU.png');
        this.load.image('bSoundOffRU', 'assets/button4-2_RU.png');
        this.load.image('bBackEN', 'assets/button5_EN.png');
        this.load.image('bBackRU', 'assets/button5_RU.png');
    }

	create(){
    	this.add.image(640, 360, 'bg2');
    	if(langRU){
    		this.buttonLang = this.add.image(1050, 200, 'bLangRU');
    		if(soundOn){
    			this.buttonSoundOn = this.add.image(1050, 300, 'bSoundOnRU');
    		} else {
    			this.buttonSoundOff = this.add.image(1050, 300, 'bSoundOffRU');
    		}
    		this.buttonBack = this.add.image(1050, 500, 'bBackRU');
    	} else {
    		this.buttonLang = this.add.image(1050, 200, 'bLangEN');
    		if(soundOn){
    			this.buttonSoundOn = this.add.image(1050, 300, 'bSoundOnEN');
    		} else {
    			this.buttonSoundOff = this.add.image(1050, 300, 'bSoundOffEN');
    		}
    		this.buttonBack = this.add.image(1050, 500, 'bBackEN');
    	}
		this.cursor = this.input.activePointer;
    	this.input.on('pointerdown', function(pointer){
    		if((this.cursor.x<1072&&this.cursor.y>164)&&(this.cursor.x>828&&this.cursor.y<236)){
            	if(!langRU){
            		langRU=true;
    				this.buttonLang = this.add.image(1050, 200, 'bLangRU');
    				if(soundOn){
    					this.buttonSoundOn = this.add.image(1050, 300, 'bSoundOnRU');
    				} else {
    					this.buttonSoundOff = this.add.image(1050, 300, 'bSoundOffRU');
    				}
    				this.buttonBack = this.add.image(1050, 500, 'bBackRU');
            	} else if(langRU){
            		langRU=false;
    				this.buttonLang = this.add.image(1050, 200, 'bLangEN');
    				if(soundOn){
    					this.buttonSoundOn = this.add.image(1050, 300, 'bSoundOnEN');
    				} else {
    					this.buttonSoundOff = this.add.image(1050, 300, 'bSoundOffEN');
    				}
    				this.buttonBack = this.add.image(1050, 500, 'bBackEN');
            	}
            } else if((this.cursor.x<1072&&this.cursor.y>264)&&(this.cursor.x>828&&this.cursor.y<336)) {
            	if(langRU){
            		if(soundOn){
            			soundOn=false;
    					this.buttonSoundOff = this.add.image(1050, 300, 'bSoundOffRU');
    					console.log("sounds1 " + soundOn);
            		} else {
            			soundOn=true;
    					this.buttonSoundOn = this.add.image(1050, 300, 'bSoundOnRU');
    					console.log("sounds1 " + soundOn);
            		}
            	} else {
            		if(soundOn){
            			soundOn=false;
    					this.buttonSoundOff = this.add.image(1050, 300, 'bSoundOffEN');
    					console.log("sounds1 " + soundOn);
            		} else {
            			soundOn=true;
    					this.buttonSoundOn = this.add.image(1050, 300, 'bSoundOnEN');
    					console.log("sounds1 " + soundOn);
            		}
            	}
            } else if((this.cursor.x<1072&&this.cursor.y>464)&&(this.cursor.x>828&&this.cursor.y<536)){
            	console.log("sounds " + soundOn);
            	this.scene.start("menu");
            }
    	}, this);
	}
    update(){
    }
}