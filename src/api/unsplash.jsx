import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",

  headers: {
    Authorization: "Client-ID CIfQ9trWgeColF-IS_OpJMRWHUJS93ypWO4_AXFXTE8",
  },
});
