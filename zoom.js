// Извлекаем параметры из URL
const myParams = new URLSearchParams(window.location.search);

if (myParams.has('center') && myParams.has('zoom')) {
    try {
        const centerParam = JSON.parse(myParams.get('center')); // Преобразуем строку в массив координат
        const zoomParam = parseInt(myParams.get('zoom'));       // Преобразуем строку в число

        // Устанавливаем координаты и масштаб
        map.getView().setCenter(centerParam);
        map.getView().adjustZoom(zoomParam);
    } catch (err) {
        console.error("Ошибка преобразования параметров:", err.message);
    }
}
