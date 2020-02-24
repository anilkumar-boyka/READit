<template>

  <div class="hello">
   
   <h1 @click="data">hello</h1>   
   {{id}}  
  </div>
</template>

<script>
import snoowrap from 'snoowrap';
import utils from '@/utils.js';

export default {
  name: 'HomePage',
  props:['id'],
  data() {
    return {
    	person:null,
    };
  },
  methods:{
  	data:function()
  	{
  		console.log('images');
  		this.person=id;
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 
</style>
