<template>

  <div class="hello">
    
    <div :key="image"v-for="(image,index) in images">
      <div v-if="id==index">
        <img :src="images[index]">
    </div>
    </div>


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
    	imgId:this.$route.params.id,
      images:[]
    };
  },
  
  mounted:
  	function()
  	{
  		utils.r.getHot().map(post => post).then((data)=>
      {
        console.log('dataAhead')
        // console.log(data[25].url);
        for(var i=0;i<data.length;i++)
        { 
          this.images.push(data[i].url);
        }

      }).catch(err=>console.log('error is'+err));
  		
  	}
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 
</style>
