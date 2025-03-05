const stock = {
    items: [
      { name: "milk", price: 5, quantity: 50 }, // пример внешнего вида одного товара
      { name: "bread", price: 3, quantity: 100 },
      { name: "cheese", price: 25, quantity: 70 },
    ], // массив товаров
    totalCost: 0, // итоговая стоимость товаров
    addItem(item) {
      // При добавлении нового товара возможны два сценария:
      // 1. Такого товара на складе нет. Тогда добавляем новую позицию на склад
      // (добавляем новый элемент в массив items)
      // 2. Такой товар на складе есть. Тогда меняем существующую позицию на новое количество
      // (изменяем элемент с информацией о данной позиции в массиве items)
  
      const index = this.items.findIndex((e) => e.name === item.name);
  
      if (index !== -1) {
        this.items[index].quantity = item.quantity;
      } else {
        this.items.push({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        });
      }
    },
    
  
    removeItem(itemName, itemQuantity) {
      // При удалении товара возможны три сценария:
      // 1. Количество товара на складе больше удаляемого количества. Тогда меняем существующую позицию на новое количество
      // (изменяем элемент с информацией о данной позиции в массиве items)
      // 2. Количество товара на складе равно удаляемому. Тогда удаляем позицию со склада
      // (удаляем элемент в массив items)
      // 3. Количество товара на складе меньше удаляемого. Тогда действие не выполняется
  
      const existProduct = this.items.find((e) => e.name === itemName);
  
      if (existProduct) {
          // 3 сценарий
        if (itemQuantity > existProduct.quantity) {
          alert(
            "Некорректный ввод! Количество товара на складе меньше удаляемого"
          );
        }
        
        // 1 сценарий
        if (existProduct.quantity > itemQuantity) {
          existProduct.quantity -= itemQuantity;
        }
  
        // 2 сценарий
        if (existProduct.quantity === itemQuantity) {
          const index = this.items.findIndex((e) => e.name === existProduct.name);
          this.items.splice(index, 1);
        }
        
      } else {
        alert("Товара нет на складе");
      }
    },
  
    
    updateTotalCost() {
      // 1. На основании информации, хранимой в массиве товаров (stock.items) посчитать итоговую стоимость всех товаров
      // this - ведёт на объект, с которым происходит действие
      // Если this используется внутри метода объекта, оно ссылается на сам объект
      // this.items.reduce
  
      return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    },
  };
  
  stock.addItem({ name: "lemon", price: 4, quantity: 10 });
  console.log(stock.items);
  
  stock.removeItem("lemon", 7);
  console.log(stock.items);
  
  console.log(stock.updateTotalCost());
  