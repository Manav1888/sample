
import React from "react";
import { useParams } from "react-router-dom";
import cardsData from '../data/cardsData.json';
import BlogCard from "../cards/BlogCard";

const Article = () => {
  const { id } = useParams();
  const article = cardsData.find(card => card.id.toString() === id);
    const word=article.date.split(' ')
    console.log(word[1])

  

  if (!article) return <div>Article not found</div>;
  const restOfPosts = cardsData.filter(card => card.id.toString() !== id);

  return (
    <div className="pt-10 lg:px-52 max-sm:mx-4">
    <div className="flex-col">
    <div className=" flex-col pb-4 text-base font-normal" > 
    <div className="flex gap-1">
        <div className="bg-green-500 px-4  font-medium rounded-xl text-white">
            {word[0]}
        </div>
        {word[1]}
    </div>
    
    <h1 className="text-5xl max-sm:text-2xl font-medium pt-4">{article.title}</h1>
    <div className="pt-4 text-base">{article.description}</div>
    </div> 
    <div className="flex justify-center items-center pt-10 max-sm:pt-6">
      <img src={article.imageSrc} className='lg:rounded-xl w-full max-sm:w-auto  rounded-xl' alt={article.title} />
      </div>
      <p className="pt-10 font-normal text-md">{article.content1}</p>
      <p className="pt-2 font-normal text-md">{article.content2}</p>
    </div>
    <div className="flex justify-center items-center pt-10 max-sm:pt-6">
      <img src={article.img2} className='lg:rounded-xl w-full max-sm:w-auto  rounded-xl' alt={article.title} />
      
      </div>
      <p className="py-7 font-normal text-md">{article.content3}</p>
        <div className=" pt-7 border-t-2 font-semibold text-lg pb-8">
            Related Post 
        </div>
      <div className=" flex xl:relative max-sm:flex-col pb-10 items-center justify-center">
      <div className="max-sm:px-7 xl:  md:px-8">
        <div className=" flex  max-sm:flex-col justify-evenly gap-4">
          {restOfPosts.map((card) => (
            <div key={card.id} className=" flex border-2 rounded-xl w-full max-sm:flex-col flex-wrap mb-4">
              <BlogCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Article;
