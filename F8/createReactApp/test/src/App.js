// import { useCallback, useState } from 'react'
// import Content from './Content';
// import FakeChatApp from './FakeChatApp';
// import UseLayoutEffect from './UseLayoutEffect';
// import UseRef from './UseRef';
// import Memo from './Memo';
// import UseCallback from './UseCallback';
// import UseMemo from './UseMemo';
// import UseReducer from './UseReducer';
// import TodoUseReducer from './TodoUseReducer';
// import TodoApp from './Todo';

// import UseContext from './UseContext/UseContext';
// import './App.css';

import UseImperativeHandle from './UseImperativeHandle/UseImperativeHandle';

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
  // const [show, setShow] = useState(false);

  // --------------------------memo----------------------------------
  // const [count, setCount] = useState(0);
  // const increase = () => {
  //   setCount(count + 1);
  // }
  // const [count2, setCount2] = useState(0);
  // const increase2 = () => {
  //   setCount2(count2 + 1);
  // }

  // --------------------------useCallback----------------------------------
  // const [count, setCount] = useState(0);
  // const handleIncrease = useCallback(() => {
  //   setCount(prev => prev + 1);
  // }, []);

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
      {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
      {/* {show && <Content />} */}
      {/* {show && <FakeChatApp />} */}

      {/* {show && <UseLayoutEffect />} */}
      {/* {show && <UseRef />} */}

      {/* <Memo count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me</button>
      <button onClick={increase2}>Click me 2</button> */}

      {/* <UseCallback onIncrease={handleIncrease} />
      <h1>{count}</h1> */}

      {/* <UseMemo /> */}

      {/* <UseReducer /> */}

      {/* <TodoUseReducer /> */}

      {/* <TodoApp /> */}

      {/* <UseContext /> */}

      {/* <GlobalState /> */}

      <UseImperativeHandle />
    </div>
  );
}

export default App;
