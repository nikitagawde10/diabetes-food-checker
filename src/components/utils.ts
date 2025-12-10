import { FoodAdvice } from "../types";

export const GIF_POOL: Record<
  FoodAdvice["diabetesSafetyTag"],
  { src: string; alt: string }[]
> = {
  good_choice: [
    {
      //jungkook
      src: "https://media1.tenor.com/m/APGTmejkDIEAAAAC/finger-heart-bts.gif",
      alt: "Jungkook approves",
    },
    {
      //jungkook
      src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXRoM2l0cHl3bTRlaThjd2V5OWRyejN4aGx5anlqZWdoOGV6ZzRkeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKGLm7ksfrqtKRQ0Sy/giphy.gif",
      alt: "Approved",
    },
    {
      //V
      src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdjeGpmYnduZDJvbXlwM3d6aXVrNmhlNm02MTNpYnh2OGo1OG5xcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mBMz7yoMxWjOO3aN91/giphy.gif",
      alt: "Happy yes",
    },
    {
      //V
      src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnAzb3pjZ3dnN3I4cmt4c2UydGxrdWNqZXFjcXo0MG5sbDU2djluYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UL6KmK8dqmWs/giphy.gif",
      alt: "Confident yes",
    },
    {
      //BTS
      src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDl0ZzlrbWR3dm5nZGpkdDVmdzFrOGFoazN6amNnaGdhYWd5cmc2NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Bp6AQC3GbW6LldXXhp/giphy.gif",
      alt: "Good vibes",
    },
    {
      //V
      src: "https://media1.tenor.com/m/zGuEglLrivAAAAAd/bts-bangtan-boys.gif",
      alt: "V approves",
    },
    {
      //jungkook
      src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZsMnAzanQycHB2NG9oYXc3cTVpa3V1a2V6OWNzNHNtdXB0d3d2cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0QqZfsK8q4KxUvNMxZ/giphy.gif",
      alt: "Excited yes",
    },
  ],

  okay_in_moderation: [
    {
      //uday
      src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHR4YnB3azhsdng1eHBseTlqZno3OXNxM3pldHZ2dGFkYjh0ZjY1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XBpEgheIVWnC8hwc46/giphy.gif",
      alt: "Control",
    },
    {
      //jimin
      src: "https://media1.tenor.com/m/iUel27Gop98AAAAd/jimin-bts-jimin-shocked.gif",
      alt: "Jimin unsure",
    },
    {
      //v
      src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGk1dTNiZDJsYzFzeHNyMDVzY3ZrM3JycDZjeDRzZmh5MmgxZHpoNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UurFWROK7ZMvKLNvio/giphy.gif",
      alt: "Think first",
    },
    {
      //jungkook
      src: "https://media1.tenor.com/m/wvGwMMfdw3wAAAAd/jinmojv21-jungkook.gif",
      alt: "Careful Jungkook",
    },
    {
      //jimin
      src: "https://media1.tenor.com/m/4AxJGXjH1LUAAAAd/jiminastie-jiminsalfa.gif",
      alt: "Jimin confused",
    },
    {
      //jimin
      src: "https://media1.tenor.com/m/OqqpYndBEbIAAAAd/bts-jin.gif",
      alt: "Jin unsure",
    },
    {
      //jungkook
      src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzNwYWhwNmQwZmpnYnNhaGR3ZWtwZXFvaWh2dnNkbm0zM3NvaHZ5MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VVMRhYo7wwJkIPwwJF/giphy.gif",
      alt: "Hmm",
    },
  ],

  not_recommended: [
    {
      //jungkook
      src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG80MmJhZ2w5Y212aWp1N3VvczRrZnh6eXZuZ3Uwc3FueDRlOTZzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0qfkcpaLuTYgJTS0kY/giphy.gif",
      alt: "Nope",
    },
    {
      //v
      src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDE4c2hqY29qdWg2YnR5eWlxcXg1bWQzY2NhdWhkeGpzZGIyNGt3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uUlVoSU6PX6rJ5DkIO/giphy.gif",
      alt: "Hard no",
    },
    //jimin
    {
      src: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bmdyZDR2ZWt6YnA4cGVqOHpsZXA2NmI3ZWt4YzgzbjR0ZWIzNm5kdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bacYwzpwaCuO3bmsBG/giphy.gif",
      alt: "Big no",
    },
    //jimin
    {
      src: "https://media1.tenor.com/m/30He1QHVvaAAAAAd/jinmojv21-bts.gif",
      alt: "Jimin says no",
    },
    //jungkook
    {
      src: "https://media1.tenor.com/m/SdZ6vRFo8IUAAAAd/jungkook-jungkook-no.gif",
      alt: "Jungkook no",
    },
    //jimin
    {
      src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzg0aXQwd2Jwc3g0NHB1NXJvOGxrN2RxejZodzZ5YzhlaXl3Zm1rdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2sTZOZQNVAOIXs3Vv/giphy.gif",
      alt: "Absolutely not",
    },
  ],

  unknown: [
    {
      //jhope
      src: "https://media.giphy.com/media/ZTFgbsUU0NRYI/giphy.gif",
      alt: "Confused",
    },
  ],
};
