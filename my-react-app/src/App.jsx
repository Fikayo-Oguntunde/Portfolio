import React, { useState } from 'react';

// Mock data to simulate a database
const MOCK_GROUPS = [
  { id: 1, course: 'MTE 204', title: 'Statics Review', members: 3, time: '2:00 PM' },
  { id: 2, course: 'MTE 262', title: 'Microprocessors Lab Prep', members: 2, time: '4:30 PM' },
  { id: 3, course: 'MATH 215', title: 'Differential Equations', members: 5, time: '11:00 AM' },
  { id: 4, course: 'MTE 204', title: 'Final Exam Grind', members: 1, time: '7:00 PM' },
];

const StudyMatch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic: Checks if course code includes the search string
  const filteredGroups = MOCK_GROUPS.filter(group =>
    group.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>StudyMatch</h1>
        <p>Find your 2B struggle buddies.</p>
      </header>

      <div style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search by course (e.g. MTE 204)..."
          style={styles.input}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={styles.grid}>
        {filteredGroups.length > 0 ? (
          filteredGroups.map(group => (
            <div key={group.id} style={styles.card}>
              <h3 style={styles.courseBadge}>{group.course}</h3>
              <h4>{group.title}</h4>
              <p>👥 {group.members} members joined</p>
              <p>⏰ Starts at {group.time}</p>
              <button style={styles.button}>Join Group</button>
            </div>
          ))
        ) : (
          <p>No groups found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

// Basic CSS-in-JS for quick styling
const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' },
  header: { textAlign: 'center', marginBottom: '30px' },
  searchSection: { marginBottom: '20px', display: 'flex', justifyContent: 'center' },
  input: { padding: '12px', width: '100%', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' },
  card: { padding: '15px', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  courseBadge: { color: '#005bb7', margin: '0 0 10px 0' },
  button: { width: '100%', padding: '10px', backgroundColor: '#005bb7', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }
};

export default StudyMatch;