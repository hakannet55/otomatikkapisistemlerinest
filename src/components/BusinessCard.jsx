import React from 'react';
import './BusinessCard.css';

const BusinessCard = () => {
    return (
        <div className="business-card">
            <div className="card-content">
                <h1 className="name">Volkan Kuru</h1>
                <p className="title">Otomatik Kapı Sistemleri Uzmanı</p>
                <p className="company">Çorlu Otomatik Kapı Sistemleri</p>
                <div className="contact-info">
                    <p><i className="fas fa-phone"></i> +90 542 275 55 59</p>
                    <p><i className="fas fa-map-marker-alt"></i> Çorlu, Tekirdağ</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;