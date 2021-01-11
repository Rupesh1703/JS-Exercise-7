
    let row_one = 10;
    let col_one = 10;
    let row_tre = row_one - 1;
   
    let col = col_one - 1;
 
    let start = 1;
    let count = 0;
    let aary = [];
    for (let row_two = 0; row_two < row_one; row_two++) {
        aary[row_two] = [];
        for (let col_two = 0; col_two < col_one; col_two++) {
            aary[row_two][col_two] = 0;
        }
    }
 
    
    
    
    for(let row=0;row <= row_tre;row++) {
        for(let left=0;left<=col;left++){
        if(count % 4==0) {
            
                for (let col_two = left; col_two <= col; col_two++) {
                    aary[row][col_two] = start++;
                }
                
                var r=row++;
                count++;
            }
            if(count%4==1){
                for (let row_two = r+1; row_two <= row_tre; row_two++) {
                    aary[row_two][col] = start++;
                }
                col--;
                count++;
            }
            if(count%4==2){
                for (let col_two = col; col_two >= left; col_two--) {
                    aary[row_tre][col_two] = start++;
                }
                row_tre--;
                count++;
            }
            if(count%4==3){
                for (let row_two = row_tre; row_two >= row; row_two--) {
                    aary[row_two][left] = start++;
                }
                
                count++;
            }
        
    }
    
    }
    
    console.log(aary.map(r => r.join(' ')).join('\n'));
