const initPage = require('./initPage');

module.exports = function(navView){
  var loginPage = new tabris.Page({}).appendTo(navView);

  var scrollView = new tabris.ScrollView({
    left: 0, top: 0, right: 0, bottom: 0,
    background: '#ff0'
  }).appendTo(loginPage);


  const {Button, TextView, ui} = require('tabris');
  const texto = 'Tabris.js rocks!';

  function ingresar() {
    if (textinput.text.length < 5) {
      textView.text = 'Ingrese un código válido';
      return;
    }
    navView.pages().dispose();
    initPage(navView);
  };

  let logo = new tabris.ImageView({
      centerX: 0, top: 50,
      image: {src: 'images/altechicon.jpg'},
      background: '#aaaaaa',
      scaleMode: 'fit'
    }).appendTo(scrollView);

  let textinput = new tabris.TextInput({
      centerX: 0, top: 'prev() 10',
      message: 'Ingrese su codigo de acceso'
    }).on('accept', ingresar).appendTo(scrollView);

  let button = new Button({
    top: 'prev() 10', centerX: 0,
    text: 'Ingresar'
  }).appendTo(scrollView);

  let textView = new TextView({
    centerX: 0, top: [button, 50],
    font: '24px',
    textColor: 'red',
  }).appendTo(scrollView);


  button.on('select', ingresar);
}
