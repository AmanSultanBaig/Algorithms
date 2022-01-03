
	function Withdrawal(amount) {
    	let transactionCharges = 0.05;
        let userBalance = 5000;

        if(amount % 5 === 0){
        	if(amount + transactionCharges <= userBalance){
        		userBalance = amount - transactionCharges;
            	console.log(`Your Current Balance ${userBalance}`)
        	} else {
            	console.log(`You have insufficient balance to perform transaction.`)
        	}
       	} else {
            console.log(`Error Invalid input for transaction.`)
        }
    }
    
    Withdrawal(1000)
