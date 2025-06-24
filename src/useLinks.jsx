import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function useLinks() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://sherklan.pythonanywhere.com/api/links/')
      .then(response => {
        setLinks(response.data);
        setError(null);
      })
      .catch(error => {
        setError('Error al cargar los links');
        setLinks([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { links, loading, error };
}

export default useLinks;
