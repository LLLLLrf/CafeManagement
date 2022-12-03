<template>
    <div class="layout">
        <!-- create order option -->
        <el-form :model="form" label-width="120px" class="order-form">
            <el-form-item label="name:">
              <div style=";min-width: 100px;">
                {{good.name}}
              </div>
            </el-form-item>
            <el-form-item label="image:">
              <div style=";min-width: 100px;">
                <!-- <img :src="good.image" height="260" width="260" style="border-radius: 8px"/> -->

                <el-image
                  style="width: 260px; height: 260px;border-radius: 8px"
                  :src="good.image"
                  :preview-src-list="[good.image]"
                  :initial-index="1"
                  fit="cover"
                />

              </div>
            </el-form-item>
            <el-form-item label="describe:">
              <div style=";min-width: 100px;">
                {{good.describe}}
              </div>
            </el-form-item>
            <el-form-item label="release date:">
              <div style=";min-width: 100px;">
                {{new Date(good.createdAt).toDateString()}}
              </div>
            </el-form-item>
            <el-form-item label="price:">
              <div style=";min-width: 100px;">
                {{good.price}}
              </div>
            </el-form-item>
            <el-form-item label="temp:">
                <el-select v-model="sig.temp" placeholder="please select temperature">
                    <el-option label="hot" value="hot" />
                    <el-option label="cold" value="cold" />
                </el-select>
            </el-form-item>
            <el-form-item label="sugar:">
                <el-select v-model="sig.sugar" placeholder="please select sugar">
                    <el-option label="less" value="less" />
                    <el-option label="normal" value="normal" />
                </el-select>
            </el-form-item>
            <el-form-item label="amount:">
              <div style="border: #2F3CF4 2px solid;border-radius:6px;padding: -4px;">
                <el-input-number v-model="sig.amount" :min="1" :max="99"  class="choose-num"/>
              </div>
            </el-form-item>
        </el-form>
        <button class="btn-shine" @click="onsubmit()">
            <span style="font-weight:900;">add in cart</span>
        </button>
    </div>
</template>


<script>

// import GoodsService from '../services/GoodsService'
export default{
    props: [
        'good'
    ],
    data() {
        return {
            sig:{
                name: this.good,
                temp: undefined,
                sugar: undefined,
                amount: 0,
                price: 0,
                fit:'cover',
            }
        };
    },
    methods: {
        onsubmit(){
            this.sig.price=this.good.price
            this.$emit('detail',this.sig)
        }
    },
    mounted() {
    },
}
</script>

<style scoped>
.layout{
    color: black;
}
.order-form{
    background-color:#fff;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    font-weight: 600;
}

/deep/ .el-select .el-input__wrapper{
    /* background-color: blueviolet; */
    border-radius: 8px;
    /* background-color: cornsilk; */
    border: #2F3CF4 2px solid;
}
/deep/ .el-select .el-input__inner{
    font-weight: 700;
}

button {
  position: relative;
  margin: 0;
  padding: 17px 35px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

button span {
  color: #164ca7;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

button:hover {
  animation: rotate624 0.7s ease-in-out both;
}

button:hover span {
  animation: storm1261 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes rotate624 {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes storm1261 {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }

  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }

  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }

  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }

  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}

.btn-shine {
  border: 1px solid;
  overflow: hidden;
  position: relative;
  width: 200px;
  margin: auto;
}

.btn-shine span {
  z-index: 20;
}

.btn-shine:after {
  background: #2F3CF4;
  content: "";
  height: 155px;
  left: -75px;
  opacity: 0.4;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

.btn-shine:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>