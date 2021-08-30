import React from 'react';
import s from './Statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
        <p className={s.name}>Good: {good}</p>
        <p className={s.name}> Neutral: {neutral}</p>
        <p className={s.name}>Bad: {bad}</p>
        <p className={s.name}>Total: {total}</p>
        <p className={s.name}>Positive %: {positivePercentage}</p>
        </>
    );
}

export default Statistics;