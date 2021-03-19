<template>
    <div>
        <p class="text">投资者签署确认</p>
        <p class="content">本人已经了解并愿意遵守国家有关期货市场管理的法律、法规、规章及相关业务规则，本人在此郑重承诺以上填写的内容真实、准确、完整。</p>
        <div class="footer">
            <p>投资者及日期(签章):</p>
            <img :src="url" alt="" class="picture" @click="openDialog">
        </div>
        <van-dialog 
        v-model="show" 
        title="确认签署" 
        :beforeClose="beforeClose"
        confirmButtonText='关闭' >
            <Signature @setSign='setSign'></Signature>
        </van-dialog>
    </div>
</template>

<script>
export default {
    components:{
        Signature:()=>import("@/components/Signature"),
    },
    data(){
        return{
            show: false,
            url:''
        }
    },
    methods:{
        openDialog(){
            this.show=true
            this.beforeClose()
        },
        beforeClose(action, done){
            if(action==='confirm') {
                done()
            }
        },
        setSign(e){
            // console.log(e);
            this.url=e;
        }
    }
    
}
</script>

<style scoped>
.van-dialog{
    width: 346px;
    height: 392px;
}
.text{
  font-size: 16px;
  text-align: left;
  font-weight: 900;
  padding-left: 10px;
}
.content{
  text-indent: 20px;
  font-size: 16px;
  text-align: left;
  font-weight: 900;
  padding: 0 10px;
  margin-bottom: 0;
}
.footer{
    display: flex;
    padding-top: 5px;
}
.footer p{
    font-size: 16px;
    font-weight: 900;
    padding-left: 115px;

}
.picture{
    width: 92px;
    height: 20px;
    margin-top: 18px
}
</style>