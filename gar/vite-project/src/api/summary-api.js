const fetchData = async() => {
    const response = await fetch("http://localhost:8080/getData");
    const data = await response.json();
    console.log(data);
    return data;
}

export {fetchData}