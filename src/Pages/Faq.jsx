// import { useState } from "react";
// import Hero from "../components/Hero";
import { useEffect, useState } from "react";


const Faq = () => {
  // const [indexNum, setIndexNum] = useState([
  //   {
  //     question: "what is your name",
  //     answer: "my name is who...............",
  //   },
  //   {
  //     question: "what course are you learning",
  //     answer: "mms",
  //   },
  //   {
  //     question: "when are you ending the course ",
  //     answer: "dont know",
  //   },
  // ]);

  //
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
   
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  return (
    // <div>
    //   <Hero title="Faq page" />
    //   {indexNum.map((item, index) => (
    //     <div key={index}>
    //       <h1>{item.question}</h1>
    //       <h2>{item.answer}</h2>
    //     </div>
    //   ))}
    // </div>
    <>
      <section>
      <h2>Fetching Data</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Phone number: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
          <p>Company: {user.company.name}</p>
          <p>Company catchphrase: {user.company.catchPhrase}</p>
          <p>Company bs: {user.company.bs}</p>
        </div>
      ))}
    </section>
    </>
  );
};

export default Faq;