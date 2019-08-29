define(
  'model', [
    'jquery',
    'tmpl'
  ],
  function() {
    return {
      model: function(data) {
        var self = this; // конструктор класса
        self.data = data;
        self.addItem = function(item) {
          if (item.length === 0) { //проверка на корректность входящих данных
            return;
          }
          if (item.indexOf(' ') === 0) {
            return;
          }
          self.data.push(item);
          return self.data; //обновлённые данные возвращаем в массив
        };
        self.removeItem = function(item) {
          var index = self.data.indexOf(item); //ищем совпадение строк в массиве
          if (index === -1) {
            return;
          }
          self.data.splice(index, 1); // удаляет элемент и схлопывает массив
          return self.data; // сохраням контекст
        };

        self.editItem = function(index, editedItem) {
          self.data[index] = editedItem;
          if (editedItem.length === 0) {
            return self.data.splice(index, 1);
          }
          if (editedItem.indexOf(' ') === 0) {
            return self.data.splice(index, 1);
          }
          return self.data;
        };
      }
    };
  }
);
