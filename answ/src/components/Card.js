import React, { Component } from 'react'
import './Card.css'


class Card extends Component {

        constructor(props) {
        super(props);
        this.state = {
            selectedTariff: '16',
            viewers: '100K', 
            discountStatus: false,
            billingStatus: "month"
        }
    }



    tariffLogic = (value) => {
        switch(value){
            case '1':

                this.setState(()=>({
                    viewers: '10K',
                    selectedTariff: '8'
                }))
                break

            case '2':
                this.setState(()=>({
                    viewers: '50K',
                    selectedTariff: '12'
                }))
                break

            case '3':
                this.setState(()=>({
                    viewers: '100K',
                    selectedTariff: '16'
                }))
                break

            case '4':
                this.setState(()=>({
                    viewers: '500K',
                    selectedTariff: '24'
                }))
                break

            case '5':
                this.setState(()=>({
                    viewers: '1M',
                    selectedTariff: '36'
                }))
                break

            default:
                break
            
        }
    }



    setTariff = (value) =>{

        if(this.state.discountStatus){
            this.tariffLogic(value)
            this.setDiscount(this.state.discountStatus)
            console.log(this.state.selectedTariff)
        }
        else{
            this.tariffLogic(value)
            console.log(this.state.selectedTariff)
        }

        
        
    }



    setDiscount = (status) => {

        console.log(status)

        if(status){
            this.setState({selectedTariff: Number(this.state.selectedTariff)*0.75*12})
            this.setState({billingStatus: "year"})
            this.setState({discountStatus: !this.state.discountStatus})
        }
        else{
            this.setState({selectedTariff: Number(this.state.selectedTariff)/0.25/3/12})
            this.setState({billingStatus: "month"})
            this.setState({discountStatus: !this.state.discountStatus})

        }

        console.log(this.state.discountStatus)
    }

    renderCardHeader() {
        return (
            <div className="card__header">
                <div className="tariff__title">
                    <p>{this.state.viewers} Pageviews</p>
                    <p><b className='strong'>${this.state.selectedTariff}.00</b>/{this.state.billingStatus}</p>
                </div>
                <div className="card__selector"><input type="range" id="slider" className="slider" defaultValue="3" min="1" max="5" step="1" onChange={(e) => this.setTariff(e.target.value)} /></div>
                <div className="card__billingSelector">
                    <p>Monthly Billing</p>
                    <label className="switch">
                        <input type="checkbox" onClick={() => this.setDiscount(!this.state.discountStatus)} onChange={()=> this.setState({discountStatus: !this.state.discountStatus})}/>
                        <span className="switcher round"></span>
                    </label>
                    <p>Yearly Billing <span className="percentage">25% discount</span>
                    </p>
                </div>
            </div>
        );
    }

    renderCardFooter() {
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

    render() {
        return(
            <div className="card__container">
                <div className="header__container">{this.renderCardHeader()}</div>
                <div className="footer__container">{this.renderCardFooter()}</div>
            </div>
        )
    }
}

export default Card
