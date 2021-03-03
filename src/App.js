import logo from './logo.svg';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function App() {
  const [results, setResults] = useState([])

  const resultsArray = results.map((word, i) => {
    return <li className="col-4" key={i}>{word}</li>
  });

  const handleChange = event => {
    const query = event.target.value;
    getResults(query);
  }

  const getResults = async (query) => {
    let url = `http://localhost:8000/v1/autocomplete?search=${query}`
    try {
      const response = await fetch(url, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <Card className="col">
          <Card.Body>
            <Card.Title>Autocomplete test:</Card.Title>
            <input onChange={handleChange} placeholder="Enter search query" />
            <div className="m-3">
              <h3>Results:</h3>
              <ul className="row">
                { resultsArray.length < 1 ? <li>None Found</li> : resultsArray }
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
