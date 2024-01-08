/* const getData = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())




export let FetchComp = async (props) => {
 console.log(props)
    return (
        <>
        
        { {props.userData.map(u => <tr>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.username}</td>
                                </tr>)} }
        </>
    )
} */


import { useState, useEffect } from 'react';

const Fetch = () => {
  const [user, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      
      {user.map(u => <tr>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.username}</td>
                                </tr>)}
    </div>
  );
};
export default Fetch;