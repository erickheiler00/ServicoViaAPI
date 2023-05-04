from flask import Flask, jsonify

# iniciar o servidor Flask:
# python app.py

# Cria uma instância do Flask
app = Flask(__name__)

# Define uma rota para a página inicial
@app.route('/')
def index():
    return 'Hello World!'

# Define uma rota para a API
@app.route('/api/elevarAoQuadrado/<int:num>')
def quadrado(num):
    result = num ** 2
    return jsonify({'Elevado ao quadrado': result})

# Executa 
if __name__ == '__main__':
    app.run(debug=True)

