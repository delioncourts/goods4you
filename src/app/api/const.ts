export const ALL_PRODUCTS_CATGORIES = 'https://dummyjson.com/products/categories'; 
export const BASE_URL = 'https://dummyjson.com/'

interface IBaseResponse {
    success: boolean;
  }
  // создаем функцию проверки ответа на `ok`
  // добавляем проверку на ошибку, чтобы она попала в `catch`
  const checkResponse = <T>(res: Response): Promise<T> => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };
  
  const request = <T extends IBaseResponse>(endpoint: string, options: RequestInit) => {
    // а также в ней базовый урл сразу прописывается, чтобы не дублировать в каждом запросе
    return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);
  };

  export const loadquiz = () => {
    return request('products/categories', {});
  };