import React, { useState } from 'react' ;
import { StyleSheet, Text, View, TouchableOpacity, Alert }from 'react-native' ;
	export default function App() {
	// State variables
		const [displayValue, setDisplayValue] = useState( '0' );
		const [displayAns, setDisplayAns] = useState( '0' );
		const [operator, setOperator] = useState( null);
		const [firstValue, setFirstValue] = useState( '' );
		const MAX_DISPLAY_LENGTH = 13; // Adjust the maximum length as needed
		
		// Function to handle number inputs
		const handleNumberInput = (num) => {
			if (displayValue.length < MAX_DISPLAY_LENGTH) {
				if (displayValue === '0' ) {
					setDisplayValue(num.toString());
				} else {
					setDisplayValue(displayValue + num.toString());
				}
			}
		
		};



		// Function to handle operator inputs
		const handleOperatorInput = (operator) => {
			if (displayValue.length < MAX_DISPLAY_LENGTH) {
				if (displayValue !== '') {
					setOperator(operator);
					setFirstValue(displayValue + operator);
					setDisplayValue("0");
			}
			}
		};

		const calculateFontSize = () => {
			const displayLength = displayValue.length;
		      
			if (displayLength <= 5) {
			  return 100; // Set your desired font size for shorter strings
			}
			 else if(displayLength <= 9  && displayLength >= 5){
			  // Calculate a font size based on the length of the string
			  return 70; // Adjust the divisor as needed for your design
			}
			 else if(displayLength <= 13  && displayLength >= 9){
			  // Calculate a font size based on the length of the string
			  return 50; // Adjust the divisor as needed for your design
			}else{
				return 40
			}
		      };
		const calcSize = () => {
			const displayLength = displayAns.length;
		      
			if (displayLength <= 5) {
			  return 40; // Set your desired font size for shorter strings
			}
			 else if(displayLength <= 9  && displayLength >= 5){
			  // Calculate a font size based on the length of the string
			  return 30; // Adjust the divisor as needed for your design
			}
			 else if(displayLength <= 13  && displayLength >= 9){
			  // Calculate a font size based on the length of the string
			  return 20; // Adjust the divisor as needed for your design
			}else{
				return 20
			}
		      };

		// Function to handle equal button press
		const handleEqual = () => {
			const num1 = parseFloat(firstValue);
			const num2 = parseFloat(displayValue);
			
			if (displayValue.length < MAX_DISPLAY_LENGTH) {
				if (operator === '+' ) {
					setDisplayAns((num1 + num2).toString());
				} else if (operator === '-' ) {
					setDisplayAns((num1 - num2).toString());
				} else if (operator === 'x') {
					setDisplayAns((num1 * num2).toString());
				} else if (operator === '/' ) {
					setDisplayAns((num1 / num2).toString());
				}
				setOperator( null);
				setFirstValue( '' );
			}
		};

		const handleDecimalPoint = () => {
			if (!displayValue.includes('.')) {
				setDisplayValue(`${displayValue}.`);
				} 
		}

		// Function to handle clear button press
		const handleClear = () => {
			setDisplayValue('' );
			setDisplayAns('' );
			setOperator( null);
			setFirstValue( '' );
		};

			return (
			<View style={styles.container}>
				<View style={styles.displayContainer}>

					<Text style={[styles.displayText, {fontSize: calculateFontSize()}]}>
						{displayValue}
					</Text>
					<Text style={[styles.displayText, {fontSize: calcSize(), fontWeight: "normal"}]}>
						{displayAns}
					</Text>
				</View>

				<View style={styles.buttonContainer}>

					<View style={[styles.row]}>
						<TouchableOpacity style={styles.clearButton} onPress={handleClear}>
							<Text style={styles.clearButtonText}>C</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button,styles.buttonX, styles.operatorButton]} onPress={() => handleOperatorInput( 'x')}>
							<Text style={[styles.buttonText,styles.operatorButtonText]}>×</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button,styles.buttonD, styles.operatorButton]} onPress={() => handleOperatorInput( '/' )}>
							<Text style={[styles.buttonText,styles.operatorButtonText]}>÷</Text>
						</TouchableOpacity>

						<TouchableOpacity onLongPress={() => handleClear()} style={[styles.button,styles.buttondel, styles.backspaceButton, {height: 70,width: 70,}]} onPress={()=> setDisplayValue(displayValue.slice(0,-1)) }>
							<Text style={[styles.operatorButtonText, {fontSize: 30}]}>del</Text>
						</TouchableOpacity>

					</View>
					<View style={styles.row}>

					<TouchableOpacity style={[styles.button, styles.button7]} onPress={() => handleNumberInput(7)}>
							<Text style={styles.buttonText}>7</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button, styles.button8]} onPress={() => handleNumberInput(8)}>
							<Text style={styles.buttonText}>8</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button, styles.button9]} onPress={() => handleNumberInput(9)}>
							<Text style={styles.buttonText}>9</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button, styles.buttonM, styles.operatorButton]} onPress={() => handleOperatorInput( '-' )}>
							<Text style={[styles.buttonText,styles.operatorButtonText]}>−</Text>
						</TouchableOpacity>

					</View>
					
					<View style={styles.row}>

						<TouchableOpacity style={[styles.button, styles.button4]} onPress={() => handleNumberInput(4)}>
							<Text style={styles.buttonText}>4</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button, styles.button5]} onPress={() => handleNumberInput(5)}>
							<Text style={styles.buttonText}>5</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button, styles.button6]} onPress={() => handleNumberInput(6)}>
							<Text style={styles.buttonText}>6</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.button,styles.buttonP, styles.operatorButton]} onPress={() => handleOperatorInput( '+' )}>
							<Text style={[styles.buttonText,styles.operatorButtonText]}>+</Text>
						</TouchableOpacity>


						

					</View>

					<View style={[styles.row, {justifyContent: "space-between"}]}>
						<View>
							<View style={[{flexDirection: "row", }]}>
									<TouchableOpacity style={[styles.button, styles.button1]} onPress={() => handleNumberInput(1)}>
										<Text style={styles.buttonText}>1</Text>
									</TouchableOpacity>

									<TouchableOpacity style={[styles.button, styles.button2]} onPress={() => handleNumberInput(2)}>
										<Text style={styles.buttonText}>2</Text>
									</TouchableOpacity>

									<TouchableOpacity style={[styles.button, styles.button3]} onPress={() => handleNumberInput(3)}>
										<Text style={styles.buttonText}>3</Text>
									</TouchableOpacity>
							</View>

								<TouchableOpacity style={[styles.button, styles.zeroButton,styles.button0]} onPress={() => handleNumberInput(0)}>
									<Text style={[styles.buttonText,styles.zeroButtonText]}>0</Text>
								</TouchableOpacity>

										
								<TouchableOpacity style={[styles.button, styles.buttonPoint]} onPress={handleDecimalPoint}>
									<Text style={[styles.operatorButtonText, {fontSize: 30}]}>.</Text>
								</TouchableOpacity>

						</View>

						<TouchableOpacity style={[styles.equalButton, styles.buttonE]} onPress={handleEqual} >
							<Text style={styles.equalButtonText}>=</Text>
						</TouchableOpacity>

					</View>
					
			</View>
		</View>
		);
}
	// Styles
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#0e0e0e' ,
			alignItems: 'center' ,
			justifyContent: 'center' ,
		},
		displayContainer: {
			flex: 2,
			justifyContent: "flex-end" ,
			alignItems: "flex-end",
			padding: 20,
			width: "100%",
			backgroundColor: "#1b1b1b",
			borderBottomLeftRadius: 27,
			borderBottomRightRadius: 27
		},
		displayText: {
			// fontSize: 90,
			color: '#fff' ,
			fontWeight: "100",
			
		},
		buttonContainer: {
			flex: 3,
			width: '93%' ,
			marginBottom: 20
		},
		row: {
			flex: 1,
			flexDirection: 'row' ,
			justifyContent: 'space-between' ,
			marginBottom: 10,
		},
		button: {
			borderRadius: 15,
			alignItems: 'center' ,
			justifyContent: 'space-between' ,
			backgroundColor: '#4e4e4eab' ,
			elevation: 3,
			margin: 2,
			height:70,
			width:70,
			padding: 15,
		},
		buttonX: {
			position: "absolute",
			left: 85,
			bottom:21
		},
		buttonD: {
			position: "absolute",
			right: 84,
			bottom:21
		},
		buttondel: {
			position: "absolute",
			right: -3,
			bottom:21
		},
		button7: {
			position: "absolute",
			left: -3,
			bottom:39
		},
		button8: {
			position: "absolute",
			left: 85,
			bottom:39
		},
		button9: {
			position: "absolute",
			right: 84,
			bottom:39
		},
		buttonM: {
			position: "absolute",
			right: -3,
			bottom:39,
			backgroundColor: "#ffae00"
		},
		button4: {
			position: "absolute",
			left: -3,
			bottom:57
		},
		button5: {
			position: "absolute",
			left: 85,
			bottom:57
		},
		button6: {
			position: "absolute",
			right: 84,
			bottom:57
		},
		buttonP: {
			position: "absolute",
			right: -3,
			bottom:57
		},
		button1: {
			position: "absolute",
			left: -3,
			bottom:-20
		},
		button2: {
			position: "absolute",
			left: 85,
			bottom:-20
		},
		button3: {
			position: "absolute",
			left: 180,
			bottom:-20
		},
		buttonPoint: {
			position: "absolute",
			left: 180,
			bottom: -4
		},
		button0: {
			position: "absolute",
			left: -3,
			bottom: -4
		},
		buttonE: {
			position: "absolute",
			width: 70,
			height:150,
			right: -3,
			bottom: -4,
			borderRadius: 15
		},
		buttonText: {
			fontSize: 34,
			color: '#ffffff' ,
		},
		zeroButton: {
			// flex: 2,
			// paddingLeft: 35,
			// paddingRight: 35,
			textAlign: "center",
			justifyContent: "center",
			width: 160
		},
		zeroButtonText: {
			// marginLeft: 10,
			fontSize: 35,
		},
		operatorButton: {
			backgroundColor: '#ffae00' ,

		},
		operatorButtonText: {
			color: '#ffffff' ,
		},
		equalButton: {
			flex: 1,
			borderRadius: 50,
			alignItems: 'center' ,
			justifyContent: 'center' ,
			backgroundColor: '#07c455' ,
			elevation: 3,
		},
		backspaceButton: {
			backgroundColor: "#f5aa08"
		},
		equalButtonText: {
			fontSize: 32,
			color: '#fff' ,
		},
		clearButton: {
			borderRadius: 50,
			alignItems: 'center' ,
			justifyContent: 'center' ,
			opacity: 0.8,
			backgroundColor: '#91051c' ,
			height: 70,
			width: 70,
			marginTop: 10,
			elevation: 3,
			padding: 10,
		},
		clearButtonText: {
			fontSize: 24,
			color: '#e27688' ,
		},
	});

