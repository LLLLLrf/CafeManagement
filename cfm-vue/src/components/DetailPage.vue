<template>
    <div :class="['isActive'?'layout':'close']">
        <button @click="goback(isactive)">
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
            <span>Back</span>
        </button>
    </div>

</template>


<script>
export default{
    data() {
        return {
            isactive:true,
        };
    },
    methods: {
        goback(){
            // 这个地方改变了isactive的值，但样式没有改变
            alert(this.isactive)
            this.isactive = !this.isactive
            // this.$parent.changeStatus()
            alert(this.isactive)
        }
    },
    mounted() {
        this.isactive=true

    },

    watch: {},
}
</script>

<style>
    .layout{
        background-color: #2F3CF4;
        color: white;
        height: 100vh;
        border-radius: 8px;
        position: fixed;
        right:-200%;
        top:0px;
        width: 100%;
        transition: all 120ms;
        z-index: 20;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        animation:slidein 2s ease-out 150ms 1 forwards;
        -webkit-animation:slidein 2s ease-out 150ms 1 forwards; /*Safari and Chrome*/
    }


    @keyframes slidein{
        from {left:80%;}
        to {left:160px;}
    }
    @-webkit-keyframes slidein /*Safari and Chrome*/
    {
        from {left:80%;}
        to {left:160px;}
    }


    .close{
        background-color: #2F3CF4;
        color: white;
        height: 100vh;
        border-radius: 8px;
        position: fixed;
        right:-100%;
        top:0px;
        width: 100%;
        transition: all 120ms;
        z-index: 20;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        animation-play-state: running;
        animation:slideout 2s ease-out 150ms 1 forwards;
        -webkit-animation:slideout 2s ease-out 150ms 1 forwards; /*Safari and Chrome*/
    }


    
    @keyframes slideout{
        from {left:160px;}
        to {left:80%;}
    }
    @-webkit-keyframes slideout /*Safari and Chrome*/
    {
        from {left:80%;}
        to {left:160px;}
    }
    
    /* .animate {
    animation-play-state: paused;
    }
    .active .animate {
        animation-play-state: running;
    } */



/* From uiverse.io by @Jedi-hongbin */
button {
 display: flex;
 height: 3em;
 width: 100px;
 align-items: center;
 justify-content: center;
 background-color: #eeeeee4b;
 border-radius: 8px;
 letter-spacing: 1px;
 transition: all 0.1s linear;
 cursor: pointer;
 border: none;
 background: #fff;
 margin-left: 20px;
 margin-top: 20px;
}

button > svg {
 margin-right: 5px;
 margin-left: 5px;
 font-size: 20px;
 transition: all 0.2s ease-in;
}

button:hover > svg {
 font-size: 1.2em;
 transform: translateX(-8px);
}

button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: translateY(-2px);
}
</style>