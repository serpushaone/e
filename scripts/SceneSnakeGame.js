class SceneSnakeGame extends Phaser.Scene{
	constructor(){
		super("playSnakeGame");
	}

	create(){
		this.add.text(200,420,"Недоделанная часть. Нажмите на пробел, чтобы вернуться обратно");
		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	}

	update(){
		if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
			this.scene.start("playGame");
		}
	}
}