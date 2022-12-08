import axios from "axios";

export const putData = async (e, setIsOke) => {
  const body = {};

  for (let i = 0; i < e.target.length; i++) {
    e.preventDefault();
    if (e.target[i].value) {
      body[e.target[i].placeholder] = e.target[i].value;
    }
  }
  

  try {
    const res = await axios.put(
      "http://localhost:3004/users/" + e.target[0].value,
      {
        ...body,
      }
    );
    if (res.status == 200) {
        setIsOke(true);
      }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (e, setIsOke) => {
  try {
    const res = await axios.post("http://localhost:3004/users", {
      name: e.target[0].value,
      age: e.target[1].value,
      email: e.target[2].value,
    });
    if (res.status == 201) {
      setIsOke(true);
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const patchData = async (e, setIsOke) => {
  const body = {};

  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].value) {
      body[e.target[i].placeholder] = e.target[i].value;
    }
  }

  try {
    const res = await axios.patch(
      "http://localhost:3004/users/" + e.target[0].value,
      {
        ...body,
      }
    );

    if (res.status == 200) {
      setIsOke(true);
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (e, setIsOke) => {
  try {
    const res = await axios.delete(
      "http://localhost:3004/users/" + e.target[0].value
    );
    if (res.status == 202) {
      setIsOke(true);
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
