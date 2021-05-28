

export default{
  data(){
    return{
      form:{
        name:'',
      },
      layout:'inline',
      system:this.getSystem()
    }
  },
  created(){
      console.log('进入')
      console.log(this.getSystem())
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        that.fullWidth = window.fullWidth;
        console.log(that.fullWidth)
      })()
    };
    var device_type = navigator.userAgent; //获取userAgent信息
    console.log(device_type); 
  },
  methods:{

  }
}