<template>
  <router-view/>
</template>

<style>

        /* UTILITIES CSS */

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

.sm-1 {
    font-size: 1.5rem;
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

.grid-2 {
    grid-template-columns: repeat(2, 1fr);
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

        /* ANIMATIONS */


@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slideInFromRight {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slideInFromTop {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slideInFromBottom {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes zoomIn {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1.0);
    }
}

@keyframes zoomOut {
    0% {
        transform: scale(2.0);
    }

    100% {
        transform: scale(1.0);
    }
}


        /* Specific CSS LINES */


@import url('https://fonts.googoleapis.com/css2?family=Lato:wght@300&display=swap');

*{
    box-sizing: content-box;
    padding: 0;
    margin: 0;
    /*font-size: 14px;*/
}

:root {
    --primary-color: #047aed;
    --secondary-color: #1c3fa8;
    --light-color: #f4f4f4;
    --dark-color: #010616;
    --success-color: #5cb85c;
    --error-color: #d9534f;
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

.grid-3 .card {
    margin: 0;
}

.stats,
.question-template {
    animation: slideInFromBottom 1s ease-in;
}

        /* STATS */

.stats .container .stats-heading {
  color: #047aed;
  font-weight: 700;
}

.stats .container .grid {
  max-width: 900px;
}

        /* QUESTIONS TEMPLATE */

.question-template {
    margin: 0 10px;
    font-size: 14px;
}

.question-template .container .question-heading {
    color: #047aed;
    font-weight: 700;
}

.question-template .card {
    margin: 30px auto;
    max-width: 700px;
    display: grid;
    grid-template-columns: 10% 90%;
    gap: 20px;
}

.solution a{
    font-size: 12px;
    color:#34d015;
    float: right;
    font-weight: 500;
    transition: transform 0.5s ease-in-out;
}
.solution a:hover{
transform:scale(1.2) ;
}
.solution p{
    padding:4%;
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



@media(max-width: 768px){
    .grid,
    .showcase .grid{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
    .question-template{
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

    .adjust{
        text-align: justify;
    }

    .adjust h1{
        font-size: 18px;
        font-weight: 900;
        text-align: start;
    }
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
}

footer h2{
    margin: 0;
}
footer p{
    margin:2% 10% ;
    line-height: 1.1;
    color: white;
    
}

.footer_link{
    margin: 0 40px;
}

.custom{
    color: #0c3b79;
    font-size: 30px;
    font-family: monospace;
    font-weight: 600;
    margin: 0;
    padding: 0;
    background-image: url('/assets/imgs/bg1.jpg');
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
    background-image: url('/assets/imgs/bg1.jpg');
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
    background-image: url('/assets/imgs/bg1.jpg');
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


/*Newsline*/
.Newsline{
    box-sizing: content-box;
    margin: 0;
    gap: 20px;
}
.Newsline h5{
 padding-left: 20px;
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

.card p{
  text-align: start;
}
.card ul li{
  list-style-type: upper-alpha;
}
</style>
