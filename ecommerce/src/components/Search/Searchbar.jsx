import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';

const Searchbar = () => {
    const [search, setSearch] = useState()
    const [searchResults, setSearchResults] = useState([]);
    const history = useHistory();

      const handleSubmit = (e) => {
        e.preventDefault();
        commerce.products.list({'query': `${search}`}).then(response => {
            setSearchResults(response.data);
            console.log(searchResults);
            history.push('/results');
        });
      }
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            </form>
        </div> 
    )
}

export default Searchbar;
