import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
const client = createClient({
  serviceDomain: 'snym',
  apiKey: import.meta.env.VITE_API_KEY as string
});

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
  // `params.id` comes from [id].js

  return client
    .get({
      endpoint: 'contents'
    })
    .then((res) => {
      return {
        body: res[params.id]
      };
    });
}
