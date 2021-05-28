

export default{
  data(){
    return{

    }
  },
  created(){

  },
  mounted: function () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        that.fullWidth = window.fullWidth;
        console.log(that.fullWidth)
      })()
    };

  },
  methods:{

  }
}