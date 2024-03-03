from flask import Flask, jsonify, request
from flask_cors import CORS

class Jogo:
    def __init__(self, nome, categoria, console):
        self.nome=nome
        self.categoria=categoria
        self.console=console

app = Flask(__name__)
CORS(app)

jogo1 = Jogo('Tetris', 'Puzzle', 'Atari')
jogo2 = Jogo('God of War', 'Rack n Slash', 'PS2')
jogo3 = Jogo('Mortal Kombat', 'Luta', 'PS2')
jogo4 = Jogo('Minecraft', 'Sobrevivencia','PC')
jogo5 = Jogo('Grand Theft Auto 5', 'Ação','PS3')
jogo6 = Jogo('Halo', 'FPS','Xbox')
jogo7 = Jogo('Half-Life: Alyx', 'FPS','PCVR')
jogo8 = Jogo('Enduro','Corrida','Atari')
listaJogos = [vars(jogo) for jogo in [jogo1, jogo2, jogo3, jogo4, jogo5, jogo6, jogo7, jogo8]]

@app.route('/listaJogos')
def lista():
    return jsonify(jogos=listaJogos)

@app.route('/criaJogos', methods=['POST',])
def criar():
    content = request.get_json()
    nome = content.get('nome')
    categoria = content.get('categoria')
    console = content.get('console')
    jogoNovo = Jogo(nome, categoria, console)
    listaJogos.append(vars(jogoNovo))
    return jsonify({'mensagem': 'Jogo criado com sucesso!', 'jogo': vars(jogoNovo)}), 201

app.run(debug=True)