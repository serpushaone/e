class SceneMenu extends Phaser.Scene {
	constructor(){
		super("menu");
	}

    preload ()
    {
        this.load.image('background', 'assets/background.png');
        this.load.image('bNewGame', 'assets/button1.png');
        this.load.image('bSettings', 'assets/button2.png');
    }

	create(){
    	this.add.image(400, 300, 'background');
    	this.add.image(400, 300, 'bNewGame');
    	this.add.image(400, 420, 'bSettings');
		this.cursor = this.input.activePointer;
        this.input.on('pointerdown', function(pointer){
            
            if((this.cursor.x<622&&this.cursor.y>264)&&(this.cursor.x>178&&this.cursor.y<336)){
                this.scene.start("playGame");
            } else if((this.cursor.x<622&&this.cursor.y>384)&&(this.cursor.x>178&&this.cursor.y<456)){
                this.scene.start("settings");
            }
                
        }, this);
	}
    update(){
    }
}