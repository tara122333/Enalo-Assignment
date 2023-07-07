import { useEffect, useState } from "react";
import { Pagination } from 'antd';
import axios from "axios";
const  App = () => {
  const [tableData, setTableData] = useState(0);
  const [counter, setCounter] = useState();
  const func = async() =>{
    const res = await axios.get(`https://stagingapi.enalo.in/inventory/get-items/?offset=${counter}`);

    setTableData(res.data);
  }

  useEffect(()=>{
    func();
  },[counter])


  const counts = tableData.count;
  const onChange = (props) =>{
    console.log(props);
    const temp =  ( props - 1 )*10;
    setCounter(temp);
  }

  console.log(counter);
  return (
    <>
    <h1>Id</h1>
      <h1>
        {
          tableData?.results?.map((items)=>(
            <h1>
              {
                items.id
              }
            </h1>
          ))
        }
      </h1>

      
      <Pagination defaultCurrent={1} total={counts} onChange={onChange} />
    </>
  );
}

export default App;
