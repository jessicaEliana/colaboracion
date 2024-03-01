from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        num1 = int(request.form['num1'])
        num2 = int(request.form['num2'])
        resultado = num1 + num2
        return render_template('resultado.html', resultado=resultado)
    return render_template('formulario.html')

if __name__ == '__main__':
    app.run(debug=True)
