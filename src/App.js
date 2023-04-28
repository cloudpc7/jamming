import React from 'react';
import './style.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import Tracklist from './components/Tracklist';

export default function App() {
  return (
    <div class="app-container">
      <SearchBar />
      <SearchResults />
      <Tracklist />
      <Track />
    </div>
  );
}

