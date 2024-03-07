

const BASE_URL ='https://jsonplaceholder.typicode.com'
const useFetch = async (url:string) => {
   
        let data;
        try {
          const res = await fetch(BASE_URL + url);
          if (!res.ok) {
            throw new Error("Sorry, the users couldn't be fetched");
          }
      
          data = await res.json();
        } catch (err) {
          console.error(err);
        }
        return data;
  
}

export default useFetch