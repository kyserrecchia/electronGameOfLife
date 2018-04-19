function play(){
	for(let i=1; i<=900; i++){
		let classNum = "g" + i;
		let li = document.getElementsByClassName(classNum)[0];

		//neighbor details
		let count = 0;
		let tLNum = i - 31;
		let tRNum = i - 29;
		let tNum = i - 30;
		let bLNum = i + 29;
		let bRNum = i + 31;
		let bNum = i + 30;
		let rNum = i + 1;
		let lNum = i - 1;
		let topLeft = document.getElementsByClassName("g"+tLNum)[0];
		let topRight = document.getElementsByClassName("g"+tRNum)[0];
		let top = document.getElementsByClassName("g"+tNum)[0];
		let bottomLeft = document.getElementsByClassName("g"+bLNum)[0];
		let bottomRight = document.getElementsByClassName("g"+bRNum)[0];
		let bottom = document.getElementsByClassName("g"+bNum)[0];
		let right = document.getElementsByClassName("g"+rNum)[0];
		let left = document.getElementsByClassName("g"+lNum)[0];


			//CORNERS
			//top left
			if(i==1){
				if(bottom.classList.contains('activated')){
					count+=1;
				} 
				if(bottomRight.classList.contains('activated')){
					count+=1;
				} 
				if(right.classList.contains('activated')){
					count+=1;
				} 
			}
			//top right
			else if(i==30){
				if(bottom.classList.contains('activated')){
					count+=1;
				} 
				if(bottomLeft.classList.contains('activated')){
					count+=1;
				} 
				if(left.classList.contains('activated')){
					count+=1;
				} 					
			}
			//bottom left
			else if(i==871){
				if(top.classList.contains('activated')){
					count+=1;
				} 
				if(topRight.classList.contains('activated')){
					count+=1;
				} 
				if(right.classList.contains('activated')){
					count+=1;
				}
			}
			//bottom right
			else if(i==900){
				if(top.classList.contains('activated')){
					count+=1;
				} 
				if(topLeft.classList.contains('activated')){
					count+=1;
				} 
				if(left.classList.contains('activated')){
					count+=1;
				}
			}

			//EDGES
			//top row
			else if(i>1 && i<30){
				if(right.classList.contains('activated')){
					count+=1;
				} 
				if(bottomRight.classList.contains('activated')){
					count+=1;
				} 
				if(bottom.classList.contains('activated')){
					count+=1;
				} 
				if(bottomLeft.classList.contains('activated')){
					count+=1;
				} 
				if(left.classList.contains('activated')){
					count+=1;
				}
			}
			//bottom row
			else if(i>871 && i<900){
				if(left.classList.contains('activated')){
					count+=1;
				} 
				if(topLeft.classList.contains('activated')){
					count+=1;
				} 
				if(top.classList.contains('activated')){
					count+=1;
				} 
				if(topRight.classList.contains('activated')){
					count+=1;
				} 
				if(right.classList.contains('activated')){
					count+=1;
				}
			}
			//left-most column
			else if(i>1 && i<900 && i%30==1){
				if(top.classList.contains('activated')){
					count+=1;
				} 
				if(topRight.classList.contains('activated')){
					count+=1;
				} 
				if(right.classList.contains('activated')){
					count+=1;
				} 
				if(bottomRight.classList.contains('activated')){
					count+=1;
				} 
				if(bottom.classList.contains('activated')){
					count+=1;
				}
			}
			//right-most column
			else if(i>1 && i<900 && i%30==0){	
				if(top.classList.contains('activated')){
					count+=1;
				} 
				if(topLeft.classList.contains('activated')){
					count+=1;
				} 
				if(left.classList.contains('activated')){
					count+=1;
				} 
				if(bottomLeft.classList.contains('activated')){
					count+=1;
				} 
				if(bottom.classList.contains('activated')){
					count+=1;
				}						
			}
			//all the middles
			else {	
				if(right.classList.contains('activated')){
					count+=1;
				} 
				if(bottomRight.classList.contains('activated')){
					count+=1;
				} 
				if(bottom.classList.contains('activated')){
					count+=1;
				} 
				if(bottomLeft.classList.contains('activated')){
					count+=1;
				} 
				if(left.classList.contains('activated')){
					count+=1;
				}
				if(topLeft.classList.contains('activated')){
					count+=1;
				} 
				if(top.classList.contains('activated')){
					count+=1;
				} 
				if(topRight.classList.contains('activated')){
					count+=1;
				}
				// console.log(count);
			}	

			//finally do the magic
			if(!li.classList.contains('activated') && count===3){
				li.classList.toggle('activated');
			}
			else if(li.classList.contains('activated') && count<2){	
				li.classList.toggle('activated');
			}
			else if(li.classList.contains('activated') && count>3){							
				li.classList.toggle('activated');
			}
			
		}
	}

module.exports.play = play;
