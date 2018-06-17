export class Game {
    constructor(gameAdmin) {
        this.gameAdmin = gameAdmin;   
        this.gameID=gameAdmin;
    }

    getGameID(){
      return this.gameID;
    }
}