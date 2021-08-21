<template>
  <router-view/>
</template>

<style>
.container {
    margin: 0 auto;
    padding: 0 40px;
    max-width: 1100px;
    overflow: auto;
}

.card {
    margin: 10px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.btn {
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    display: inline-block;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
}

.btn-outline {
    border: 1px solid #fff;
    background: transparent;
}

.btn:hover {
    transform: scale(0.90); 
    transition-duration: 0.5s;
}

/* Backgrounds & Coloured buttons */

.bg-primary,
.btn-primary {
    background-color: var(--primary-color);
    color: #fff;
}

.bg-secondary,
.btn-secondary {
    background-color: var(--secondary-color);
    color: #fff;
}

.bg-light,
.btn-light {
    background-color: var(--light-color);
    color: #333;
}

.bg-dark,
.btn-dark {
    background-color: var(--dark-color);
    color: #fff;
}

.bg-primary a,
.btn-primary a,
.bg-secondary a,
.btn-secondary a,
.bg-dark a,
.btn-dark a {
    color: #fff;
}

        /* Text Colors */

.text-primary {
    background-color: var(--primary-color);
    color: #fff;
}

.text-secondary {
    background-color: var(--secondary-color);
    color: #fff;
}

.text-light {
    background-color: var(--light-color);
    color: #333;
}

.text-dark {
    background-color: var(--dark-color);
    color: #fff;
}

/* Text Sizes */

.lead {
    font-size: 20px;
}

.sm {
    font-size: 1rem;
}

.md {
    font-size: 2rem;
}

.lg {
    font-size: 3rem;
}

.xl {
    font-size: 4rem;
}

        /* Alert */

.alert {
    background-color: var(--light-color);
    padding: 10px 20px;
    font-weight: bold;
    margin: 15px 0;
}

.alert i {
    margin-right: 10px;
}

.alert-success {
    background-color: var(--success-color);
    color: #fff;
}

.alert-error {
    background-color: var(--error-color);
    color: #fff;
}


        /* Position */

.text-center {
    text-align: center;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.grid-3 {
    grid-template-columns: repeat(3, 1fr);
}

        /* Margin */


.m-1 {
    margin: 1rem;
}

.m-2 {
    margin: 1.5rem;
}

.m-3 {
    margin: 2rem;
}

.m-4 {
    margin: 3rem;
}

.m-5 {
    margin: 4rem;
}

.mx-1 {
    margin: 0 1rem;
}

.mx-2 {
    margin: 0 1.5rem;
}

.mx-3 {
    margin: 0 2rem;
}

.mx-4 {
    margin: 0 3rem;
}

.mx-5 {
    margin: 0 4rem;
}

.my-1 {
    margin: 1rem 0;
}

.my-2 {
    margin: 1.5rem 0;
}

.my-3 {
    margin: 2rem 0;
}

.my-4 {
    margin: 3rem 0;
}

.my-5 {
    margin: 4rem 0;
}


        /* Padding */

.p-1 {
    padding: 1rem;
}

.p-2 {
    padding: 1.5rem;
}

.p-3 {
    padding: 2rem;
}

.p-4 {
    padding: 3rem;
}

.p-5 {
    padding: 4rem;
}


        /* Specific CSS LINES */


@import url('https://fonts.googoleapis.com/css2?family=Lato:wght@300&display=swap');

*{
    box-sizing: content-box;
    padding: 0;
    margin: 0;
    /*font-size: 14px;*/
}

body{
    font-family: 'Lato', sans-serif;
    color: #333;
    line-height: 1.6;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
    color: #333;
}

h1,h2{
    font-weight: 300;
    line-height: 1.2;
    margin: 10px 0;
    
}

img{
    width: 100%;
}

.navbar{
    background-color: #0c3b79;
    color: white;
    height: 70px;
}

.navbar ul{
    display: flex;
}

.solution a{
  font-size: 12px;
  color:#34d015;
  float: right;
  font-weight: 500;
}
.solution a:hover{
transform:scale(1.2) ;
}
.solution p{
  padding:4%;
}

.navbar a{
color: white;
padding: 10px;
margin: 0 3%;
}

.navbar a:hover{
    border-bottom: 1px solid white;
}
.navbar .flex{
    justify-content: space-between;
}

/*Showcase*/

.showcase{
  font-size: 18px;
    background-color: #0c3b79;
    color: #fff;
    height: 400px;
    position: relative;
    margin-bottom: 13%
}

.showcase h1{
    font-size: 35px;
}

.showcase p{
    margin: 20px 0;
}

.showcase .grid{
    grid-template-columns: 55% 45%;
    gap: 30px;
}

.showcase-form{
    position: relative;
    top: 60px;
    height: 350px;
    width: 400px;
    padding: 40px;
    z-index: 100;
    
}

.showcase-form .form-control{
    margin: 30px 0;
}

.showcase-form input[type="text"],
.showcase-form input[type="email"]{
    border: 0;
    border-bottom: 1px solid #b4becb ;
    padding: 3px;
    width: 100%;
    font-size: 16px;

}
.showcase-form input:focus{
    outline: none;
}

.showcase::before,
.showcase::after {
    content: "";
    position: absolute;
    height: 100px;
    bottom: -70px;
    right: 0;
    left: 0;
    background-color: white;
    
}

/*Utilities*/
.container{
    max-width: 1100px;
    margin: 0 auto;
    overflow: auto;
    padding: 0 40px;
}


.btn{
    display: inline-block;
    padding: 10px 30px;
    cursor: pointer;
    background-color: #0c3b79;
    color: #fff;
    border: none;
    border-radius: 5px;

}
.btn-outline{
    background-color: transparent;
    border: 1px solid #fff;
}

.btn:hover{
    transform: scale(0.98);
}




.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: visible;
}
.grid-1{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: visible;
    color: #333;
    margin-bottom: 3% ;
}
.grid-1 h3:hover{
    transform: scale(0.98);
    opacity: 1;
}
.adjust{
    text-align: justify;
    max-width: 900px;
    
}
.adjust h1{
    font-size: 18px;
    font-weight: 900;
    text-align: start;
}



@media(max-width: 950px){
    .grid,
    .grid-1,
    .showcase .grid{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        
    }
    .showcase{
        height: auto;
    }
    .showcase-text{
        text-align: center;
        margin-top: 40px;
    }
    .showcase-form{
        justify-self: center ;
        margin: auto;
    }
    .btn-outline{
        margin-bottom: 10%;
    }
    .mack{
      font-size: 10px;
    }
   
}





@media(max-width: 500px) {
    .navbar{
        height: 130px;
    }
    .navbar .flex{
        flex-direction: column;
    }
    .navbar ul{
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.1);
    }
    .showcase{
        margin-bottom: 20%;
    }
    .social{
    bottom: 0px;
    z-index: 10;
    display: inline-flex;
    font-size: small;
    margin: 0;
}
.btn-outline{
    margin-bottom: 15%;
}

.card{
 background-color:white;
 border-radius: 10px;
 box-shadow: 0px 4px 10px gray;
 padding: 20px;
 margin: 10px;
 font-size: 14px;
 color: #333;
}
.adjust{
    text-align: justify;
}
.adjust h1{
    font-size: 18px;
    font-weight: 900;
    text-align: start;
}
.showcase-form{
    position: relative;
    top: 60px;
    height: 350px;
    width: 330px;
    padding: 40px;
    z-index: 100;
    
}

}

@keyframes slideInFromLeft{
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0);
    }
}
@keyframes slideInFromRight{
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0);
    }
}

@keyframes slideInFromTop{
    0%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateX(0);
    }
}
@keyframes slideInFromBottom{
    0%{
        transform: translateY(100%);
    }
    100%{
        transform: translateX(0);
    }
}

.showcase-text{
    animation: slideInFromLeft 0.9s ease-in-out;
}

.bg-dark{
    background-color: #0c3b79;
    color: #fff
    ;
}



.showcase form textarea{
    margin: auto;
    width:100%;
    height: 10vh;
}

.showcase-form textarea:focus{
    outline: none;
}

footer{
    color: #494949;
    background-color: #eeeaea;
}
footer .contact_info{
    line-height: 135%;
    margin: 2% 3%;
    padding: 2%;

}

footer .contact_info h2{
    margin-bottom: 3%;
    margin-left: 0%;
}

footer .about_info {
    line-height:6vh;
    margin:2% 7%;
    padding: 2%;
}

footer .about_info_seg{
    float: right;
}
footer .footer_base p{
font-size: 10px;
 margin:2% 7%;
    padding: 2%;
}

footer h2{
    margin: 0;
}
footer p{
    margin:2% 10% ;
    line-height: 1.1;
    color: white;
    
}

footer_link{
    margin: 0 40px;
}

.custom{
    color: #0c3b79;
    font-size: 30px;
    font-family: monospace;
    font-weight: 600;
    margin: 0;
    padding: 0;
    background-image: url('science.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
}

.custom img{
    width: 100%;
    height: 50vh;
}
.custom h1{
    padding-left: 2%;
    mix-blend-mode: difference;
    color: white;
    position: relative;
    top: 70%;
    opacity: 10;
    z-index: 100;
}

.box_3{
    color: #0c3b79;
    font-size: 30px;
    font-family: monospace;
    font-weight: 600;
    margin: 0;
    padding: 0;
    background-image: url('entertain.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
}

.box_3 img{
    width: 100%;
    height: 50vh;
}
.box_3 h1{
    padding-left: 2%;
    mix-blend-mode: difference;
    color: white;
    position: relative;
    top: 70%;
    opacity: 10;
    z-index: 100;
}.box_2{
    color: #0c3b79;
    font-size: 30px;
    font-family: monospace;
    font-weight: 600;
    margin: 0;
    padding: 0;
    background-image: url('campus.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
}

.box_2 img{
    width: 100%;
    height: 50vh;
}
.box_2 h1{
    padding-left: 2%;
    mix-blend-mode: difference;
    color:white;
    position: relative;
    top: 70%;
    opacity: 1;
    z-index: 10;
}

.social{
    bottom: 20px;
    z-index: 10;
    display: inline-flex;
    font-size: small;
}

.social li{
    list-style: none;
}
.social li a{
    display: inline-block;
    color: black;
    margin-right: 20px;
    transform: scale(0.5);
    transition: 0.5s;
  
}
.social img{
    width: 70px;
      border-radius:40%;
      
}
.social li a:hover{
    transform:scale(0.6) translateY(-15px) ;
}


/*Newsline*/
.Newsline{
    box-sizing: content-box;
    margin: 0;
    gap: 20px;
}
.Newsline h5{
 padding-left: 20px;
}
.card{
 background-color:white;
 border-radius: 10px;
 box-shadow: 3px 3px 3px gray;
 padding: 20px;
 margin: 10px;
 color: #333;
}

.card .side_page{
    margin: 0;
}

 .side_page img{
    width: 120px;
    height: 15vh;
    float: right;
    margin: 0;
}

.side_page_base{
    font-size: 10px;
    margin-top: 20px;
    padding-left: 20px;
    color: rgb(43, 41, 41);
}

.full_page{
    margin:2%;
    padding: 0;
}

.full_page img{
    width: 100%;
    border-radius: 10px;
    
    
}

.full_page h4{
    padding-left: 2%;
    box-sizing: border-box;
    position: relative;
    top: 100%;
}
.full_page p{
    padding: 1.5%;
}
.full_page_base{
    font-size: 10px;
    margin-top:2%;
    padding-left: 30px;
    padding-bottom: 4%;
    color: rgb(43, 41, 41);
}

.mack {
  margin: 0 10px;
  font-size:14px;
}


.mack .card {
  margin: 30px auto;
  max-width: 700px;
  display: grid;
  grid-template-columns: 10% 90%;
  gap: 20px;
}

.card p{
  text-align: start;
}
.card ul li{
  list-style-type: upper-alpha;
}
</style>
