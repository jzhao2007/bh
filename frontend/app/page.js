'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { fetchChartData } from '../utils/api';
import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

export default function Home() {
  const [chartData, setChartData] = useState({
    candlestick: null,
    line: null,
    bar: null,
    pie: null,
  });
  const [selectedChart, setSelectedChart] = useState('candlestick');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestickData, lineData, barData, pieData] = await Promise.all([
          fetchChartData('candlestick'),
          fetchChartData('line-chart'),
          fetchChartData('bar-chart'),
          fetchChartData('pie-chart'),
        ]);

        setChartData({
          candlestick: candlestickData.data,
          line: lineData,
          bar: barData,
          pie: pieData,
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  const renderSelectedChart = () => {
    switch (selectedChart) {
      case 'candlestick':
        return chartData.candlestick && (
          <div className={styles.chartContainer}>
            <h2>Candlestick Chart</h2>
            <CandlestickChart data={chartData.candlestick} />
          </div>
        );
      case 'line':
        return chartData.line && (
          <div className={styles.chartContainer}>
            <h2>Line Chart</h2>
            <LineChart data={chartData.line.data} labels={chartData.line.labels} />
          </div>
        );
      case 'bar':
        return chartData.bar && (
          <div className={styles.chartContainer}>
            <h2>Bar Chart</h2>
            <BarChart data={chartData.bar.data} labels={chartData.bar.labels} />
          </div>
        );
      case 'pie':
        return chartData.pie && (
          <div className={styles.chartContainer}>
            <h2>Pie Chart</h2>
            <PieChart data={chartData.pie.data} labels={chartData.pie.labels} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <div className={styles.chartSelector}>
          <label htmlFor="chartType">Select Chart Type: </label>
          <select
            id="chartType"
            value={selectedChart}
            onChange={(e) => setSelectedChart(e.target.value)}
          >
            <option value="candlestick">Candlestick Chart</option>
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
        </div>
        <div className={styles.chartGrid}>
          {renderSelectedChart()}
        </div>
      </main>
    </div>
  );
}
