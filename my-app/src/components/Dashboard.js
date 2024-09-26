// components/Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [stats, setStats] = useState({
        wins: 0,
        losses: 0,
        draws: 0,
        totalMoves: 0,
        avgMoves: 0,
    });

    useEffect(() => {
        // Fetch stats from the server
        const fetchStats = async () => {
            const response = await fetch('http://localhost:5000/api/stats');
            const data = await response.json();
            setStats(data);
        };

        fetchStats();
    }, []);

    return (
        <div>
            <h2>Your Dashboard</h2>
            <ul>
                <li>Wins: {stats.wins}</li>
                <li>Losses: {stats.losses}</li>
                <li>Draws: {stats.draws}</li>
                <li>Total Moves: {stats.totalMoves}</li>
                <li>Average Moves: {stats.avgMoves}</li>
            </ul>
        </div>
    );
};

export default Dashboard;
