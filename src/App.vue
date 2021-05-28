<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
	  return{
		  fullHeight: document.documentElement.clientHeight
	  }
  },
  created(){
	  
  },
  mounted: function () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      };
  
    },
  methods:{
	  
  }
}
</script>

<style  src="@/assets/css/App/App.css"></style>
