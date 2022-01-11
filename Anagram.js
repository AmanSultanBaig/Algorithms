function ValidAnagram(str1, str2) {
    	let sorted1 = str1.split('').sort().join('').toLowerCase();
        let sorted2 = str2.split('').sort().join('').toLowerCase()
               
        if(sorted1 === sorted2) {
        	console.log("Anagram")
        }else {
        	console.log("Not an Anagram")
        }
    }
    
ValidAnagram("danger", "garden")
