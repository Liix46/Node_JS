//  Сервер на JS
const HTTP_PORT = 8081;

//Подключение модуля
import { createServer } from "http";

// Серверная функция
function serverFunction(request, response) {
    //console.log(request);
    console.log(request.method + " " + request.url);
    
    if (request.url == '/home' || request.url == "/") {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        response.end("<h1>Home, sweet Home</h1>"); // ~getWriter().print
    } else if(request.url == '/hello'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        response.end("<h1>Hello, world</h1>");
    }else if(request.url == '/js'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        response.end("<h1>Node is Cool</h1>");
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html')
        response.end("<h1>Not Found</h1>");
        
    }

}

//Запуск сервера - начало прослушивания порта
const server = createServer(serverFunction);

// регистрируемся в ОС на получение пакетов, 
// адресованных на наш порт
server.listen(
    HTTP_PORT, // номер порта
    () => { // callback, после-обработчик, вызывается
        // после того, как "включится слушание"
        console.log("Listen start, port " + HTTP_PORT);
    }
);