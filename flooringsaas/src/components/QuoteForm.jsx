import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuote } from '../redux/slices/quoteSlice';

const QuoteForm = () => {
    const [quoteText, setQuoteText] = useState('');
    const dispatch = useDispatch();

    const handleAddQuote = () => {
        if (quoteText.trim()) {
            const newQuote = {
                id: Date.now(),  // unique id based on timestamp
                text: quoteText,
            };
            dispatch(addQuote(newQuote));
            setQuoteText('');
        }
    };

    return (
        <div>
            <h3>Add a New Quote</h3>
            <input
                type="text"
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                placeholder="Enter quote"
            />
            <button onClick={handleAddQuote}>Add Quote</button>
        </div>
    );
};

export default QuoteForm;
