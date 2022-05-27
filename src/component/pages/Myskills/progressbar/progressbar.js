import React from 'react'

const Progressbar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: '15px',
		width: '400px',
		backgroundColor:'yellow',
		borderRadius: 40,
		margineLeft:50,
	}
	
	const Childdiv = {
		height: '15px',
		width: '390px',
		backgroundColor: 'green',
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 1,
		color: 'black',
		fontWeight: 1
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
    <span style={progresstext}>{`${progress}`}</span>
	</div>
	</div>
	)
}

export default Progressbar;
