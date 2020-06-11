import { useState, useEffect } from "react";
import axios from "axios";

export const usePostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        alert("Erro na obtenção dos dados");
      });
  }, []);

  return posts;
};
