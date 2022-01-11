import { useState } from 'react'
// import Content from './Content';
import FakeChatApp from './FakeChatApp';

// const orders = [1, 2, 3];

// const gifts = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
// ];

function App() {
  // --------------------------useState----------------------------------
  // const [counter, setCounter] = useState(1);
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur);
  //   return total;
  // });

  // const handleIncrease = () => {
  //   // setCounter(counter + 1);
  //   setCounter(preState => preState + 1);
  // }

  // const [info, setInfo] = useState({
  //   name: 'Vo Van Thanh',
  //   age: 18,
  //   address: 'VN',
  // });

  // const handleUpdate = () => {
  //   // setInfo({
  //   //   ...info,
  //   //   bio: 'ABC'
  //   // })
  //   setInfo(prev => ({
  //     ...prev,
  //     bio: 'ABC'
  //   }));
  // }
  // --------------------------two-way binding----------------------------------
  // const [gift, setGift] = useState();
  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // }

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const courses = [
  //   {
  //     id: 1,
  //     name: 'A'
  //   },
  //   {
  //     id: 2,
  //     name: 'B'
  //   },
  //   {
  //     id: 3,
  //     name: 'C'
  //   },
  // ];
  // // const [checked, setChecked] = useState(1);
  // const [checked, setChecked] = useState([]);
  // // console.log(checked);
  // const handleChecked = (id) => {
  //   setChecked(prev => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter(item => item !== id);
  //     } else {
  //       return [...prev, id];
  //     }
  //   })
  // }
  // const handleSubmit = () => {
  //   console.log({ id: checked });
  // }

  // --------------------------mounted & unmounted----------------------------------
  const [show, setShow] = useState(false);
  

  return (
    <div className="App">
      {/* --------------------------useState---------------------------------- */}
      {/* <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button> */}

      {/* --------------------------two-way binding---------------------------------- */}
      {/* <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button> */}
      {/* <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      /> */}

      {/* {courses.map(course => (
        <div key={course.id}>
          <input 
            type="radio" 
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))} */}
      {/* {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox" 
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button> */}

      {/* --------------------------useEffect---------------------------------- */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}

      {show && <FakeChatApp />}
    </div>
  );
}

export default App;
