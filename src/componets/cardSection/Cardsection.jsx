import React from "react";
import Card from "./Card";

const Cardsection = () => {
  let tech = [
    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg0.svg?updatedAt=1680684411855",
      title: "andriod",
    },

    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg1.svg?updatedAt=1680684411875",
      title: "apple",
    },

    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg1.svg?updatedAt=1680684411875",
      title: "appi fizz",
    },
    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg0.svg?updatedAt=1680684411855",
      title: "andriod",
    },

    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg1.svg?updatedAt=1680684411875",
      title: "apple",
    },

    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg3.svg?updatedAt=1680684415989",
      title: "Wearable",
    },

    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg1.svg?updatedAt=1680684411875",
      title: "appi fizz",
    },
    {
      url: "https://ik.imagekit.io/b80sh2n2k/svgs_collection/svg0.svg?updatedAt=1680684411855",
      title: "andriod",
    },




  ];
  return (
    <div className=" card-section">
      <h3 className="text-center">What Matters to You, Matters to Us</h3>
      <p className="text-center">
        Daylogic Infotech Company is a one-stop solution for all your Web &
        Mobile needs. It offers a wide variety of development and marketing
        services, from app development to E-governance solutions.
      </p>
      <div className="row">
        {tech.map((tech, i) => {
          return <Card url={tech.url} key={i} title={tech.title} />;
        })}
      </div>
    </div>
  );
};

export default Cardsection;
