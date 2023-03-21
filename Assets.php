<?php

$server_name = "localhost";
$user_name = "root";
$password = "";
$DBNAME ="Assets";

$connection = mysqli_connect($server_name, $user_name, $password, $DBNAME);

    function UpdateAssets(){

    }

?>

<html>
    
    <head>
   <link rel="stylesheet" href="Assets.css">k
    </head>
    
    <body>
       
        <button class="asset_btns">+</button> <button class="asset_btns" style="float:right;"><></button>

    <form action="POST"id="investopia_form" >   
    
     <h1> ::Investopia::</h1>
        <h2> Make an alteration?</h2>
        <div id="asset_action_div">
        
            <span class="TxSt" value="BUY"> <input type="radio" name="TXtype" value="BUY"></input>
            <label for="asset_Buy">BUY</label> </span>
        
            <span class="TxSt" value="SELL"> <input type="radio" name="TXtype" value="SELL"></input>
            <label for="asset_Sell">SELL</label> </span>

            <span class="TxSt" value="SWAP"> <input type="radio" name="TXtype" value="SWAP"></input>
            <label for="asset_Swap">SWAP</label> </span>

        </div>

        <div id="asset_typePicker_div">
            <div id="asset_class_div">
                <p>Asset:</p>
                <select name="Type_Ticker" id="Type_Ticker">
                <option value="Stocks">Stocks</option>
                <option value="Crypto">Crypto</option>
                <option value="NFT">NFT</option>
                </select>
            </div>
        
            <div id="asset_ticker_div">
                <p> Ticker: </p>
                <!--  <input type="text" id="asset_newTicker_input" onchange="ChangeAssetTicker()">
                -->    
                <select name="Ticker" id="Ticker">
                    <option value="$NEW$"></option>
                    <option value="BTC">BTC</option>
                    <option value="GOOG">GOOG</option>
                    <option value="MSFT">MSFT</option>

                </select> 
            </div>
        </div>
        <div id="asset_currency_div">
            <p>Amount: $</p>
            <input type="number" name="Currency_Input" id="Currency_Input"></input>
        
            <select name="Currency" id="Currency">
                <option value="AUD">AUD</option>
                <option value="USD">USD</option>
                <option value="YEN">YEN</option>
            </select>
        </div>
    
        <button type="submit">Submit</button>
            
    </form>
    <script src="Finance.js" type="text/javascript"></script>
    <script> 
    
    
    let page = document.getElementById('investopia_form');
        let switchAlterationPage = function(){ page.style.display=="none"?page.style.display="":page.style.display="none";}
        let S3t = function (e) {
            
        }
        function ChangeAssetTicker(e){

        }
        page.addEventListener('click', function (event) { let e = event.target;
            console.log("checking = \ntarg:"+e.tagName+"\ntarg-inner:"+e.innerText );
            if(!["BUY","SELL","SWAP"].includes(e.innerText) || e.tagName!='LABEL' && e.tagName!='SPAN' )return;
            document.querySelector('input[value="'+e.innerText+'"]').checked=true; // console.log('***');
        });
    </script>
    </body>
</html>


<!--/*function CreateTable(){

    CREATE DATABASE Assets;
    USE assets;
    
    CREATE TABLE investments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        tickerID VARCHAR(10) NOT NULL,
        action VARCHAR(4),
        action_date DATE NOT NULL,
        currency VARCHAR(3) NOT NULL,
        val DECIMAL(10,2) NOT NULL,
        amount DECIMAL(12,2) NOT NULL,
    );
}*/