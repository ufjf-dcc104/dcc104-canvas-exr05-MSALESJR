/**
 * Created by Marcus on 21/06/2017.
 */
function Level() {
    this.grid = null;
    this.player_1 = null;
    this.player_2 = null;
}

Level.prototype.init = function (grid, player_1, player_2) {
    this.grid = grid;
    this.player_1 = player_1;
    this.player_2 = player_2;
}

Level.prototype.desenha = function (contexto, dt) {
    this.grid.desenha(contexto);
    this.player_1.mover(dt);
    this.player_1.desenha(contexto);
    this.player_2.mover(dt);
    this.player_2.desenha(contexto);
}
