from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/two')
def mymethod():
    return render_template('two.html')


@app.route('/', methods=['POST'])
def getValue():
    prompt = request.form['text-input']
    print(prompt)
    return render_template('index.html')


@app.route('/two', methods=['POST'])
def getValue2():
    prompt = request.form['text-input']
    print(prompt)
    return render_template('two.html')


if __name__ == '__main__':
    app.run()
