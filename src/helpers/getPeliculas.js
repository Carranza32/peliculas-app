const apikey = '83d35467b4495a535e3289ba0a88a479';
const baseUrl = 'https://api.themoviedb.org/3';
const languaje = 'es-ES';

export const getPeliculas = async() => {
   try {
      const resp = await fetch(`${baseUrl}/movie/now_playing?api_key=${apikey}&languaje=${languaje}`);
   
      const {results} = await resp.json();
      return results;
   } catch (error) {
      console.error('error', error);
   }
}

export const getPeliculaById = async(id) => {
   try {
      const resp = await fetch(`${baseUrl}/movie/${id}?api_key=${apikey}&languaje=${languaje}`);
   
      const data = await resp.json();
      return data;
   } catch (error) {
      console.error('error', error);
   }
}

export const getCastByMovie = async(id) => {
   try {
      const resp = await fetch(`${baseUrl}/movie/${id}/credits?api_key=${apikey}&languaje=${languaje}`);
   
      const {cast} = await resp.json();
      return cast;
   } catch (error) {
      console.error('error', error);
   }
}

export const getReviewsByMovie = async(id) => {
   try {
      const resp = await fetch(`${baseUrl}/movie/${id}/reviews?api_key=${apikey}&languaje=${languaje}`);
   
      const {results} = await resp.json();
      return results;
   } catch (error) {
      console.error('error', error);
   }
}

