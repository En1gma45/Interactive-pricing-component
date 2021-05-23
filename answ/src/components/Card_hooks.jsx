import React, { useEffect, useState, useCallback } from 'react'
import './Card.css'

const YEAR_MULTIPLIER = 0.75*12
const MONTH_MULTIPLIER = 1

const BASE_PRICE = {
    1: 8,
    2: 12,
    3: 16,
    4: 24,
    5: 36,
  };

const VIEWERS = {
    1: '10K',
    2: '50K',
    3: '100K',
    4: '500K',
    5: '1M',
}


const Card = () => {

    const [isYear, setIsYear] = useState(false);
    const [billingType, setBillingType] = useState('month')
    const [totalPrice, setTotalPrice] = useState(0);
    const [rangeValue, setRangeValue] = React.useState(3);
    const [totalViewers, setTotalViewers] = useState(0)



    const handleRangeChange = useCallback(
        (e) => {
          setRangeValue(Number(e.target.value));
        },
        [setRangeValue]
    )
    const handleStatusChange = useCallback(
        (e) => {
            setIsYear(e.target.checked);
        },
        [setIsYear]
    )

    const handleBillingChange = useCallback(
        (e)=> {   
            setBillingType(e.target.checked ? 'year' : 'month')
        },
        [setBillingType]
    )

    useEffect(() => {
        const multiplier = isYear ? YEAR_MULTIPLIER : MONTH_MULTIPLIER;
    
        setTotalPrice(multiplier * BASE_PRICE[rangeValue]);
        setTotalViewers(VIEWERS[rangeValue])
      }, [isYear, rangeValue, setTotalPrice]);



    const renderCardHeader = () => {
        return (
            <div className="card__header">
                <div className="tariff__title">
                    <p>{totalViewers} Pageviews</p>
                    <p className="tariff__details"><b className='strong'>${totalPrice}.00</b>/<span>{billingType}</span></p>
                </div>
                <div className="card__selector"><input type="range" id="slider" className="slider" value={rangeValue}  min="1" max="5" step="1" onChange={handleRangeChange}/></div>
                <div className="card__billingSelector">
                    <p>Monthly Billing</p>
                    <label className="switch">
                        <input type="checkbox" onChange={handleStatusChange} onClick={handleBillingChange} value={isYear}/>
                        <span className="switcher round"></span>
                    </label>
                    <p>Yearly Billing <span className="percentage">25% discount</span>
                    </p>
                </div>
            </div>
        )
    }

    const renderCardFooter = () => {
        return (
            <div className="card__footer">
                <div className="card__characteristics">
                    <ul>
                        <li><span className="icon__check"></span>Unlimited websites</li>
                        <li><span className="icon__check"></span>100% data ownership</li>
                        <li><span className="icon__check"></span>Email reports</li>
                    </ul>
                </div>
                <button className="card__button">Start my trial</button>
            </div>
        )

    }

    return(
        <div className="card__container">
            <div className="header__container">{renderCardHeader()}</div>
            <div className="footer__container">{renderCardFooter()}</div>
        </div>
    )
}

export default Card



