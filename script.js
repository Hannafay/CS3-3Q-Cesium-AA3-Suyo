function condiFunc() {
      let message = prompt ('Enter a message: ');
	  
	  if (message.includes("AI") || message.includes("aI") || message.includes("Ai")) {
	      document.getElementId('result').innerHTML = 'The message "${message}" is tampered with.';
	  }
      else if (message.includes("FR") || (message.includes("FR") && message.includes("AI"))) {
          document.getElementId('result').innerHTML  = 'The message "${message}" is legitimate.';
      }
      else {
           document.getElementId('result').innerHTML  = 'The message "${message}" is yet to be encoded. ';
      }
    }	  
