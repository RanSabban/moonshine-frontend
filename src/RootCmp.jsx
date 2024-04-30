import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './pages/AppHeader';
import { CollectionsIndex } from './pages/CollectionsIndex';

export function RootCmp() {
    return (
        <BrowserRouter>
            <AppHeader />
            <main className='main-layout'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/collections" element={<CollectionsIndex />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
