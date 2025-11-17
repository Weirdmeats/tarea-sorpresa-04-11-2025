const strapiUrl = import.meta.env.STRAPI_URL || 'http://localhost:1337';

export const STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (tag: string) => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${tag}?populate=*`);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Error al conectar con Strapi:", error);
    return null;
  }
};
