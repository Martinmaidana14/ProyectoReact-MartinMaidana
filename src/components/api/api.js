import axios from "axios";

const searchImages = async (term) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID DOs_oeA3wbWt5yc_SufJ3yXeOJCWT64C6LRqZ6HC1eA"
        },

        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;
