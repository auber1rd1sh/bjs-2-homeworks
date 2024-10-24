//Задача № 1
const md5 = require('./js-md5.js'); // Подключаем библиотеку MD5 для хэширования аргументов

function cachingDecoratorNew(func) {
  let cache = []; // Массив для хранения кэша
  const maxCacheValuesCount = 5; // Максимальное количество значений в кэше

  return function(...args) { 
    // 1. Преобразуем аргументы в уникальную строку (хэш) с помощью MD5
    const hash = md5(args);

    // 2. Проверяем, есть ли результат для этих аргументов в кэше
    const cacheItem = cache.find(item => item.hash === hash);

    if (cacheItem) {
      // 3. Если результат найден, возвращаем его из кэша
      console.log("Из кеша: " + cacheItem.result); // Меняем "кэша" на "кеша", как требует тест
      return "Из кеша: " + cacheItem.result; // Возвращаем результат
    }

    // 4. Если результата нет в кэше, вызываем оригинальную функцию
    const result = func.apply(this, args);
    console.log("Вычисляем: " + result);

    // 5. Сохраняем новый результат в кэше вместе с его хэшем
    cache.push({ hash: hash, result: result });

    // 6. Если кэш переполнен (больше 5 значений), удаляем самое старое
    if (cache.length > maxCacheValuesCount) {
      cache.shift(); // Удаляем первый элемент (старый результат)
    }

    // 7. Возвращаем новый результат
    return "Вычисляем: " + result;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    let immediateCall = true;  // Флаг для первого мгновенного вызова
    
    function wrapper(...args) {
      wrapper.allCount++;  // Увеличиваем счетчик всех вызовов декоратора
  
      if (immediateCall) {
        func.apply(this, args);  // Мгновенный вызов при первом обращении
        wrapper.count++;         // Увеличиваем счетчик вызовов функции
        immediateCall = false;   // Первый вызов сделан, выключаем мгновенный запуск
        return;
      }
  
      if (timeoutId) {
        clearTimeout(timeoutId);  // Очищаем предыдущий таймаут
      }
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);  // Выполняем отложенный вызов
        wrapper.count++;         // Увеличиваем счетчик вызовов функции
      }, delay);
    }
  
    wrapper.count = 0;    // Инициализация счетчика вызовов функции
    wrapper.allCount = 0;  // Инициализация счетчика всех вызовов
    
    return wrapper;
  }

 