async function getTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    const data = await response.json();
    
    console.log("Judul Todo:", data.title);
    
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
  }
}
getTodo();