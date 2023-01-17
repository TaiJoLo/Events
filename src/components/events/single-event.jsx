import React from "react";
import Image from "next/image";

export const SingleEvent = ({ data }) => {
  return (
    <div>
      <Image src={data.image} alt={data.title} width={800} height={500}></Image>
      <h1> {data.title}</h1>
      <p>{data.description}</p>
      <input type="email" />
      <button>Submit</button>
    </div>
  );
};
