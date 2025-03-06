const todoAPI = "https://jsonplaceholder.typicode.com/todos";
const userAPI = "https://jsonplaceholder.typicode.com/users";

const fetchAPISet = async () => {
  try {
    const [user, todo] = await Promise.all([
      fetch(todoAPI).then((res) => {
        if (!res.ok) {
          throw new Error("Todo API Failed!");
        }
        return res.json();
      }),
      fetch(userAPI).then((res) => {
        if (!res.ok) {
          throw new Error("User API Failed!");
        }
        return res.json();
      }),
    ]);

    return {
      todoData: todo[0],
      userData: user[0],
    };
  } catch (error) {
    console.log("API Error!: ", error.message);
    throw error;
  }
};

const dataRecived = async () => {
  try {
    const result = await fetchAPISet();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

dataRecived();
