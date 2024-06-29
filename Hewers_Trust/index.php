<script src="https:/www.jackewers.com/JS/KeyFunctions.js" type="text/javascript"><!-- Adds key functions--></script>
<script src="/index.js" type="text/javascript"></script>
<?php
include('../PHP/GetUsers.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hewers-Trust</title>

    <link rel="stylesheet" href="Hewers.css">
    <link rel="stylesheet" href="/BloodWeb_Styles.css">
</head>

<body onload="loadFinance()">

    <button id="RtT_Switch" onclick="ScrollHome()">&DoubleUpArrow;</button>


    <header class="loggedOUT">    
        <button id="Trust_Extend_Switch" class="T_E_S" onclick="ToggleEscrow()"><i id="TES_0">Show</i>/<i id="TES_1" style="color:red;">Hide</i> <br> Escrow</button>
        <h1 id="Hewers_Trust_Title" class="Power_Text">The Hewers Family Trust<br></h1>
        <h2>
            <nav id="Finance_Keys">
               <!-- <button id="Check_Details_Switch" class="Finance_NavButtons">Details</button>
                <button id="Key-Dates_Switch" class="Finance_NavButtons">Key-Dates</button>
                <button id="Check_Members_Switch" class="Finance_NavButtons Select_Holdings">Members</button>
                <button id="Check_Holdings_Switch" class="Finance_NavButtons">HODLings</button>-->
            </nav>
        </h2>
    </header>
    <hr style="margin:0 auto;">
        <main class="loggedOUT" id="Finance_FrontsidePage">
        <!--   
            <button id="Currency_Switch" class="T_E_S" onclick="Finance_Tools.convertValues();">Currency<br>(AUD)</button>  
        -->
            <div id="Escrow_Div" hidden style="display: none;">
                <p>Total held in escrow:
                    <input class="eNum Currency" type="password" id="Escrow_NUM" readonly="readonly"></input>
                </p>
                <p style="display: block;">Market Cap
                    <input class="eNum Currency" id="Escrow_MC" readonly="readonly"></input>
                </p>

            </div>
           


            <div id="Build_Area" class="Finance_Divs">
                <!--  
                    Main nav elements constructed here
                    => Build_Hewers_NavPage(page)
                    == BuildReport() ?? BuildList()
                -->
            </div>
          
            <div id="Check_Holdings" class="Finance_Divs" hidden>//Currently Unavailable</div>
    
 </main>  
 <div id="Holdings_Div" class="Finance_Divs"> </div>
   <h6>
                <p><hr>
                This site is currently in restriced alpha, access to the `Hewers Trust`
                is limited to select members and certain operabilty may be limited
            <br>if you have any issues, <br>
                <button onclick="location.href='mailto:Webmaster@jackewers.com?subject=Hewers%20Trust%20bug%20report&body=Hi%20there,%20i%20am%20reporting%20the%20following%20bug:%20'">Email Me<b style="vertical-align: middle;color:blue; font-size: xx-large;">&hearts;</b></button>
                <button onclick="location.href='tel:+61479000429'">Call me <b style="vertical-align: middle;color:blue; font-size: xx-large;">&phone;</b></button>
            </p>
            <hr>
            &hearts;
        </h6>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="Finance.js"></script>
       
</body>

</html>

    <!-- The Modal (contains the Sign Up form) 
    <div id="Sign_Up_modal" class="modal">
        <span onclick="document.getElementById('Sign_Up_modal').style.display='none'" class="close"
            title="Close">&times; F</span>
        <form class="modal-content" action="../Signup.php">
            <div class="container">
                <h1>Sign Up\</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <label for="name"><b>Full name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required>

                <label for="email"><b>Email / PhoneNumber</b></label>
                <input type="text" placeholder="JohnDoe@gmail.com / 0412000291" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

                <label>
                    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                </label>

                <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

                <div class="clearfix">
                    <button type="button" onclick="document.getElementById('Sign_Up_modal').style.display='none'"
                        class="cancelbtn">Cancel</button>
                    <button type="submit" class="signup">Sign Up</button>
                </div>
            </div>
        </form>
    </div>-->