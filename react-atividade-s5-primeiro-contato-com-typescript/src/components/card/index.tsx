interface User {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, hobby, age }: User) => (
  <div>
    <h3>{name}</h3>
    <p>{age}</p>
    <p>{hobby}</p>
  </div>
);

export default Card;
