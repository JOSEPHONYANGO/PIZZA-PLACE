$(function).(){
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $('#checkout').click(function(){
        let flavor=$(".flavor option:selected").val();
        let size=$("#size option:selected").val();
        let crust=$("#crust option:selected").val();
        let toppings=$("#toppings option:selected").val();
        let number=$("#number").val();
        console.log(size)

        // function order 

        let order=(f,s,c,t,n,total)=>{
            return{f,s,c,t,n,total}
        }

        // check price
        let price,totalPrice;
        switch(flavour){
            case flavour="chicken":
                switch(size){
                    case size="small":
                        price=300;
                        if(crust==="thin"){
                            totalPrice=(price*number)+150;
                        }else if(crust==="thick"){
                            totalPrice=(price*number)+180;
                        }else {
                            totalPrice=(price*number)+200;
                        }
                        break;
                        case size="medium":
                            price=600;
                            if(crust==="thin"){
                                totalPrice=(price*number)+150;
                            }else if(crust==="thick"){
                                totalPrice=(price*number)+180;
                            }else{
                                totalPrice=(price*number)+200;
                            }
                            break;
                            case size="large":
                                price=1200;
                                if(crust==="thin"){
                                    totalPrice=(price*number)+150;
                                }else if(crust==="thick"){
                                    totalPrice=(price*number)+180;
                                }else{
                                    totalPrice=(price*number)+200;
                                }
                                break;
                }
                break;
                case flavor="mushroom":
                    switch (size){
                        case size="small":
                            price=300;
                            if(crust==="thin"){
                                totalPrice=(price*number)+150;
                            }else if(crust==="thick"){
                                totalPrice=(price*number)+180;
                            }else{
                                totalPrice=(price*number)+200;
                            }
                            break;
                     
                    case size="medium":
                    price=600;
                    if(crust==="thin"){
                        totalPrice=(price*number)+150;
                    }else if(crust==="thick"){
                        totalPrice=(price*number)+180;
                    }else{
                        totalPrice=(price*number)+200;
                    }
                    break;

                    case size="large":
                        price=1200;
                        if(crust==="thin"){
                            totalPrice=(price*number)+150;                           
                        }else if(crust==="thick"){
                            totalPrice=(price*number)+180;
                        }else{
                            totalPrice=(price*number)+200;
                        }
                        break;
                    }
                    break;
                    case flavor="vegetikka":
                        switch (size){
                            case size="small":
                                price=300;
                                if(crust==="thin"){
                                    totalPrice=(price*number)+150;
                                }else if(crust==="thick"){
                                    totalPrice=(price*number)+180;
                                }else{
                                    totalPrice=(price*number)+200;
                                }
                                break;
                                case size="medium":
                                    price=600;
                    if(crust==="thin"){
                        totalPrice=(price*number)+150;
                    }else if(crust==="thick"){
                        totalPrice=(price*number)+180;
                    }else{
                        totalPrice=(price*number)+200;
                    }
                    break;
                    case size="large":
                        price=600;
        if(crust==="thin"){
            totalPrice=(price*number)+150;
        }else if(crust==="thick"){
            totalPrice=(price*number)+180;
        }else{
            totalPrice=(price*number)+200;
        }
        break;
    }
    break;
    case flavor="hawaiian":
        switch(size){
            case size="small":
                price=300;
                if(crust==="thin"){
                    totalPrice=(price*number)+150;
                }else if(crust==="thick"){
                    totalPrice=(price*number)+180;
                }else{
                    totalPrice=(price*number)+200;
                }
                break;
                case size="medium":
                    price=600;
                    if(crust==="thin"){
                        totalPrice=(price*number)+150;
                    }else if(crust==="thick"){
                        totalPrice=(price*number)+180;
                    }else{
                        totalPrice=(price*number)+200;
                    }
                    break;
                    case size="large":
                        price=600;
                    if(crust==="thin"){
                        totalPrice=(price*number)+150;
                    }else if(crust==="thick"){
                        totalPrice=(price*number)+180;
                    }else{
                        totalPrice=(price*number)+200;
                    }
                    break;
                }
                break;
                case flavor="bbq":
                    switch(size){
                        case size="small":
                            price=300;
                            if(crust==="thin"){
                                totalPrice=(price*number)+150;
                            }else if(crust==="thick"){
                                totalPrice=(price*number)+180;
                            }else{
                                totalPrice=(price*number)+200;
                            }
                            break;
                            case size="medium":
                                price=600;
                                if(crust==="thin"){
                                    totalPrice=(price*number)+150;
                                }else if(crust==="thick"){
                                    totalPrice=(price*number)+180;
                                }else{
                                    totalPrice=(price*number)+200;
                                }
                                break;
                                case size="large":
                                    price=600;
                                if(crust==="thin"){
                                    totalPrice=(price*number)+150;
                                }else if(crust==="thick"){
                                    totalPrice=(price*number)+180;
                                }else{
                                    totalPrice=(price*number)+200;
                                }
                                break;
                            }
                            break;
                        }
                        switch(toppings){
                            case toppings="tomato":
                                totalPrice=totalPrice+50;
                                break;
                                case toppings="onions":
                                totalPrice=totalPrice+50;
                                break;
                                case toppings="olive":
                                totalPrice=totalPrice+80;
                                break;
                                case toppings="mushroom":
                                totalPrice=totalPrice+80;
                                break;
                        }

                        // Execute Order Function
                        let newOrder=order(flavor,size, crust, topping, number, totalPrice);
                        console.log(newOrder);

                        // write to the order
                        $('.summary').slideDown(2000);
                        $('.cdata-overlay').slideUp();
                        $('#list').slideDown();
                        $('.deliver').show(1000);
                        $('.delivernot').show(1000);
                        
                    }
                    


                 
        

                

    

       

    )}
