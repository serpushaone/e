class SceneSettings extends Phaser.Scene{
	constructor(){
		super("settings");
	}

    preload ()
    {
        this.load.image('backgroundSettings', 'assets/backgroundSettings.png');
        this.load.image('b', 'assets/button.png');
        this.load.image('bBack', 'assets/button3.png');
    }

	create(){
    	this.add.image(400, 300, 'backgroundSettings');
    	this.add.image(400, 300, 'b');
    	this.add.image(400, 500, 'bBack');
		this.cursor = this.input.activePointer;
		this.textSetting = this.add.text(305, 275, "NO SOUND", {font: "50px Arial", fill: "black"});
		this.soundBoolean=false;
    	this.input.on('pointerdown', function(pointer){
    		if((this.cursor.x<622&&this.cursor.y>264)&&(this.cursor.x>178&&this.cursor.y<336)){
            	if(!this.soundBoolean){
    		console.log('Hello!');
            		this.soundBoolean=true;
                	this.textSetting.setText("ADD SOUND");
            	} else if(this.soundBoolean){
            		this.soundBoolean=false;
                	this.textSetting.setText("NO SOUND");
            	}
            } else if((this.cursor.x<622&&this.cursor.y>464)&&(this.cursor.x>178&&this.cursor.y<536)){
            	this.scene.start("menu");
            }
    	}, this);
	}
    update(){
    }
}