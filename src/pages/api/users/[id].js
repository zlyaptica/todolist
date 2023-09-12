export default async function handler(req, res) {
    const { id } = req.query;
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/${id}');
  
    const userData = await response.json();
  
    res.status(200).json(userData);
}