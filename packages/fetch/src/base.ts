import FormData from "form-data";

export interface RequestBase extends RequestInit {
  params?: Record<string, any>;
}
export default class ApiClient {
  baseUrl: string;
  headers: Record<string, unknown>;
  requestInterceptors: any[];
  responseInterceptors: any[];
  constructor(baseUrl: string, headers = {}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  setHeader(key: string, value: unknown) {
    this.headers[key] = value;
    return this;
  }

  setBasicAuth(username: string, password: string) {
    this.headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
    return this;
  }

  setBearerAuth(token: string) {
    this.headers.Authorization = `Bearer ${token}`;
    return this;
  }

  // Agrega un interceptor que se ejecutará antes de enviar la solicitud
  useRequestInterceptor(interceptor: Response) {
    this.requestInterceptors.push(interceptor);
  }

  // Agrega un interceptor que se ejecutará después de recibir la respuesta
  useResponseInterceptor(interceptor: Response) {
    this.responseInterceptors.push(interceptor);
  }

  // Envía una solicitud usando fetch y aplica los interceptores antes de enviarla y después de recibirla
  private fetch<T>(
    url: RequestInfo | URL,
    options: RequestBase = {}
  ): Promise<T> {
    const { params } = options;
    // Aplica los interceptores de solicitud a la solicitud
    let quryParams = params ? "?" + new URLSearchParams(params).toString() : "";
    const isFormData = options.body ? options.body instanceof FormData : false;
    const headers: HeadersInit = isFormData
      ? options.headers
        ? options.headers
        : {}
      : ({
          ...this.headers,
          ...options.headers,
        } as HeadersInit);
    let request = {
      url: `${this.baseUrl}/${url}${quryParams}`,
      options: {
        ...options,
        headers,
      },
    };
    for (let interceptor of this.requestInterceptors) {
      request = interceptor(request);
    }
    console.log(request.url);

    // Envía la solicitud usando fetch
    return fetch(request.url, request.options)
      .then((response) => {
        let result = { response };
        for (let interceptor of this.responseInterceptors) {
          result = interceptor(result);
        }
        if (response.ok) {
          return result.response.json();
        }
        return Promise.reject(response);
        // Aplica los interceptores de respuesta a la respuesta
      })
      .catch((response) => {
        return Promise.reject(response);
        console.log(response.status, response.statusText);
        // 3. get error messages, if any
        response.json().then((json: any) => {
          console.log(json);
        });
      });
  }

  get<T>(endpoint: string, options: RequestBase = {}): Promise<T> {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "GET",
    });
  }

  async post<T>(
    endpoint: string,
    body: BodyInit | null | any,
    optionsReq: RequestBase = {}
  ) {
    return this.fetch<T>(endpoint, {
      ...optionsReq,
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body) as any,
    });
  }

  delete(endpoint: string, options: RequestBase = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: "DELETE",
    });
  }

  put<T>(endpoint: string, body: BodyInit | null | any, options: RequestBase = {}) {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "PUT",
      // @ts-ignore
      body: body instanceof FormData ? body : JSON.stringify(body),
    });
  }
}

/* // Crear una instancia de ApiClient para el endpoint /users
const usersClient = new ApiClient("https://ejemplo.com/api/users");

// Agrega un interceptor para agregar un encabezado de autenticación a todas las solicitudes
usersClient.useRequestInterceptor((request) => ({
  ...request,
  options: {
    ...request.options,
    headers: {
      ...request.options.headers,
      Authorization: "Bearer xxx",
    },
  },
}));

// Agrega un interceptor para mostrar un mensaje de error para todas las respuestas con un código de estado de error
usersClient.useResponseInterceptor((result) => {
  if (!result.response.ok) {
    console.error(
      `Error ${result.response.status}: ${result.response.statusText}`
    );
  }
  return result;
});

// Hacer una solicitud GET
usersClient
  .fetch()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
 */
