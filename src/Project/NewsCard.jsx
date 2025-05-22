import React from 'react';

const NewsCard = ({ article }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600' }}>{article.title}</h2>
            {article.urlToImage && (
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        marginTop: '10px',
                        borderRadius: '6px'
                    }}
                />
            )}
            <p style={{ marginTop: '10px' }}>{article.description}</p>
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: '#1e90ff',
                    textDecoration: 'underline',
                    display: 'inline-block',
                    marginTop: '10px'
                }}
            >
                Читать далее
            </a>
        </div>
    );
};

export default NewsCard;