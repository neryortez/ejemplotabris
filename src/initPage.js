


module.exports = function (navView) {
  var page = new tabris.Page({}).appendTo(navView);

  var actuadores = [
    "Luz sala",
    "Luz cuarto (1)",
    "Luz cuarto (2)"
  ].map(mapear);

  function mapear(element) {
      return { nombre: element };
  }

  var actuadores = new tabris.CollectionView({
    left: 0, top: 0, right: 0, bottom: 0,
    items: actuadores,
    itemHeight: 50,
    initializeCell: function(cell){
      var nombre = new tabris.TextView({
        centerX: 0, top: 0,
        font: '24px'
      }).appendTo(cell);

      var switchActuador = new tabris.Switch({
        left: 'prev() 10'
      }).appendTo(cell);

      cell.on('change:item', function({value: actuador}){
        nombre.text = actuador.nombre;
      });
    }
  }).appendTo(page);

  actuadores.insert(["Uno más"].map(mapear));



};
