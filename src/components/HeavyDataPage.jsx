import React, { useState, useEffect } from 'react';

const generateDummyData = (num) => {
  const data = [];
  for (let i = 1; i <= num; i++) {
    data.push(`Item #${i} - This is a piece of dummy data.`);
  }
  return data;
};

const HeavyDataPage = () => {
  const totalItems = 500; 
  const itemsPerLoad = 50;
  const [loadedData, setLoadedData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [loadedCount, setLoadedCount] = useState(0);
  const data = generateDummyData(totalItems); 

  const loadMoreData = () => {
    if (loading || loadedCount >= totalItems) return;

    setLoading(true);
    setTimeout(() => {
      const newItems = data.slice(loadedCount, loadedCount + itemsPerLoad);
      setLoadedData((prevData) => [...prevData, ...newItems]);
      setLoadedCount((prevCount) => prevCount + itemsPerLoad);
      setLoading(false);
    }, 1500); 
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 50) {
      loadMoreData();
    }
  };

  return (
    <div
      style={{ maxHeight: '80vh', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}
      onScroll={handleScroll}
    >
      <h1>Heavy Data Page (Lazy Loaded)</h1>
      <p>This page contains a large amount of dummy data, loaded in chunks as you scroll.</p>
      <div>
        {loadedData.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      </div>
    </div>
  );
};

export default HeavyDataPage;
 