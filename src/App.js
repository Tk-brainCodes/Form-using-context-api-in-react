import React from 'react';
import Navbar from './Navbar';
import Forms from './Forms';
import PageContent from './pageContent';
import {LanguageContext} from './context/languageContext';
import {ThemeProvider} from './context/themeContext';
import './App.css';

function App() {
  return (
    <div className="App">
       <ThemeProvider>
       <PageContent>
         <LanguageContext>
         <Navbar/>
         <Forms/>
         </LanguageContext>
        </PageContent>
       </ThemeProvider>
    </div>
  );
}

export default App;
