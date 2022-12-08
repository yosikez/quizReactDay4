import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { putData, patchData, postData, deleteData } from "./services";
import { Button, Alert, Modal } from "antd";
import FormModal from "./component/FormModal/FormModal";
import DeleteModal from "./component/DeleteModal/DeleteModal";
import DisplayData from "./component/DisplayData/DisplayData";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [isOke, setIsOke] = useState(false);

  const paginate = async (page, limit) => {
    try {
      const res = await axios.get(
        `http://localhost:3004/users?_page=${page}&_limit=${limit}`
      );
      if (res.status == 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const prevButton = () => {
    setPage((prevState) => prevState - 1);
  };
  const nextButton = () => {
    console.log(data)
    setPage((prevState) => prevState + 1);
  };

  const success = () => {
    Modal.success({
      content: 'Data Berhasil tersimpan',
    });
  };
  
  useEffect(() => {
    paginate(page, limit);
  }, [page]);
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="dataPaginate">
          <h1>Current Data</h1>
          <div className="dataContainerList">
            {data
              .map((data) => <DisplayData key={data.id} data={data} />)
              .reverse()}
          </div>
          <div className="paginate">
            <Button size="large" onClick={prevButton} type="primary">
              Prev
            </Button>
            <Button size="large" onClick={nextButton} type="primary">
              Next
            </Button>
          </div>
        </div>
              
        {isOke ? success() : ""}
        <div className="form-outer">
          <h1>Form</h1>
          <div className="form-containter">
            <FormModal name={"Post Data"} action={(e) => postData(e, setIsOke)} />
            <FormModal
              name={"Put Data"}
              type={"update"}
              action={(e) => putData(e)}
            />
            <FormModal
              name={"Patch Data"}
              type={"update"}
              action={(e) => patchData(e)}
            />
            <DeleteModal action={(e) => deleteData(e)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
