import React, { Component } from 'react';

// Import components
import Widget from '../components/Widget';
import BurgerDisplay from '../components/BurgerDisplay';
import PizzaDisplay from '../components/PizzaDisplay';
import Progress from '../components/Progress';
import Repeat from 'react-repeat-component';
import CountUp from '../components/NumberCountUp';

//Import styling
import '../styles/NumberWidget.css';

class MealsWidget extends Component {

	// cannot work if Class extend other class...
	/*
	getDefaultProps() {
		return {
			foodArr: []
		}
	}
	*/

	static defaultProps = {
		foodArr: []
	}

    // Decide whether to show widget
    showWidget() {
        // Show loading indicator while initial data is being fetched
        if (this.props.value === undefined) {
            return <p>Loading...</p>;
        }
		
		let burgerCount = Math.floor( this.props.value / 550 )
		let pizzaCount = Math.floor( this.props.value / 300 )
	

		for(let i=0; i<burgerCount; i++){
			console.log('adding burger icon...')
			this.props.foodArr.push ({id:i, foodType: 'burger'});
		}

		for(let i=0; i<pizzaCount; i++){
			console.log('adding pizzas icon...')
			this.props.foodArr.push ({id:i, foodType: 'pizza'});
		}
		

        // start displaying element to HTML
		return (
			/*
			<Repeat times={burgerCount}>
			{(i) => 
				<div className="mealItem" key={i}>
					<BurgerDisplay />
				</div>
			}
			</Repeat>
			*/
			
			<div>
				<h1 style={{
						float:'right',
						marginTop: '-74px',
						paddingBottom:'3px',
						marginRight: '4.6%',
						fontSize: '38px',
						color: 'darkorange',
						//textShadow: '1px 2px 4px #000000aa',
						//opacity: '0.9',
						textDecoration: 'underline'

					}}
				>
					<CountUp start={0} end={this.props.value} duration='justify' > <span>Calories</span> </CountUp>
				</h1>

				<h1> Equals to:</h1>
				<div>
					{this.props.foodArr.filter(function(satuan) {
						return satuan.foodType == 'burger';	
					})
		
					.map(function(satuan, idx, array){
							return (
								<div className="mealItem" >
									<BurgerDisplay key={satuan.id}/>
								</div>
							)
					 })
					}
				<h4 className="food_name"><u>{burgerCount} <i>Big Macs</i></u></h4> 
					
				</div>

				<h3 className="center_txt">OR,</h3>

				<div>

					{this.props.foodArr.filter(function(satuan) {
						return satuan.foodType == 'pizza';	
					})
		
					.map(function(satuan, idx, array){
							return (
								<div className="mealItem" >
									<PizzaDisplay key={satuan.id}/>
								</div>
							)
					 })
					}
				</div>
				<h4 className="food_name"><u>{pizzaCount} slices of pizza.</u></h4> 

			</div>
		);
    }


    render() {
        return (
            // Wrap the number display component in the generic wrapper
            <Widget className='mealsRow' heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                {this.showWidget()}
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
MealsWidget.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
    loading: React.PropTypes.bool.isRequired,
    min: React.PropTypes.number,
    max: React.PropTypes.number
}

export default MealsWidget;