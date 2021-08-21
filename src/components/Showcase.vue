<template>
    <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h2 class="sm-1">AN EDUCATIONAL PLATFORM</h2>
                <p>Welcome to the best platform for online educational institute</p>
                <router-link :to="{ name: 'Contact' }" class="btn btn-outline">Read More</router-link>
            </div>
            <!-- div class card form -->
        </div>
    </section>
</template>

<script>
export default {
    name: 'Showcase'
}
</script>

<style>

.showcase{
    margin: auto;
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
    animation: slideInFromRight 1s ease-in;
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

.showcase-text{
    animation: slideInFromLeft 0.9s ease-in-out;
}

.showcase-form textarea{
    margin: auto;
    width:100%;
    height: 10vh;
}

.showcase-form textarea:focus{
    outline: none;
} 

@media(max-width: 950px){
    .grid,
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
        animation: slideInFromTop 1s ease-in;
    }
    .showcase-form{
        justify-self: center ;
        margin: auto;
        animation: slideInFromBottom 1s ease-in;
    }
    .btn-outline{
        margin-bottom: 10%;
    }
}

@media(max-width: 500px) {
    .showcase{
        margin-bottom: 20%;
    }

    .btn-outline{
        margin-bottom: 15%;
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

</style>