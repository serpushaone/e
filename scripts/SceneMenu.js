class SceneMenu extends Phaser.Scene {
	constructor(){
		super("menu");
	}

    preload ()
    {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('bNewGameRU', 'assets/button1_RU.png');
        this.load.image('bSettingsRU', 'assets/button2_RU.png');
        this.load.image('bNewGameEN', 'assets/button1_EN.png');
        this.load.image('bSettingsEN', 'assets/button2_EN.png');
    }

	create(){
    	this.add.image(640, 360, 'bg');
        if(langRU){
            this.add.image(1050, 300, 'bNewGameRU');
            this.add.image(1050, 420, 'bSettingsRU');
        } else {
            this.add.image(1050, 300, 'bNewGameEN');
            this.add.image(1050, 420, 'bSettingsEN');
        }
		this.cursor = this.input.activePointer;
        this.input.on('pointerdown', function(pointer){
            if((this.cursor.x<622+650&&this.cursor.y>264)&&(this.cursor.x>178+650&&this.cursor.y<336)){
                
                this.scene.start("playGame");
            } else if((this.cursor.x<622+650&&this.cursor.y>384)&&(this.cursor.x>178+650&&this.cursor.y<456)){
                
                console.log("sounds " + soundOn);
                this.scene.start("settings");
            }
                
        }, this);
	}
    update(){
    }
}