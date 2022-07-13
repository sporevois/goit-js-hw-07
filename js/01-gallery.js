import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) 
// файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи.Для этого ознакомься 
// с документацией и примерами.
// 5. Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров 
// библиотеки basicLightbox.

// Ссылка на оригинальное изображение должна храниться в data - атрибуте source 
// на элементе < img >, и указываться в href ссылки.Не добавляй другие HTML 
// теги или CSS классы кроме тех, что есть в этом шаблоне.

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике 
// по умолчанию пользователь будет перенаправлен на другую страницу. 
// Запрети это поведение по умолчанию.

const galleryRef = document.querySelector('.gallery')

const createGalleryItem = ({preview, original, description}) => {
    const item = galleryRef.insertAdjacentHTML('beforeend',
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </div>`); 
}
const galleryMarkUp = galleryItems.forEach(createGalleryItem);