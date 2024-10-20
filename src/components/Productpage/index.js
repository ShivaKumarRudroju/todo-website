import { useEffect, useState } from "react";

function Productpage() {
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    const product = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const info = await data.json(data);
        console.log(info);
        setQuestions(info);
      } catch {
        console.error("error");
      }
    };
    product();
  }, []);
  return (
    <div>
      {Questions.map((question) => (
        <p key={question.id}>{question.category}</p>
      ))}
    </div>
  );
}
export default Productpage;
