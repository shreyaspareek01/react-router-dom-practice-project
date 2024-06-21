import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/shreyaspareek01")
  //       .then((data) => data.json())
  //       .then((data) => setData(data));
  //   });

  return (
    <>
      <div className="bg-gray-700 flex flex-col items-center">
        <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
          Name: {data.name}
        </h1>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
          Github Followers: {data.followers}
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shreyaspareek01");
  return response.json();
};
