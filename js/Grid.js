/**
 * Created by Marcus on 21/06/2017.
 */
function Grid(){
    this.grid = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
        [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1],
        [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    this.qtd_item_linha  = this.grid.length;
    this.qtd_item_coluna = this.grid[0].length;
    var img_piso = new Image();
    img_piso.src = './img/piso.png';
    this.piso = img_piso;

    var vida = new Image();
    vida.src = './img/vida.png';
    this.vida = vida;

    this.temRecarga = false;
    this.posicao_x_recarga = null;
    this.posicao_y_recarga = null;
}

Grid.prototype.desenha = function(contexto){
    for(var x = 0; x < this.qtd_item_linha; x++){
        for(var y = 0; y < this.qtd_item_coluna; y++){
            if(this.grid[x][y] == 1){
                contexto.drawImage(this.piso,y * 32, x * 32);
            }
            if(this.grid[x][y] == 2){
                contexto.drawImage(this.vida,y * 32, x * 32);
                console.log("desenha");
            }
        }
    }
}

Grid.prototype.andar = function (player) {

    var posicao_x_antes  = Math.floor((player.x - 16) / 32);
    var posicao_x_depois = Math.floor((player.x + 16) / 32);
    var posicao_y_antes  = Math.floor((player.y - 16) / 32);
    var posicao_y_depois = Math.floor((player.y + 16) / 32);

    if(player.direcao == 4 && (this.grid[posicao_y_antes][posicao_x_antes] === 1 || this.grid[posicao_y_depois][posicao_x_antes] === 1)){
        player.direcao = 0;
    }else if(player.direcao == 8 && (this.grid[posicao_y_antes][posicao_x_antes] === 1 || this.grid[posicao_y_antes][posicao_x_depois] === 1)){
        player.direcao = 0;
    }else if(player.direcao == 6 && (this.grid[posicao_y_depois][posicao_x_depois] === 1 || this.grid[posicao_y_antes][posicao_x_depois] === 1)){
        player.direcao = 0;
    }else if(player.direcao == 2 && (this.grid[posicao_y_depois][posicao_x_depois] === 1 || this.grid[posicao_y_depois][posicao_x_antes] === 1)){
        player.direcao = 0;
    }
    if(this.temRecarga && Math.floor(player.y/32)== this.posicao_x_recarga && Math.floor(player.x/32) == this.posicao_y_recarga){
        player.balas = 10;
        linhas = new Array();
        for(i=0; i<this.qtd_item_linha; i++){
            colunas = new Array();
            for(j=0;j<this.qtd_item_coluna; j++){
                if(this.posicao_x_recarga == i && this.posicao_y_recarga == j){
                    colunas.push(0);
                }else{
                    colunas.push(this.grid[i][j]);
                }

            }
            linhas.push(colunas)
        }
        this.grid = linhas;
        this.posicao_x_recarga = null;
        this.posicao_y_recarga = null;
        this.temRecarga = false;
    }
}

Grid.prototype.colisaoTiro = function(tiro){
    var posicao_x_antes  = Math.floor((tiro.x - 5) / 32);
    var posicao_x_depois = Math.floor((tiro.x + 5) / 32);
    var posicao_y_antes  = Math.floor((tiro.y - 5) / 32);
    var posicao_y_depois = Math.floor((tiro.y + 5) / 32);

    if(tiro.direcao == 4 && (this.grid[posicao_y_antes][posicao_x_antes] === 1 || this.grid[posicao_y_depois][posicao_x_antes] === 1)){
        return true;
    }else if(tiro.direcao == 8 && (this.grid[posicao_y_antes][posicao_x_antes] === 1 || this.grid[posicao_y_antes][posicao_x_depois] === 1)){
        return true;
    }else if(tiro.direcao == 6 && (this.grid[posicao_y_depois][posicao_x_depois] === 1 || this.grid[posicao_y_antes][posicao_x_depois] === 1)){
        return true;
    }else if(tiro.direcao == 2 && (this.grid[posicao_y_depois][posicao_x_depois] === 1 || this.grid[posicao_y_depois][posicao_x_antes] === 1)){
        return true;
    }
    return false;
}

Grid.prototype.sorteiaRecarga = function(){
    var x = Math.floor(Math.random() * this.qtd_item_linha);
    var y = Math.floor(Math.random() * this.qtd_item_coluna);

    if(this.grid[x][y] == 0){
        linhas = new Array();
        for(i=0; i<this.qtd_item_linha; i++){
            colunas = new Array();
            for(j=0;j<this.qtd_item_coluna; j++){
               if(x == i && y == j){
                   this.posicao_x_recarga = i;
                   this.posicao_y_recarga = j;
                   this.temRecarga = true;
                   colunas.push(2);
               }else{
                   colunas.push(this.grid[i][j]);
               }

            }
            linhas.push(colunas)
        }
        this.grid = linhas;
    }else{
        console.log("chamou o sorteia de novo");
        this.sorteiaRecarga();
    }
}